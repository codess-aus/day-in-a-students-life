# 19:30: "Can we publish this and stop thinking about it tonight?"

**Scene:** Alex is home after work. Sam has reviewed the contribution. The group
needs a shared result, not another folder of files.

**Friction:** repetitive publishing and uncertainty about whether work is truly done.

**Surfaces:** GitHub Actions, GitHub Pages, and Copilot app or web for reflection.
**Time:** 10 minutes.

## Publish your copy

1. In your repository, open **Settings > Pages**. Select **GitHub Actions** as the
   build and deployment source. You need repository administration permissions.
2. If this is a fork, enable Actions when prompted.
3. Resolve review feedback and merge the pull request only after checks pass.
4. Open **Actions > Check and publish workshop**. Inspect the check job and the
   deployment job. The workflow publishes pushes to `main`; pull requests are
   checked but not deployed.
5. Open the published URL from the deployment environment or Pages settings.
   Verify the planner, navigation, and a nested-page link in the deployed site.

If changes were already on `main` before enabling Pages, use **Run workflow**
on `main` or make another reviewed change to trigger deployment.
If Pages is unavailable, inspect the facilitator's deployment and verify your
local preview. Record that your own copy was not published.

## Coding path

Read `.github/workflows/pages.yml`. Locate tests, the strict MkDocs build,
link checks, artifact upload, and the deployment permission boundary.

**Optional troubleshooting:** in a local working copy of `mkdocs.yml`, add a
navigation entry pointing to `missing.md`. Run `python -m mkdocs build --strict`,
explain the error, and remove only that temporary entry. Rebuild successfully
before committing anything. Do not manufacture a broken deployment on `main`.

## Non-coding alternative

Check the published hub against the [brief](../project/brief.md). Can a student
find the guide and understand which information is fictional? Does the page
make claims that were never verified? Leave actionable feedback.

## Close the day

> Using these completed issues, review notes, and check results, draft a short
> end-of-day handoff: completed work, unresolved questions, and one next action.
> Separate facts from assumptions. Do not claim a deployment succeeded without
> the deployment result.

Check the summary against actual work. Record assistance as your institution
requires, then stop your Codespace.

## Final checkpoint

You have one reviewed contribution and either a verified published result or
an explicitly recorded publishing limitation. Explain:

- One task where Copilot reduced friction.
- One suggestion you corrected or rejected.
- One thing you learned that you can now do without Copilot.

**The win is not more generated output. It is less avoidable friction and more
attention left for learning.**
