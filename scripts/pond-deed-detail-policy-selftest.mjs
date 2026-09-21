// Stage B2-P4B-P22 selftest — deed detail policy (node:assert/strict, no DOM).
// Exercises the pure module: strict deed-id parsing, fixed rejection messages,
// ownerOf outcome classification, and fail-closed detail-record validation.
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  MIN_DEED_ID,
  MAX_DEED_ID,
  REJECTED_REASONS,
  parseDeedId,
  rejectedReasonMessage,
  classifyOwnerReadOutcome,
  validateDetailRecord,
} from "../ui/pond-deed-detail-policy.js";

const VALID_OWNER = "0xf44fd4b85a4b37841b39eafded8e8cc7056e8aec";
const UPPER_OWNER = "0x" + VALID_OWNER.slice(2).toUpperCase();

test("range constants match the scan cap", () => {
  assert.equal(MIN_DEED_ID, 1);
  assert.equal(MAX_DEED_ID, 6000);
  assert.equal(Object.isFrozen(REJECTED_REASONS), true);
});

test("parseDeedId accepts in-range integers and normalizes padding", () => {
  for (const [input, expected] of [
    ["1", 1],
    ["6000", 6000],
    ["0700", 700],
    [" 715 ", 715],
    ["000000001", 1],
  ]) {
    const parsed = parseDeedId(input);
    assert.deepEqual(parsed, { ok: true, id: expected }, String(input));
  }
});

test("parseDeedId rejects malformed and out-of-range inputs with fixed reasons", () => {
  for (const [input, reason] of [
    ["", "empty"],
    ["   ", "empty"],
    [42, "not_a_string"],
    [null, "not_a_string"],
    [["715"], "not_a_string"],
    ["abc", "not_an_integer"],
    ["12.5", "not_an_integer"],
    ["+7", "not_an_integer"],
    ["-1", "not_an_integer"],
    ["1e3", "not_an_integer"],
    ["0x10", "not_an_integer"],
    ["７１５", "not_an_integer"], // full-width digits are not ASCII 0-9
    ["7 15", "not_an_integer"],
    ["0", "out_of_range"],
    ["6001", "out_of_range"],
    ["-4", "not_an_integer"],
    ["12345678901234567890", "out_of_range"],
    ["9".repeat(400), "out_of_range"],
  ]) {
    const parsed = parseDeedId(input);
    assert.equal(parsed.ok, false, JSON.stringify(input));
    assert.equal(parsed.reason, reason, JSON.stringify(input));
  }
});

test("every rejection reason has a distinct fixed human message", () => {
  const messages = REJECTED_REASONS.map(rejectedReasonMessage);
  for (const message of messages) {
    assert.equal(typeof message, "string");
    assert.ok(message.length > 10, message);
  }
  assert.equal(new Set(messages).size, messages.length, "messages must be distinct");
  assert.match(rejectedReasonMessage("unknown_reason"), /whole number between 1 and 6000/);
});

test("classifyOwnerReadOutcome separates minted, revert-shaped, and failed", () => {
  assert.equal(
    classifyOwnerReadOutcome({
      result: "0x000000000000000000000000f44fd4b85a4b37841b39eafded8e8cc7056e8aec",
    }),
    "minted"
  );
  assert.equal(
    classifyOwnerReadOutcome({
      result: "000000000000000000000000f44fd4b85a4b37841b39eafded8e8cc7056e8aec",
    }),
    "minted"
  );
  assert.equal(classifyOwnerReadOutcome({ errorMessage: "execution reverted" }), "unminted");
  assert.equal(classifyOwnerReadOutcome({ errorMessage: "call reverted" }), "unminted");
  assert.equal(classifyOwnerReadOutcome({ errorMessage: "HTTP 429" }), "failed");
  assert.equal(classifyOwnerReadOutcome({ errorMessage: "Failed to fetch" }), "failed");
  assert.equal(classifyOwnerReadOutcome({ result: "0x" }), "failed");
  assert.equal(classifyOwnerReadOutcome({ result: "" }), "failed");
  assert.equal(classifyOwnerReadOutcome({}), "failed");
  assert.equal(classifyOwnerReadOutcome(null), "failed");
});

const GOOD_METADATA = {
  name: "Lore Land Deed #715",
  description: "A floating green island.",
  image: "ipfs://bafy…/715.png",
  external_url: "https://tobyworld.io/deed/715",
  attributes: [{ trait_type: "Terrain", value: "Grove" }],
};

const GOOD_RECORD = {
  id: 715,
  metadata: GOOD_METADATA,
  owner: VALID_OWNER,
  block: 51550000,
  fetchedAt: "2026-09-21T00:00:00.000Z",
};

test("validateDetailRecord accepts a well-formed record and lowercases the owner", () => {
  const validated = validateDetailRecord({ ...GOOD_RECORD, owner: UPPER_OWNER });
  assert.equal(validated.ok, true);
  assert.equal(validated.record.owner, VALID_OWNER);
  assert.equal(validated.record.id, 715);
  assert.deepEqual(validated.record.metadata.attributes, GOOD_METADATA.attributes);
});

test("validateDetailRecord fails closed on any malformed field", () => {
  assert.deepEqual(validateDetailRecord(undefined), { ok: false });
  assert.deepEqual(validateDetailRecord(null), { ok: false });
  const cases = [
    { label: "id 0", patch: (r) => { r.id = 0; } },
    { label: "id 6001", patch: (r) => { r.id = 6001; } },
    { label: "id not integer", patch: (r) => { r.id = 715.5; } },
    { label: "metadata null", patch: (r) => { r.metadata = null; } },
    { label: "metadata array", patch: (r) => { r.metadata = []; } },
    { label: "name number", patch: (r) => { r.metadata.name = 715; } },
    { label: "description number", patch: (r) => { r.metadata.description = 7; } },
    { label: "image number", patch: (r) => { r.metadata.image = 7; } },
    { label: "external_url number", patch: (r) => { r.metadata.external_url = 7; } },
    { label: "attributes not array", patch: (r) => { r.metadata.attributes = {}; } },
    { label: "owner missing", patch: (r) => { r.owner = undefined; } },
    { label: "owner short", patch: (r) => { r.owner = "0x1234"; } },
    { label: "owner non-hex", patch: (r) => { r.owner = "0x" + "g".repeat(40); } },
    { label: "block 0", patch: (r) => { r.block = 0; } },
    { label: "block negative", patch: (r) => { r.block = -1; } },
    { label: "block float", patch: (r) => { r.block = 1.5; } },
    { label: "block string", patch: (r) => { r.block = "51550000"; } },
    { label: "fetchedAt garbage", patch: (r) => { r.fetchedAt = "not-a-date"; } },
    { label: "fetchedAt number", patch: (r) => { r.fetchedAt = 1234; } },
  ];
  for (const { label, patch } of cases) {
    const candidate = { ...GOOD_RECORD, metadata: { ...GOOD_METADATA } };
    patch(candidate);
    const validated = validateDetailRecord(candidate);
    assert.deepEqual(validated, { ok: false }, label);
  }
});

test("validateDetailRecord allows null optional metadata fields and fetchedAt", () => {
  const validated = validateDetailRecord({
    ...GOOD_RECORD,
    metadata: { ...GOOD_METADATA, name: null, description: null, image: null, external_url: null },
    fetchedAt: null,
  });
  assert.equal(validated.ok, true);
  assert.equal(validated.record.metadata.name, null);
  assert.equal(validated.record.fetchedAt, null);
});