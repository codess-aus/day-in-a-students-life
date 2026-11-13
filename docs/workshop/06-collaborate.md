# 16:45: "My shift starts soon, and my teammate needs an answer"

**Scene:** Alex needs to leave. A teammate asks whether the contribution is
ready. "Basically done" is not enough to continue without another meeting.

**Friction:** handing over understanding, not just files.

**Surfaces:** GitHub.com, then GitHub Mobile.
**Time:** 10 minutes.

## Prepare a reviewable handoff

1. Inspect your diff in VS Code or with `git diff`. Check for unintended files,
   private information, and generated output.
2. Run the checks from the build scene.
3. Commit only your intended files, using the Source Control interface or Git.
   Push your branch to your own repository. Do not push directly to `main`.
4. Open a pull request. Use the included template to explain the requirement,
   changes, checks, assistance, and remaining limitations. Link your issue.
5. Ask a partner to review it. If working alone, explain the diff out loud and
   record one question before approving your own work for the workshop.

## Coding path

Review the changed calculation, empty-state handling, form labels, and tests.
Ask your partner to find an input you did not try.

## Non-coding alternative

Review evidence, fictional-data labelling, readability, navigation, and whether
the recommendation actually follows from the supplied information.

## Prompt to adapt

> Review this diff against the issue and brief. Identify correctness,
> accessibility, and missing-test risks. Cite the relevant files. Do not change
> anything yet. Then draft a concise handoff separating completed work,
> verified behaviour, limitations, and the next action. Do not claim checks ran
> unless I provide their results.

## Continue from a phone

Open the pull request in GitHub Mobile. Read the description and leave one
specific review comment or reply. Use the browser if you do not have the app.

**Optional facilitator demo:** start an eligible cloud Copilot session in the
app or web, then continue that same supported session on Mobile. Confirm access
before the workshop. A Codespace, a local app session, and a cloud session are
not interchangeable environments.

## Checkpoint

A teammate can identify what changed, why it changed, how it was checked, and
what they should do next without contacting the author.

**Reflection:** what would your teammate have had to guess without this handoff?

Next: [19:30: publish and switch off](07-publish.md).
