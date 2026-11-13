# 14:30: "It works, except when someone uses it differently"

**Scene:** Alex's example looked fine. A teammate enters zero weekly study hours
and gets an impossible answer.

**Friction:** a symptom does not tell you the cause, and a plausible fix can hide it.

**Surface:** Copilot in Codespaces.
**Time:** 15 minutes.

## Coding path: a deliberately isolated bug

The lab files in `exercises/debug/` are intentionally buggy. They are **not loaded
by the live site** and are excluded from `npm test`. This keeps the starter and
deployment healthy while giving you a reproducible failure.

1. Run:

   ```bash
   npm run lab:debug
   ```

2. Read the failure. The first run should fail on zero weekly hours.
3. Inspect `exercises/debug/study-plan.js` and its test file. Explain why dividing
   by zero gives an unusable result.
4. Ask Copilot for a diagnosis and a minimal fix. Require an explicit error for
   non-positive weekly hours, rather than a fake successful estimate.
5. Implement the fix and add a regression case for a negative weekly allowance.
6. Run the lab again, then run `npm test` to check the live planner is unchanged.

## Challenge a plausible bad suggestion

Consider this proposed "fix":

> If weekly hours are zero, return zero weeks so the interface stays clean.

Reject it or defend it using the requirement. Does zero weeks mean no work is
needed, or that the estimate cannot be made? A success-shaped answer is misleading.

## Prompt to adapt

> Here are the reproduction command, failure, expected behaviour, and relevant
> function. Explain the root cause before changing code. Reject fixes that turn
> invalid input into a successful estimate. Propose a minimal change and a
> regression test. Do not weaken the existing assertion.

## Non-coding alternative

Inspect the [budget data](../project/budget.md) and supplied total. Recalculate
every line and the total yourself, then ask Copilot to locate the discrepancy.
Explain whether the error is in the inputs, arithmetic, or interpretation.
Recommend an explicit correction with an audit trail.

## Checkpoint

The coding path can show a failure before the fix and a passing test afterwards.
The alternative path can show the incorrect claim, checked arithmetic, and
corrected recommendation. Both can explain why a tempting shortcut is wrong.

**Reflection:** what evidence made you trust the correction?

Next: [16:45: leaving for work](06-collaborate.md).
