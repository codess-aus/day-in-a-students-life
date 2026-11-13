# 13:00: "I have 40 minutes, but this computer has none of my tools"

**Scene:** Alex's laptop is at home. A library computer is free, but installing a
development environment would use the whole break.

**Friction:** setup and unfamiliar files consume a short window of focus.

**Surface:** Codespaces with Copilot in VS Code.
**Time:** 25 minutes.

## Open the prepared workspace

Follow [setup](../setup.md) if you have not already opened a Codespace.
Create a working branch before editing:

```bash
git switch -c workshop/study-planner
python -m mkdocs serve --dev-addr 0.0.0.0:8000
```

Keep the preview running. Use a second terminal for checks and Git commands.
Participants on the alternative path can name their branch
`workshop/campus-guide` or `workshop/budget`.

## Coding path: make the planner understand completed work

Open [the live study planner](../hub/planner.md). Today it divides minutes
equally between a number of tasks. Real students have a mix of finished and
unfinished tasks.

Read these files before asking for changes:

- `docs/assets/planner-core.js`: the calculation.
- `docs/assets/planner.js`: form handling and output.
- `docs/hub/planner.md`: the form and explanation.
- `tests/planner.test.js`: the existing checks.

Implement C1 from the [task cards](../project/tasks.md):

1. Add a task-list calculation accepting task titles and completion status.
   Reuse the existing calculation rather than duplicating its validation.
2. Allocate time only to unfinished tasks. Preserve their order and titles.
3. Update the form so a user can enter tasks and mark them complete.
4. Give a clear message when no unfinished tasks remain. Do not divide by zero.
5. Add focused tests for mixed completion and all-completed input.

Do not remove the existing input guards. Use labelled controls, keyboard access,
and text output, not colour alone.

## Prompt to adapt

> Read the planner files and my issue. Explain the current flow before editing.
> Propose the smallest change for C1, reusing the calculation and preserving
> validation. Do not add dependencies. After I approve, implement it and run
> focused tests. Explain any assumptions about task input and empty lists.

## Non-coding alternative

Choose one:

- **N1:** improve `docs/hub/resources.md` using the supplied readings. Write for
  a student with five minutes to spare, preserve the fictional-data notice, and
  distinguish facts from advice.
- **N2:** analyse the [budget](../project/budget.md), identify the inconsistency,
  and add a checked recommendation to a new `docs/hub/budget.md` page. Add it to
  `mkdocs.yml` navigation so another student can find it.

Use the same plan, review, and preview loop. No terminal work is required if a
partner runs the preview and checks, but you must inspect the result.

## Verify the increment

```bash
npm test
python -m mkdocs build --strict
python scripts/check_links.py
```

Try a normal case, an empty/all-completed case, and keyboard-only interaction.
Ask a partner to use the page without your explanation.

## Checkpoint

Save a working increment on your branch. Explain one generated change and one
thing you changed or declined. Do not accept a rewrite you cannot explain.

**Reflection:** how much of your short work window went into setup versus the task?

Next: [14:30: the unexpected input](05-debug.md).
