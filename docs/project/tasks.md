# Choose a contribution

Choose **C1** for the main coding path, **N1** or **N2** for an alternative.
The [brief](brief.md) governs all tasks.

## C1: plan unfinished work

**User need:** I want my time allocated only to tasks I still need to do.

**Files:** `docs/assets/planner-core.js`, `docs/assets/planner.js`,
`docs/hub/planner.md`, and `tests/planner.test.js`.

**Acceptance criteria**

- Students can enter named tasks and mark each complete.
- A pure calculation accepts task data and returns allocations with titles.
- Completed tasks receive no time and are absent from the returned plan.
- Remaining tasks retain input order.
- Whole-minute allocations sum to the requested minutes and differ by at most
  one minute. Zero-minute allocations are labelled honestly when time is short.
- Empty or all-completed input produces an explicit "no unfinished tasks" state.
- Invalid time still produces a clear error.
- Tests cover mixed completion and all-completed input.
- The form works with a keyboard and has labels and announced results.

Reuse `allocateMinutes` for non-empty unfinished lists. Decide and document the
empty-list return shape instead of sending zero tasks to that function.

## C2: stretch, only after C1 works

Add a high-priority flag and a documented weighting rule. Test conservation of
minutes and rounding. Explain why this rule is useful and what it cannot infer
about the best way to learn. Avoid silently changing C1's equal-allocation behaviour.

## N1: a guide for the five-minute gap

**User need:** I need a short guide that helps me choose a useful next action.

**Files:** `docs/hub/resources.md`, [supplied readings](readings.md).

**Acceptance criteria**

- Include a short study-block example and the three supplied campus resources.
- Link each factual claim to the relevant supplied note.
- Separate source-supported details, advice, and information still to verify.
- Keep the fictional-data warning visible.
- Use clear headings and meaningful link text.
- A partner can locate a useful action in under a minute.

## N2: a budget we can defend

**User need:** I need to know whether the launch plan fits the spending limit.

**Files:** `docs/project/budget.csv`, `docs/hub/budget.md` (new), `mkdocs.yml`.

**Acceptance criteria**

- Preserve the source data.
- Show correct line totals, overall total, and comparison with the $100 limit.
- Identify the discrepancy with the meeting claim.
- Propose a feasible adjustment with a checked revised total.
- Distinguish correction, assumption, and recommendation.
- Link the new page from navigation and label the information fictional.

## Shared definition of done

The contribution is previewed, checked, explained in a pull request, and reviewed.
Record what Copilot helped with and what a person verified. Do not claim a
deployment succeeded until someone opens the deployed result.
