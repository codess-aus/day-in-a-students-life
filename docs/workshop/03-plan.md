# 11:00: "We had a meeting, but did we make a plan?"

**Scene:** the group meets between classes. Someone wants login accounts.
Someone else is working from an old deadline. Sam, the reviewer, cannot help
until 7 pm.

**Friction:** discussion creates more possibilities, but not clear ownership.

**Surface:** GitHub Copilot app, **Plan** mode.
**Time:** 15 minutes.

## Try it

1. Open your copy of the repository in the app. Supply the brief, meeting notes,
   and the issue you wrote in the morning.
2. Request a plan, explicitly without implementation.
3. Inspect the proposed scope, dependencies, and assumptions.
4. Cut one unnecessary item. Arrange the work so Sam can review later.
5. Add the agreed checklist to your issue. Use issue links for dependencies.

### Coding path

Plan task C1: allocate study time only across unfinished tasks. Identify the
pure calculation function, browser form, result output, and tests. Do not add a
backend or framework. Keep C2, priority weighting, as a stretch goal.

### Non-coding alternative

Plan N1 or N2. Separate drafting from evidence checking. Make the review
possible for someone who did not attend this meeting.

## Prompt to adapt

> Plan my issue against docs/project/brief.md and the meeting notes.
> Do not edit files. Identify the smallest useful result, files involved,
> dependencies, checks, and decisions we must make. Sam is unavailable until
> 19:00. We use MkDocs and GitHub Pages, with browser-side JavaScript only.
> Identify scope we should decline today.

## App demonstration

The facilitator approves a small, bounded task such as drafting a clarification
to the brief. Watch the app propose changes, then inspect the diff before
accepting. Planning and execution are separate decisions.

For participant coding, keep implementation in Codespaces. If you choose to
implement in the app instead, push the branch before opening it elsewhere;
uncommitted files do not automatically appear in your Codespace.

## Checkpoint

Your plan has a reviewable first increment, a clear owner, and checks tied to
requirements. It rejects accounts, a database, and unrelated enhancements.

**Reflection:** which decision did you make that Copilot could not make for the group?

Next: [13:00: the library computer](04-build.md).
