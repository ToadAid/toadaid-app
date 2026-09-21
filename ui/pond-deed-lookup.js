// Live read-only deed observation for the World view.
// Batch-reads ownerOf over the Canonical Lore Land Deeds id range through
// Multicall3 on a public Base RPC, then resolves tokenURI metadata through a
// public IPFS gateway. No keys, no signing, no transactions; a connected
// address from the optional WalletConnect observation is treated identically
// to a pasted address. The only local persistence is the deed-index cache in
// localStorage. Observed results bind to the block stamped on the cache.
//
// Stage B2-P4B-P22 adds the deed detail modal, a direct single-id lookup, and
// skeleton/error gallery states — all presentation over the same admitted
// endpoints. The direct-id path never touches the deed-index cache: it is a
// point-in-time read that must not poison the block-stamped complete-scan
// shape. Every detail modal populates only from a record that passed
// validateDetailRecord in pond-deed-detail-policy.js, fail-closed.
import { parseDeedId, rejectedReasonMessage, classifyOwnerReadOutcome, validateDetailRecord } from "./pond-deed-detail-policy.js";

const stage = document.querySelector("#pond-world");
if (!stage) {
  // Not on the World view; nothing to wire.
  throw new Error("pond-deed-lookup: #pond-world is not present");
}

const CONTRACT = stage.getAttribute("data-collection-contract") || "";
const MULTICALL3 = "0xcA11bde05977b3631167028862bE2a173976CA11";
// Two admitted read-only endpoints; both are keyless, CORS-open public Base
// RPCs. If one throttles (HTTP 429) or fails, the next is tried with backoff.
const RPC_URLS = ["https://mainnet.base.org", "https://base-rpc.publicnode.com"];
const IPFS_GATEWAY = "https://gateway.pinata.cloud/ipfs/";
const BLOCKSCOUT_INSTANCE = "https://base.blockscout.com/api/v2/tokens/";
const OPENSEA_ASSET = "https://opensea.io/assets/base/";
const SCAN_START = 1;
const SCAN_CHUNK = 300;
const SCAN_CAP = 6000;
const CHUNK_PAUSE_MS = 500;
const RETRY_DELAYS_MS = [600, 1800, 3600];
const GATEWAY_RETRY_DELAYS_MS = [800, 2400];
const METADATA_CONCURRENCY = 3;
const CACHE_KEY = "pond-deed-index-" + CONTRACT.toLowerCase();
const cacheKeyId = CONTRACT.toLowerCase();

const walletInput = document.querySelector("#viewed-wallet");
const walletStatus = document.querySelector("#wallet-status");
const lookupButton = document.querySelector(".wallet-lookup-form button[type=submit]");
const gallery = document.querySelector(".deed-gallery");
const galleryHeaderNote = gallery ? gallery.querySelector(":scope > header p") : null;
const deedGrid = gallery ? gallery.querySelector(".deed-grid") : null;
const idForm = document.querySelector(".deed-id-lookup-form");
const idInput = document.querySelector("#viewed-deed-id");
const idStatus = document.querySelector("#deed-id-status");
const idButton = document.querySelector(".deed-id-lookup-form button[type=submit]");
const detailBackdrop = document.querySelector("#deed-detail-backdrop");
const detailModal = detailBackdrop ? detailBackdrop.querySelector(".deed-detail-modal") : null;
const detailTitle = document.querySelector("#deed-detail-title");
const detailDescription = document.querySelector("#deed-detail-description");
const detailImage = document.querySelector("#deed-detail-image");
const detailImageNote = document.querySelector("#deed-detail-image-note");
const detailOwner = document.querySelector("#deed-detail-owner");
const detailBlock = document.querySelector("#deed-detail-block");
const detailFetched = document.querySelector("#deed-detail-fetched");
const detailTraits = document.querySelector("#deed-detail-traits");
const detailLinks = document.querySelector("#deed-detail-links");
const detailCloseButton = document.querySelector("#deed-detail-close");

const restingNote = galleryHeaderNote ? galleryHeaderNote.textContent : "";
const restingGrid = deedGrid ? deedGrid.innerHTML : "";
let liveMode = false;
let runToken = 0;
let detailOpen = false;
let detailLastFocused = null;

const w = (value) => value.toString(16).padStart(64, "0");
const strip0x = (hex) => (hex.startsWith("0x") ? hex.slice(2) : hex);
const shortAddress = (address) => address.slice(0, 6) + "…" + address.slice(-4);

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const rpcRequest = async (method, params) => {
  let lastError = null;
  for (const url of RPC_URLS) {
    for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt += 1) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params })
        });
        if (response.status === 429 || response.status >= 500) {
          throw new Error("HTTP " + response.status);
        }
        if (!response.ok) throw new Error("HTTP " + response.status);
        const payload = await response.json();
        if (payload.error) throw new Error(payload.error.message || "call reverted");
        return payload.result;
      } catch (error) {
        lastError = error;
        // RPC-level errors (reverts, bad params) will not improve on retry;
        // only transport-shaped failures rotate or back off.
        const message = error && error.message ? String(error.message) : "";
        const retryable = message.startsWith("HTTP") || message === "Failed to fetch" ||
          message === "Load failed" || message === "NetworkError when attempting to fetch resource.";
        if (!retryable) throw error;
        if (attempt < RETRY_DELAYS_MS.length) await pause(RETRY_DELAYS_MS[attempt]);
      }
    }
  }
  throw lastError || new Error("all read-only Base RPC endpoints failed");
};

const ethCall = async (to, data) => {
  const result = await rpcRequest("eth_call", [{ to, data }, "latest"]);
  if (!result || result === "0x") throw new Error("Base RPC returned empty data");
  return result;
};

const readBlockNumber = async () => {
  const result = await rpcRequest("eth_blockNumber", []);
  return result ? parseInt(result, 16) : 0;
};

// aggregate3(Call3[] calls) — Call3 = (address target, bool allowFailure, bytes callData).
// Bool words are right-aligned; the bytes offset word follows the two static words.
const encodeAggregate3 = (ids) => {
  let head = "0x82ad56cb" + w(0x20) + w(ids.length);
  const heads = [];
  const tails = [];
  let position = 0x20 * ids.length; // offsets are relative to the array data start
  for (const id of ids) {
    const data = "6352211e" + w(id);
    const tail = "000000000000000000000000" + cacheKeyId.slice(2) +
      w(1) + w(0x60) + w(data.length / 2) + data;
    heads.push(w(position));
    tails.push(tail);
    position += tail.length / 2;
  }
  return head + heads.join("") + tails.join("");
};

// Result[] = (bool success, bytes returnData)[]; element offsets are relative
// to the element-head region (the word after the array length).
const decodeAggregate3 = (hex) => {
  const body = strip0x(hex);
  const W = 64;
  const count = parseInt(body.slice(W, 2 * W), 16);
  const headsAt = 2 * W;
  const results = [];
  for (let index = 0; index < count; index += 1) {
    const offset = parseInt(body.slice(headsAt + index * W, headsAt + index * W + W), 16) * 2;
    const item = headsAt + offset;
    const success = parseInt(body.slice(item, item + W), 16) === 1;
    const dataOffset = parseInt(body.slice(item + W, item + 2 * W), 16) * 2;
    const length = parseInt(body.slice(item + dataOffset, item + dataOffset + W), 16);
    const data = body.slice(item + dataOffset + W, item + dataOffset + W + length * 2);
    results.push({ success, data });
  }
  return results;
};

const readIndexCache = () => {
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.owners || !parsed.block) return null;
    return parsed;
  } catch {
    return null;
  }
};

const writeIndexCache = (index) => {
  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(index));
  } catch {
    /* cache is a convenience only; observation still works without it */
  }
};

const scanDeedIndex = async (onProgress) => {
  const owners = {};
  let chunkStart = SCAN_START;
  let chunksDone = 0;
  while (chunkStart < SCAN_CAP) {
    const ids = [];
    for (let id = chunkStart; id < chunkStart + SCAN_CHUNK; id += 1) ids.push(id);
    const result = await ethCall(MULTICALL3, encodeAggregate3(ids));
    const calls = decodeAggregate3(result);
    calls.forEach((call, index) => {
      if (!call.success || call.data.length < 64) return;
      owners[chunkStart + index] = "0x" + call.data.slice(24, 64);
    });
    chunkStart += SCAN_CHUNK;
    chunksDone += 1;
    if (onProgress) onProgress(chunksDone, Object.keys(owners).length);
    const mintedInChunk = calls.some((call) => call.success);
    if (!mintedInChunk) break; // first fully-empty chunk ends the id range
    await new Promise((resolve) => setTimeout(resolve, CHUNK_PAUSE_MS));
  }
  const block = await readBlockNumber();
  return { block, fetchedAt: new Date().toISOString(), owners };
};

const getIndex = async ({ refresh, onProgress }) => {
  if (!refresh) {
    const cached = readIndexCache();
    if (cached) return cached;
  }
  const fresh = await scanDeedIndex(onProgress);
  writeIndexCache(fresh);
  return fresh;
};

const decodeString = (hex) => {
  const body = strip0x(hex);
  const length = parseInt(body.slice(64, 128), 16) * 2;
  const chars = body.slice(128, 128 + length);
  const bytes = new Uint8Array(chars.length / 2);
  for (let index = 0; index < bytes.length; index += 1) {
    bytes[index] = parseInt(chars.slice(index * 2, index * 2 + 2), 16);
  }
  return new TextDecoder().decode(bytes);
};

const ipfsToGateway = (uri) => {
  if (!uri) return "";
  return uri.startsWith("ipfs://")
    ? IPFS_GATEWAY + uri.slice("ipfs://".length).replace(/^ipfs\//, "")
    : uri;
};

const fetchFromGateway = async (id) => {
  const uri = decodeString(await ethCall(CONTRACT, "0xc87b56dd" + w(id))); // tokenURI(uint256)
  const url = ipfsToGateway(uri);
  let lastError = null;
  for (let attempt = 0; attempt <= GATEWAY_RETRY_DELAYS_MS.length; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.status === 429 || response.status >= 500) {
        throw new Error("gateway answered HTTP " + response.status + ", retrying");
      }
      if (!response.ok) throw new Error("gateway answered HTTP " + response.status);
      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt < GATEWAY_RETRY_DELAYS_MS.length) await pause(GATEWAY_RETRY_DELAYS_MS[attempt]);
    }
  }
  throw lastError;
};

// Fallback tier, mirroring the Tobyworld lore-land deed viewer: when the
// IPFS gateway is unreachable, the keyless Blockscout token-instance mirror
// serves the same metadata (its image fields are normalized through the
// same gateway before display).
const fetchFromBlockscout = async (id) => {
  const response = await fetch(BLOCKSCOUT_INSTANCE + CONTRACT + "/instances/" + id);
  if (!response.ok) throw new Error("mirror answered HTTP " + response.status);
  const payload = await response.json();
  const metadata = payload && payload.metadata ? payload.metadata : {};
  return {
    name: metadata.name || payload.name || null,
    description: metadata.description || null,
    image: metadata.image || metadata.image_url || payload.image_url || null,
    external_url: metadata.external_url || payload.external_app_url || null,
    attributes: Array.isArray(metadata.attributes) ? metadata.attributes : []
  };
};

const fetchDeedMetadata = async (id) => {
  try {
    return await fetchFromGateway(id);
  } catch {
    return fetchFromBlockscout(id);
  }
};

const setWalletStatus = (message, state) => {
  if (!walletStatus) return;
  walletStatus.textContent = message;
  walletStatus.classList.toggle("is-error", state === "error");
  walletStatus.classList.toggle("is-valid", state === "valid");
};

const setIdStatus = (message, state) => {
  if (!idStatus) return;
  idStatus.textContent = message;
  idStatus.classList.toggle("is-error", state === "error");
  idStatus.classList.toggle("is-valid", state === "valid");
};

const setBusy = (busy) => {
  if (!lookupButton) return;
  lookupButton.disabled = busy;
  lookupButton.textContent = busy ? "Observing…" : "Check lands";
};

const setIdBusy = (busy) => {
  if (!idButton) return;
  idButton.disabled = busy;
  idButton.textContent = busy ? "Observing…" : "Look up deed";
};

const traitName = (attribute) => {
  const value = typeof attribute === "string" ? attribute : attribute && attribute.trait_type;
  return value || "Trait";
};
const traitValue = (attribute) => {
  if (typeof attribute === "string") return "";
  return attribute && (attribute.value ?? attribute.value2 ?? "") || "";
};

// Coerce raw fetched metadata into the exact shape validateDetailRecord
// inspects. Fields that are not strings become null; traits must be an array.
const toDetailCandidate = (id, metadata, observation) => {
  const meta = metadata && typeof metadata === "object" ? metadata : {};
  const text = (value) => (typeof value === "string" ? value : null);
  return {
    id,
    metadata: {
      name: text(meta.name),
      description: text(meta.description),
      image: text(meta.image),
      external_url: text(meta.external_url),
      attributes: Array.isArray(meta.attributes) ? meta.attributes : [],
    },
    owner: observation && typeof observation.owner === "string" ? observation.owner : null,
    block: observation && Number.isInteger(observation.block) ? observation.block : 0,
    fetchedAt: observation && typeof observation.fetchedAt === "string" ? observation.fetchedAt : null,
  };
};

const restoreFixtureGallery = () => {
  liveMode = false;
  if (deedGrid) deedGrid.innerHTML = restingGrid;
  if (galleryHeaderNote) galleryHeaderNote.textContent = restingNote;
  const bar = gallery ? gallery.querySelector(".deed-results-bar") : null;
  if (bar) bar.remove();
};

const ensureLiveMode = () => {
  if (liveMode) return;
  liveMode = true;
  if (deedGrid) deedGrid.innerHTML = "";
  if (galleryHeaderNote) {
    galleryHeaderNote.textContent = "Live read-only observation · images and traits resolve through a public IPFS gateway.";
  }
  const bar = document.createElement("div");
  bar.className = "deed-results-bar";
  bar.innerHTML =
    '<p class="deed-results-stamp" role="status" aria-live="polite"></p>' +
    '<div class="deed-results-actions">' +
    '<button type="button" class="deed-refresh">Refresh index</button>' +
    '<button type="button" class="deed-clear">Clear results</button>' +
    "</div>";
  if (gallery) gallery.insertBefore(bar, deedGrid);
  bar.querySelector(".deed-clear").addEventListener("click", () => {
    restoreFixtureGallery();
    setWalletStatus("Fixture preview restored. Live observation is available again at any time.", "");
  });
  bar.querySelector(".deed-refresh").addEventListener("click", () => {
    const wallet = walletInput ? walletInput.value.trim() : "";
    if (/^0x[a-fA-F0-9]{40}$/.test(wallet)) lookup(wallet, { refresh: true });
  });
};

const buildTraitList = (attributes) => {
  const list = document.createElement("dl");
  list.className = "deed-traits";
  for (const attribute of attributes || []) {
    const item = document.createElement("div");
    const term = document.createElement("dt");
    const detail = document.createElement("dd");
    term.textContent = traitName(attribute);
    detail.textContent = String(traitValue(attribute));
    item.append(term, detail);
    list.append(item);
  }
  return list;
};

// Fixed-aspect shimmer placeholder shown while one deed's metadata resolves,
// so the grid never jumps when the skeleton is replaced by the real card.
const renderSkeletonCard = (id) => {
  const card = document.createElement("article");
  card.className = "deed-card deed-card-live is-skeleton";
  card.setAttribute("aria-busy", "true");
  const media = document.createElement("div");
  media.className = "deed-skeleton-media";
  media.setAttribute("aria-hidden", "true");
  const label = document.createElement("div");
  const collection = document.createElement("span");
  const tokenId = document.createElement("strong");
  const title = document.createElement("small");
  collection.textContent = "Canonical Lore Land Deed";
  tokenId.textContent = "#" + id;
  title.textContent = "Resolving metadata…";
  label.append(collection, tokenId, title);
  card.append(media, label);
  return card;
};

// Fail-visible metadata failure state with a run-token-guarded Retry. A
// retry attached before a newer lookup started is refused — stale retries
// must never resurrect cards from a cancelled run.
const renderErrorCard = (id, reason, onRetry) => {
  const card = document.createElement("article");
  card.className = "deed-card deed-card-live is-error";
  const state = document.createElement("div");
  state.className = "deed-error-state";
  const strong = document.createElement("strong");
  strong.textContent = "Metadata unavailable";
  const small = document.createElement("small");
  small.textContent = reason || "unknown error";
  const retry = document.createElement("button");
  retry.type = "button";
  retry.className = "deed-retry";
  retry.textContent = "Retry";
  const runIdAtAttach = runToken;
  retry.addEventListener("click", (event) => {
    event.stopPropagation();
    if (runIdAtAttach !== runToken) return;
    const skeleton = renderSkeletonCard(id);
    card.replaceWith(skeleton);
    onRetry(skeleton);
  });
  state.append(strong, small, retry);
  card.append(state);
  return card;
};

// Fetch metadata for one id and swap the given skeleton in place for the
// resolved card or a fail-visible error card. Retries reuse the run id
// captured when the card was attached.
const resolveDeedInto = async (skeleton, id, observation, runId) => {
  try {
    const metadata = await fetchDeedMetadata(id);
    if (runId !== runToken) return;
    skeleton.replaceWith(renderDeedCard(id, metadata, observation));
  } catch (error) {
    if (runId !== runToken) return;
    const reason = error && error.message ? String(error.message) : "unknown error";
    skeleton.replaceWith(renderErrorCard(id, reason, (replacement) => {
      if (runId !== runToken) return;
      resolveDeedInto(replacement, id, observation, runId);
    }));
  }
};

const renderDeedCard = (id, metadata, observation = null) => {
  const card = document.createElement("article");
  card.className = "deed-card deed-card-live";
  const image = document.createElement("img");
  image.width = 1000;
  image.height = 1000;
  image.loading = "lazy";
  image.alt = metadata && metadata.name ? metadata.name : "Canonical Lore Land Deed " + id;
  image.referrerPolicy = "no-referrer";
  const resolvedImage = ipfsToGateway(metadata && metadata.image);
  if (resolvedImage) image.src = resolvedImage;
  const label = document.createElement("div");
  const collection = document.createElement("span");
  const tokenId = document.createElement("strong");
  const title = document.createElement("small");
  collection.textContent = "Canonical Lore Land Deed";
  tokenId.textContent = "#" + id;
  title.textContent = metadata && metadata.name ? metadata.name : "Metadata unavailable";
  label.append(collection, tokenId, title);
  card.append(image, label);
  if (metadata && Array.isArray(metadata.attributes) && metadata.attributes.length) {
    card.append(buildTraitList(metadata.attributes));
  }
  const links = document.createElement("div");
  links.className = "deed-links";
  const opensea = document.createElement("a");
  opensea.href = OPENSEA_ASSET + CONTRACT + "/" + id;
  opensea.target = "_blank";
  opensea.rel = "noreferrer";
  opensea.textContent = "OpenSea";
  links.append(opensea);
  if (metadata && metadata.external_url) {
    const external = document.createElement("a");
    external.href = metadata.external_url;
    external.target = "_blank";
    external.rel = "noreferrer";
    external.textContent = "Tobyworld";
    links.append(external);
  }
  card.append(links);
  // Live cards are activatable: clicking (or Enter/Space on the focused
  // card, repo idiom) opens the detail modal with the observation context.
  // A <button> cannot contain the card's own links, so the card itself takes
  // the button role. Fixture cards are never activatable.
  card.classList.add("is-openable");
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-haspopup", "dialog");
  card.setAttribute("aria-label", "Observe Canonical Lore Land Deed #" + id + " in the detail view");
  const candidate = toDetailCandidate(id, metadata, observation);
  const open = () => openDeedDetail(candidate);
  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    open();
  });
  card.addEventListener("keydown", (event) => {
    if (event.target !== card) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });
  return card;
};

const populateDetail = (record, note) => {
  const { id, metadata, owner, block, fetchedAt } = record;
  if (detailTitle) detailTitle.textContent = metadata.name || "Deed #" + id;
  if (detailDescription) {
    detailDescription.textContent =
      metadata.description !== null ? metadata.description
      : note ? note
      : "No description was provided for this deed's metadata.";
  }
  if (detailImage) {
    if (metadata.image) {
      detailImage.hidden = false;
      detailImage.src = ipfsToGateway(metadata.image);
      detailImage.alt = metadata.name || "Canonical Lore Land Deed " + id;
      if (detailImageNote) detailImageNote.hidden = true;
      detailImage.onerror = () => {
        if (detailImageNote) {
          detailImageNote.textContent = "Artwork could not be loaded from the public IPFS gateway.";
          detailImageNote.hidden = false;
        }
      };
    } else {
      detailImage.hidden = true;
      detailImage.removeAttribute("src");
      detailImage.onerror = null;
      if (detailImageNote && note) {
        detailImageNote.textContent = note;
        detailImageNote.hidden = false;
      } else if (detailImageNote) {
        detailImageNote.hidden = true;
      }
    }
  }
  if (detailOwner) detailOwner.textContent = owner;
  if (detailBlock) detailBlock.textContent = String(block);
  if (detailFetched) {
    detailFetched.textContent = fetchedAt ? new Date(fetchedAt).toLocaleString() : "During this observation";
  }
  if (detailTraits) {
    if (metadata.attributes.length) {
      // Rebuild in place — the module-level node reference must stay live.
      const fresh = buildTraitList(metadata.attributes);
      detailTraits.textContent = "";
      while (fresh.firstChild) detailTraits.append(fresh.firstChild);
      detailTraits.hidden = false;
    } else {
      detailTraits.hidden = true;
    }
  }
  if (detailLinks) {
    detailLinks.textContent = "";
    const opensea = document.createElement("a");
    opensea.href = OPENSEA_ASSET + CONTRACT + "/" + id;
    opensea.target = "_blank";
    opensea.rel = "noreferrer";
    opensea.textContent = "OpenSea";
    detailLinks.append(opensea);
    if (metadata.external_url) {
      const external = document.createElement("a");
      external.href = metadata.external_url;
      external.target = "_blank";
      external.rel = "noreferrer";
      external.textContent = "Tobyworld";
      detailLinks.append(external);
    }
  }
};

const openDeedDetail = (candidate, { note = null } = {}) => {
  if (!detailBackdrop || !detailModal || detailOpen) return;
  const validated = validateDetailRecord(candidate);
  if (!validated.ok) {
    setWalletStatus(
      "The deed detail could not be validated, so the detail view stayed closed. The read-only posture is unchanged.",
      "error"
    );
    return;
  }
  populateDetail(validated.record, note);
  detailLastFocused = document.activeElement;
  detailOpen = true;
  detailBackdrop.hidden = false;
  // The page scroller on the World view is body (the shell is overflow:hidden).
  document.body.classList.add("is-modal-open");
  window.requestAnimationFrame(() => {
    detailModal.focus();
  });
};

const closeDeedDetail = () => {
  if (!detailOpen || !detailBackdrop) return;
  detailOpen = false;
  detailBackdrop.hidden = true;
  document.body.classList.remove("is-modal-open");
  const trigger = detailLastFocused;
  detailLastFocused = null;
  if (trigger && trigger.isConnected) trigger.focus();
};

document.addEventListener("keydown", (event) => {
  if (!detailOpen || !detailModal) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeDeedDetail();
    return;
  }
  if (event.key === "Tab") {
    // Keep Tab cycling inside the dialog while it is open.
    const focusables = [...detailModal.querySelectorAll('a[href], button:not([disabled])')]
      .filter((element) => element.offsetParent !== null || element === document.activeElement);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && (document.activeElement === first || !detailModal.contains(document.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !detailModal.contains(document.activeElement))) {
      event.preventDefault();
      first.focus();
    }
  }
});

if (detailCloseButton) detailCloseButton.addEventListener("click", closeDeedDetail);
if (detailBackdrop) {
  detailBackdrop.addEventListener("click", (event) => {
    if (event.target === detailBackdrop) closeDeedDetail();
  });
}

const renderEmptyState = (wallet, index) => {
  const empty = document.createElement("article");
  empty.className = "deed-empty";
  const strong = document.createElement("strong");
  strong.textContent = "No deeds observed for " + shortAddress(wallet);
  const small = document.createElement("small");
  small.textContent =
    "This address held no Canonical Lore Land Deeds at block " + index.block +
    ". Observation is read-only; try another address or refresh the index.";
  empty.append(strong, small);
  if (deedGrid) deedGrid.append(empty);
};

const stampResults = (wallet, index, ownedCount, pendingCount) => {
  const stamp = gallery ? gallery.querySelector(".deed-results-stamp") : null;
  if (!stamp) return;
  if (pendingCount > 0) {
    stamp.textContent = "Resolving " + pendingCount + " deed record" + (pendingCount === 1 ? "" : "s") +
      " through the IPFS gateway…";
    return;
  }
  stamp.textContent = ownedCount === 0
    ? "Observed at block " + index.block + " · " + new Date(index.fetchedAt).toLocaleString() + " · read-only"
    : "Observed " + ownedCount + " deed" + (ownedCount === 1 ? "" : "s") + " for " + shortAddress(wallet) +
      " at block " + index.block + " · " + new Date(index.fetchedAt).toLocaleString() + " · read-only";
};

const lookup = async (wallet, { refresh = false } = {}) => {
  if (!CONTRACT || !/^0x[a-fA-F0-9]{40}$/.test(CONTRACT)) {
    setWalletStatus("The collection contract configured on this page is not a valid address.", "error");
    return;
  }
  if (!deedGrid) {
    setWalletStatus("The deed gallery is unavailable in this view.", "error");
    return;
  }
  const runId = ++runToken;
  const isMine = (owner) => owner && owner.toLowerCase() === wallet.toLowerCase();

  setBusy(true);
  ensureLiveMode();
  try {
    setWalletStatus("Reading the Canonical Lore Land Deeds index from Base (read-only)…", "");
    const index = await getIndex({
      refresh,
      onProgress: (chunksDone, mintedCount) => {
        if (runId !== runToken) return;
        setWalletStatus("Reading the deed index from Base… chunk " + chunksDone + " · " +
          mintedCount + " deeds observed so far.", "");
      }
    });
    if (runId !== runToken) return;

    const ownedIds = Object.keys(index.owners)
      .map((id) => parseInt(id, 10))
      .filter((id) => isMine(index.owners[id]))
      .sort((a, b) => a - b);
    const stampWallet = wallet;

    deedGrid.innerHTML = "";
    stampResults(stampWallet, index, ownedIds.length, ownedIds.length);

    if (!ownedIds.length) {
      renderEmptyState(wallet, index);
      setWalletStatus(
        "No Canonical Lore Land Deeds were observed for this address at block " + index.block + ".", ""
      );
      return;
    }

    setWalletStatus("Observed " + ownedIds.length + " deed" + (ownedIds.length === 1 ? "" : "s") +
      ". Resolving metadata through the public IPFS gateway…", "valid");

    const queue = ownedIds.slice();
    const resolveOne = async () => {
      while (queue.length) {
        if (runId !== runToken) return;
        const id = queue.shift();
        const skeleton = renderSkeletonCard(id);
        if (deedGrid) deedGrid.append(skeleton);
        const observation = {
          owner: index.owners[id],
          block: index.block,
          fetchedAt: index.fetchedAt,
        };
        await resolveDeedInto(skeleton, id, observation, runId);
        const remaining = queue.length;
        if (runId === runToken) {
          stampResults(stampWallet, index, ownedIds.length, remaining);
        }
      }
    };
    const workers = [];
    for (let index = 0; index < Math.min(METADATA_CONCURRENCY, queue.length); index += 1) {
      workers.push(resolveOne());
    }
    await Promise.all(workers);
    if (runId !== runToken) return;

    setWalletStatus("Observed " + ownedIds.length + " deed" + (ownedIds.length === 1 ? "" : "s") +
      " from the Base contract at block " + index.block + ". Read-only: nothing was signed or stored.", "valid");
  } catch (error) {
    if (runId !== runToken) return;
    setWalletStatus("Live observation failed: " + (error && error.message ? error.message : "unknown error") +
      " The read-only posture is unchanged; try again or refresh the index.", "error");
  } finally {
    if (runId === runToken) setBusy(false);
  }
};

// Direct single-id lookup. Reads ownerOf for one id straight from the Base
// contract — never through the deed-index cache, which must keep its
// block-stamped complete-scan shape. Shares runToken with the wallet scan:
// starting one cancels the other, exactly like the refresh path already did.
const runIdLookup = async () => {
  if (!CONTRACT || !/^0x[a-fA-F0-9]{40}$/.test(CONTRACT)) {
    setIdStatus("The collection contract configured on this page is not a valid address.", "error");
    return;
  }
  const parsed = parseDeedId(idInput ? idInput.value : "");
  if (!parsed.ok) {
    if (idInput) idInput.setAttribute("aria-invalid", "true");
    setIdStatus(rejectedReasonMessage(parsed.reason), "error");
    return;
  }
  if (idInput) idInput.removeAttribute("aria-invalid");
  const id = parsed.id;
  const runId = ++runToken;
  setIdBusy(true);
  try {
    setIdStatus("Reading ownerOf for deed #" + id + " from Base (read-only)…", "");
    let ownerHex = null;
    try {
      ownerHex = await ethCall(CONTRACT, "0x6352211e" + w(id)); // ownerOf(uint256)
    } catch (error) {
      if (runId !== runToken) return;
      const message = error && error.message ? String(error.message) : "unknown error";
      if (classifyOwnerReadOutcome({ errorMessage: message }) === "unminted") {
        setIdStatus(
          "Deed #" + id + ": ownerOf reverted on the Base contract at the latest block, so no owner was " +
          "observed (point-in-time read; the deed may be unminted). The read-only posture is unchanged.",
          "error"
        );
      } else {
        setIdStatus(
          "The owner read for deed #" + id + " failed: " + message +
          " The read-only posture is unchanged; try again.",
          "error"
        );
      }
      return;
    }
    if (runId !== runToken) return;
    if (classifyOwnerReadOutcome({ result: ownerHex }) !== "minted") {
      setIdStatus("Deed #" + id + " returned no readable owner; the observation stopped. Read-only posture unchanged.", "error");
      return;
    }
    const owner = "0x" + strip0x(ownerHex).slice(24, 64);
    setIdStatus("Owner observed for deed #" + id + ". Reading the observed block and metadata…", "");
    const block = await readBlockNumber();
    if (runId !== runToken) return;
    let metadata = null;
    let note = null;
    try {
      metadata = await fetchDeedMetadata(id);
    } catch (error) {
      if (runId !== runToken) return;
      const reason = error && error.message ? String(error.message) : "unknown error";
      metadata = { name: null, description: null, image: null, external_url: null, attributes: [] };
      note =
        "Metadata could not be resolved through the IPFS gateway or the Blockscout mirror (" + reason +
        "); artwork and traits are unavailable in this read-only view.";
    }
    if (runId !== runToken) return;
    setIdStatus("Deed #" + id + " observed at block " + block + ". Read-only: nothing was signed or stored.", "valid");
    openDeedDetail(toDetailCandidate(id, metadata, { owner, block, fetchedAt: null }), note ? { note } : {});
  } finally {
    if (runId === runToken) setIdBusy(false);
  }
};

if (idForm) {
  idForm.addEventListener("submit", (event) => {
    event.preventDefault();
    runIdLookup();
  });
}
if (idInput) {
  idInput.addEventListener("input", () => {
    idInput.removeAttribute("aria-invalid");
  });
}

window.pondDeedLookup = { lookup, closeDeedDetail };