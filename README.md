# Less friction, more flow

A story-led workshop following Alex through a busy student day, using GitHub and
GitHub Copilot to recover context, learn, plan, build, debug, collaborate, and publish.
Coding is the primary path. Every scene includes a meaningful non-coding alternative.

## Start here

- [Workshop overview](docs/index.md)
- [Participant setup](docs/setup.md)
- [Alex's day](docs/workshop/index.md)
- [Facilitator runbook](docs/facilitator.md)

The shared project is a **student survival hub**, built with MkDocs, Markdown, CSS,
and browser-side JavaScript, and published to GitHub Pages. No backend, API keys,
or paid dependencies are needed. Copilot features and Codespaces have separate
access requirements and usage limits.

## Run in Codespaces

Create your own repository using **Use this template** if available, or fork this
repository. In your copy, choose **Code > Codespaces > Create codespace on main**.
The development container installs the dependencies.

```bash
python -m mkdocs serve --dev-addr 0.0.0.0:8000
```

Open the forwarded port 8000. Keep the port private. Stop the Codespace after use.

## Run locally

Use Python 3.12 or newer and the current Node.js LTS release.

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python -m mkdocs serve
```

On Windows PowerShell, activate with `.venv\Scripts\Activate.ps1` instead.
Node is used only for the JavaScript checks; there are no npm dependencies.

## Check your work

```bash
npm test
python -m mkdocs build --strict
python scripts/check_links.py
```

The separate debugging lab intentionally starts with a failing test:

```bash
npm run lab:debug
```

That exercise is not part of the baseline checks. See
[the debugging scene](docs/workshop/05-debug.md) before running it.

## Publish your copy

In **Settings > Pages > Build and deployment**, select **GitHub Actions**.
The included workflow checks pull requests and publishes successful pushes to
`main`. A maintainer can also run it manually from the Actions tab. Forks may
require enabling Actions first. Your published address is shown in the deployment
job and Pages settings.

For this source repository, the expected project-site address is
`https://codess-aus.github.io/day-in-a-students-life/` once Pages is enabled and a
deployment succeeds. Adding this configuration alone does not publish the site.

## Repository map

| Location | Purpose |
| --- | --- |
| `docs/workshop/` | Seven scenes, prompts, activities, and checkpoints |
| `docs/project/` | Fictional brief, readings, meeting notes, budget, and task cards |
| `docs/hub/` | The student-facing site participants improve |
| `docs/assets/` | Planner JavaScript and site styles |
| `tests/` | Passing baseline planner tests |
| `exercises/debug/` | Deliberately buggy function and regression-test lab |
| `.devcontainer/` | Codespaces setup |
| `.github/` | CI, Pages deployment, collaboration templates, and Copilot guidance |

Use fictional data only. Review generated work, verify sources and calculations,
and follow your institution's assessment and AI-disclosure rules.