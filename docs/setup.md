# Get ready

## Before the session

1. Sign in to your GitHub account. Do not share passwords or tokens.
2. Check that you can open Copilot and ask a short question. Student verification
   and Copilot benefit activation are separate steps; do not rely on same-day approval.
3. Install and sign in to the **GitHub Copilot desktop app** if available to you.
   This is not the Microsoft Copilot app.
4. Optionally install **GitHub Mobile**. The browser route works without a phone.
5. Make your own copy of this repository, using **Use this template** if offered
   or **Fork**. Only publish fictional workshop material.
6. Confirm your Codespaces allowance or prepare the local setup below.

## Open your workspace

In your copy, choose **Code > Codespaces > Create codespace on main**.
Wait for the development container setup to finish. Open a terminal:

```bash
python -m mkdocs serve --dev-addr 0.0.0.0:8000
```

Open port **8000** in the Ports tab. Leave its visibility **Private**. Visit
**Student survival hub > Study planner** in the preview. It should calculate a
simple study plan before you edit anything.

Run the baseline checks in a second terminal:

```bash
npm test
python -m mkdocs build --strict
python scripts/check_links.py
```

The `lab:debug` command belongs to a later, deliberately failing exercise. Do not
use it to judge whether setup succeeded.

## Local fallback

Use Python 3.12 or newer and the current Node.js LTS release. From the repository:

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python -m mkdocs serve
```

On Windows PowerShell, use `.venv\Scripts\Activate.ps1` for activation.
Open the local address printed by MkDocs. There are no npm packages to install.

## Connect the Copilot app

Open your repository or local checkout in the app. Start in **Plan** mode.
Ask it to explain the brief and file structure without changing anything.
Review its proposed changes before allowing execution.

An app-local session and a Codespace are separate workspaces. To hand changes
between them, commit and push on a branch, then fetch that branch in the other
workspace. Avoid having two environments edit the same branch at the same time.
Do not assume uncommitted changes or chat history transfer automatically.

## Access and cost checkpoints

| Surface | Check before the workshop | Fallback |
| --- | --- | --- |
| Copilot app | Installation, sign-in, permissions, and remaining usage | Pair with a participant or watch the facilitator |
| Copilot on GitHub.com | Repository context and available chat features | Supply relevant file text to an available Copilot client |
| GitHub Mobile | Sign-in and available Copilot features | GitHub.com in a browser |
| Codespaces | Availability, quota, and institutional policy | Local workspace or paired participation |
| Cloud-session handoff | Supported cloud environment and account entitlement | Review an issue or pull request on Mobile instead |
| GitHub Pages | Repository permissions, Pages availability, Actions enabled | Facilitator deployment or local preview |

Capabilities, account policies, and usage allowances can change. The workshop
does not require a paid model, parallel agents, or cloud-session continuity.
Do not purchase a plan just to complete an exercise.

Official references:

- [GitHub Copilot app](https://docs.github.com/en/copilot/concepts/copilot-surfaces/github-copilot-app)
- [Copilot on GitHub.com and Mobile](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github)
- [Student access](https://docs.github.com/copilot/how-tos/manage-your-account/free-access-with-copilot-student)
- [Codespaces billing](https://docs.github.com/en/billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)
- [GitHub Pages publishing](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Safe working agreement

Use the supplied fictional information. Do not upload student records, private
messages, unpublished assessments, or copyrighted course readings without
permission. Follow your institution's AI and assessment rules.

Copilot can be wrong. Check calculations, links, citations, and generated code.
Never treat a confident answer or passing build as proof of correctness.
Record assistance and verification in your contribution.

At the end, stop your Codespace from the Codespaces menu or dashboard. Closing
the browser tab is not the same as stopping the environment.
