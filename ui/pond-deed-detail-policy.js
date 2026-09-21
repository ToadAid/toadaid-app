// Pure decision logic for the World view's deed detail modal and direct id
// lookup (Stage B2-P4B-P22). DOM-free ESM so
// scripts/pond-deed-detail-policy-selftest.mjs can exercise it in node. Every
// answer here is fail-closed: an input that is not provably well-formed is
// rejected with a fixed human message, and the modal only ever populates from
// a record that passed validateDetailRecord. Presentation is not authority —
// the owner shown here carries the same epistemic status as the P20 lookup.

export const MIN_DEED_ID = 1;
export const MAX_DEED_ID = 6000;

export const REJECTED_REASONS = Object.freeze([
  "empty",
  "not_a_string",
  "not_an_integer",
  "out_of_range",
]);

// Strict integer parse: only ASCII digits, no sign, no decimal point, no
// exponent, no leading/inner whitespace beyond the trim already applied.
const DIGITS_ONLY = /^[0-9]+$/;

export const parseDeedId = (input) => {
  if (typeof input !== "string") return { ok: false, reason: "not_a_string" };
  const trimmed = input.trim();
  if (trimmed === "") return { ok: false, reason: "empty" };
  if (!DIGITS_ONLY.test(trimmed)) return { ok: false, reason: "not_an_integer" };
  // Number() would silently accept "1e3" — digits-only already excludes it,
  // but a 20-digit monster must also fail the range check, not round.
  const id = Number(trimmed);
  if (!Number.isSafeInteger(id) || id < MIN_DEED_ID || id > MAX_DEED_ID) {
    return { ok: false, reason: "out_of_range" };
  }
  return { ok: true, id };
};

export const rejectedReasonMessage = (reason) => {
  switch (reason) {
    case "empty":
      return "Enter a deed id between 1 and 6000 to observe it directly.";
    case "not_a_string":
      return "The deed id must be a number between 1 and 6000.";
    case "not_an_integer":
      return "The deed id must be a whole number between 1 and 6000 — no letters, signs, or decimals.";
    case "out_of_range":
      return "Deed ids run from 1 to 6000. That number is outside the Canonical Lore Land Deeds range.";
    default:
      return "The deed id could not be read; enter a whole number between 1 and 6000.";
  }
};

// Classify a single ownerOf eth_call outcome. "unminted" is deliberately
// conservative wording upstream: a revert-shaped answer is reported as
// "ownerOf reverted", never as definitive absence beyond doubt.
export const classifyOwnerReadOutcome = (input) => {
  const { result, errorMessage } = input && typeof input === "object" ? input : {};
  if (
    typeof result === "string" &&
    result.length >= 64 &&
    /^[0-9a-fA-F]*$/.test(strip0xPrefix(result))
  ) {
    return "minted";
  }
  const message = typeof errorMessage === "string" ? errorMessage.toLowerCase() : "";
  if (message.includes("revert")) return "unminted";
  return "failed";
};

const strip0xPrefix = (value) => (value.startsWith("0x") ? value.slice(2) : value);

// The only record shape the detail modal populates from. Anything that does
// not validate exactly fails closed — the modal is never opened on a
// half-trusted record.
export const validateDetailRecord = (candidate) => {
  const { id, metadata, owner, block, fetchedAt } =
    candidate && typeof candidate === "object" && !Array.isArray(candidate) ? candidate : {};
  if (!Number.isSafeInteger(id) || id < MIN_DEED_ID || id > MAX_DEED_ID) return { ok: false };
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) return { ok: false };
  if (metadata.name !== null && typeof metadata.name !== "string") return { ok: false };
  if (metadata.description !== null && typeof metadata.description !== "string") return { ok: false };
  if (metadata.image !== null && typeof metadata.image !== "string") return { ok: false };
  if (metadata.external_url !== null && typeof metadata.external_url !== "string") return { ok: false };
  if (!Array.isArray(metadata.attributes)) return { ok: false };
  if (typeof owner !== "string" || !/^0x[a-fA-F0-9]{40}$/.test(owner)) return { ok: false };
  if (!Number.isInteger(block) || block <= 0) return { ok: false };
  if (fetchedAt !== null && (typeof fetchedAt !== "string" || Number.isNaN(Date.parse(fetchedAt)))) {
    return { ok: false };
  }
  return {
    ok: true,
    record: {
      id,
      metadata: {
        name: metadata.name,
        description: metadata.description,
        image: metadata.image,
        external_url: metadata.external_url,
        attributes: metadata.attributes,
      },
      owner: owner.toLowerCase(),
      block,
      fetchedAt,
    },
  };
};