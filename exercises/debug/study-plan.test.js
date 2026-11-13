import test from "node:test";
import assert from "node:assert/strict";
import { estimateWeeks } from "./study-plan.js";

test("rounds up to enough weeks for the work", () => {
  assert.equal(estimateWeeks(10, 3), 4);
});

// This must fail before the lab fix; do not weaken the assertion.
test("rejects zero weekly hours rather than returning an impossible estimate", () => {
  assert.throws(() => estimateWeeks(10, 0), {
    name: "RangeError",
    message: "Weekly hours must be positive."
  });
});
