import test from "node:test";
import assert from "node:assert/strict";
import { allocateMinutes } from "../docs/assets/planner-core.js";

test("distributes whole minutes without losing the remainder", () => {
  assert.deepEqual(allocateMinutes(40, 3), [14, 13, 13]);
  assert.deepEqual(allocateMinutes(30, 3), [10, 10, 10]);
});

test("labels zero allocations honestly when time is shorter than the task list", () => {
  assert.deepEqual(allocateMinutes(2, 3), [1, 1, 0]);
});

test("preserves total minutes and allocations differ by at most one", () => {
  for (const minutes of [1, 2, 40, 1439, 1440]) {
    for (const count of [1, 3, 25, 50]) {
      const plan = allocateMinutes(minutes, count);
      assert.equal(plan.length, count);
      assert.equal(plan.reduce((total, value) => total + value, 0), minutes);
      assert.ok(Math.max(...plan) - Math.min(...plan) <= 1);
    }
  }
});

test("rejects invalid time instead of inventing a usable plan", () => {
  for (const minutes of [0, -1, 1.5, 1441, NaN, Infinity, "40", null]) {
    assert.throws(() => allocateMinutes(minutes, 3), {
      name: "RangeError",
      message: "Choose 1 to 1440 whole minutes."
    });
  }
});

test("rejects invalid task counts including an empty plan", () => {
  for (const count of [0, -1, 1.5, 51, NaN, Infinity, "3", null]) {
    assert.throws(() => allocateMinutes(40, count), {
      name: "RangeError",
      message: "Choose 1 to 50 tasks."
    });
  }
});
