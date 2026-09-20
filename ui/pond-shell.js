const shell = document.querySelector(".pond-shell");
const viewLinks = [...document.querySelectorAll("[data-pond-view-link]")];
const views = [...document.querySelectorAll("[data-pond-view]")];
const homeSurfaces = [...document.querySelectorAll("[data-home-surface]")];
const topbarTitle = document.querySelector(".topbar-title");
const topbarContext = document.querySelector(".topbar-context");
const walletForm = document.querySelector(".wallet-lookup-form");
const walletInput = document.querySelector("#viewed-wallet");
const walletStatus = document.querySelector("#wallet-status");
const heroArt = document.querySelector(".imagined-world-art");
const loreIslands = [...document.querySelectorAll(".lore-island")];

const supportedViews = new Set(["home", "world"]);

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const viewFromHash = () => {
  const candidate = window.location.hash === "#pond-world" ? "world" : "home";
  return supportedViews.has(candidate) ? candidate : "home";
};

const setView = (view, { moveFocus = false } = {}) => {
  if (!supportedViews.has(view)) return;

  shell.dataset.activeView = view;

  for (const surface of views) {
    surface.hidden = surface.dataset.pondView !== view;
  }

  for (const surface of homeSurfaces) {
    surface.hidden = view !== "home";
  }

  if (view === "world") {
    for (const image of document.querySelectorAll(".deed-card img[data-src]")) {
      image.src = image.dataset.src;
      image.removeAttribute("data-src");
    }
  }

  for (const link of viewLinks) {
    const isCurrent = link.dataset.pondViewLink === view;
    link.classList.toggle("is-current", isCurrent);
    if (isCurrent) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
    const status = link.querySelector("small");
    if (status) status.textContent = isCurrent ? "Current" : link.dataset.restingLabel;
  }

  if (topbarTitle) {
    topbarTitle.textContent = view === "world" ? "Lore Land World" : "Tobyworld";
  }

  if (topbarContext) {
    topbarContext.innerHTML = view === "world"
      ? "<span>Public observation</span><small>Fixture · network inactive</small>"
      : "<span>Project X</span><small>Project · static fixture</small>";
  }

  if (moveFocus) {
    document.querySelector(`[data-pond-view="${view}"]`)?.focus({ preventScroll: true });
  }
};

for (const link of viewLinks) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const view = link.dataset.pondViewLink;
    const hash = view === "world" ? "#pond-world" : "#pond-home";
    window.history.pushState({ pondView: view }, "", hash);
    setView(view, { moveFocus: true });
  });
}

window.addEventListener("popstate", () => setView(viewFromHash(), { moveFocus: true }));

// Presentation-only land swap: clicking a side land moves its artwork into the
// centered hero and the previous hero artwork into that land's place. No state
// is stored, transmitted, or interpreted as any world or ownership truth.
const centerLand = (land) => {
  if (!heroArt || !land) return;
  const heroSrc = heroArt.getAttribute("src");
  heroArt.setAttribute("src", land.getAttribute("src"));
  land.setAttribute("src", heroSrc);
  heroArt.classList.remove("land-just-centered");
  void heroArt.offsetWidth;
  heroArt.classList.add("land-just-centered");
};

for (const land of loreIslands) {
  land.addEventListener("click", () => centerLand(land));
  land.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    centerLand(land);
  });
}

const setWalletStatus = (message, state) => {
  if (!walletStatus) return;
  walletStatus.textContent = message;
  walletStatus.classList.toggle("is-error", state === "error");
  walletStatus.classList.toggle("is-valid", state === "valid");
};

const validateWallet = ({ announceEmpty = false } = {}) => {
  if (!walletInput) return false;
  const value = walletInput.value.trim();

  if (!value) {
    walletInput.removeAttribute("aria-invalid");
    if (announceEmpty) {
      walletInput.setAttribute("aria-invalid", "true");
      setWalletStatus("Enter a Base wallet address beginning with 0x.", "error");
    } else {
      setWalletStatus("Live ownership retrieval is not activated in this cut.", "idle");
    }
    return false;
  }

  if (!/^0x[a-fA-F0-9]{40}$/.test(value)) {
    walletInput.setAttribute("aria-invalid", "true");
    setWalletStatus("That address is incomplete. Use 0x followed by exactly 40 hexadecimal characters.", "error");
    return false;
  }

  walletInput.setAttribute("aria-invalid", "false");
  setWalletStatus("Valid public address. It was not transmitted or stored; live deed retrieval remains inactive.", "valid");
  return true;
};

walletInput?.addEventListener("blur", () => validateWallet());
walletInput?.addEventListener("input", () => {
  if (walletInput.getAttribute("aria-invalid") === "true") validateWallet();
});
walletForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateWallet({ announceEmpty: true })) walletInput?.focus();
});

setView(viewFromHash());
window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }));
