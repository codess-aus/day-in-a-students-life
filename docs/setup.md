# Get ready

Follow these steps in order before the workshop. The recommended route uses a
computer with a web browser and internet access. You do not need to install a
code editor or use a phone.

A **repository** is a project's files and change history on GitHub. A **fork**
is your own copy of someone else's repository. A **Codespace** is an online
workspace where you can edit and run your copy.

## 1. Sign in to GitHub

1. Open [github.com](https://github.com/) in your browser.
2. If you have an account, click **Sign in** and complete sign-in. If you do not,
   click **Sign up**, follow the account creation instructions, and verify your
   email address when GitHub asks.
3. Click your profile picture in the top-right corner and note your username.
   You will use it to identify your own copy of the workshop.

**Check:** you can see your account's profile menu. Never share your password,
sign-in codes, or access tokens with another participant.

## 2. Make your own copy of the workshop

1. Open the [workshop repository on GitHub](https://github.com/codess-aus/day-in-a-students-life).
   This is the source project, not the published workshop website.
2. Near the top-right of the repository page, click **Fork**. If the button has
   a small arrow beside it, click the **Fork** label itself.
3. On the **Create a new fork** page, set **Owner** to your own GitHub account,
   not a university or other organisation.
4. Leave **Repository name** as `day-in-a-students-life`.
5. Leave **Copy the main branch only** selected if that option appears.
   A branch is a version of the project; `main` is the starting version for this workshop.
6. Click **Create fork** and wait for GitHub to open your copy.
7. Check the name at the top-left of the repository page. It must start with
   **your username**, followed by `/ day-in-a-students-life`, not `codess-aus`.
8. Bookmark this page. Its address should be
   `https://github.com/YOUR-USERNAME/day-in-a-students-life`, with
   `YOUR-USERNAME` replaced by your actual username.

**Check:** you see your username as the owner and a file list containing `docs`,
`mkdocs.yml`, and `README.md`. A message such as **forked from
codess-aus/day-in-a-students-life** is expected.

This repository uses the **Fork** route. You do not need to find a **Use this
template** button. If GitHub says you already have a fork, open the existing
copy rather than creating another. If it contains earlier work, ask the
facilitator before syncing or replacing anything.

Your fork of this public repository is also public. Only use the supplied
fictional workshop material. Do not add personal information, passwords,
private messages, or real assessment submissions.

## 3. Enable the task tracker in your copy

The first activity uses **Issues**, GitHub's task tracker. Issues may be turned
off in a new fork.

1. In **your copy** of the repository, look for the **Issues** tab above the files.
2. If it is visible, open it. An empty list of issues is normal. Skip the next
   item and look for the **New issue** button.
3. If it is missing, click **Settings** in the repository's tabs. Under
   **General**, scroll to **Features** and select the **Issues** checkbox.
   Return to the top of the page and open the **Issues** tab.
4. Confirm that you can see a **New issue** button. You do not need to create
   an issue yet.

**Check:** your own repository has an **Issues** tab and a **New issue** button.
If you cannot see **Settings**, check that the owner is your username. On a
narrow screen, some repository tabs may be inside the **...** menu.

## 4. Check GitHub Copilot access

1. Open [GitHub Copilot in your browser](https://github.com/copilot).
2. Sign in with the same GitHub account if prompted.
3. If chat is available, type `Explain what a GitHub repository is in one sentence.`
   and send the message.
4. Confirm that you receive a reply. This checks chat access only; it does not
   mean Copilot can see your workshop files.
5. If you see a setup, subscription, usage-limit, or access message instead,
   tell the facilitator before the session. Do not purchase a plan just to
   complete the workshop. You can pair with someone who has access.

Student verification and Copilot benefit activation are separate steps. If you
intend to use student benefits, follow the
[student access instructions](https://docs.github.com/copilot/how-tos/manage-your-account/free-access-with-copilot-student)
in advance; do not rely on same-day approval.

The **GitHub Copilot desktop app** and **GitHub Mobile** are optional clients,
not prerequisites for this browser setup. GitHub Copilot is not the Microsoft
Copilot app.

## 5. Open your online workspace

1. Return to the bookmarked page for **your copy** of the repository.
2. Click the green **Code** button above the file list.
3. In the panel that opens, select the **Codespaces** tab.
4. Click **Create codespace on main**. If a Codespace already exists for this
   workshop, click its name to reopen it instead.
5. Wait for the browser-based editor to open and for its setup to finish.
   The first launch can take several minutes. This project's setup installs
   Python, Node.js, and the website's required packages for you.
6. Look for the file explorer on the left. It should contain `docs`,
   `mkdocs.yml`, and `package.json`.
7. Open the editor's **Terminal** menu, then select **New Terminal**. In the
   browser editor, the menu may be behind the **three horizontal lines** in
   the top-left corner. A terminal is the panel where you type commands.

**Check:** the editor shows the workshop files and a terminal with a prompt
where you can type. Leave that terminal open.

If GitHub says Codespaces is unavailable, blocked by policy, or out of included
usage, do not add payment details to proceed. Use the
[local fallback](#local-fallback-without-codespaces) or ask the facilitator to pair
you with another participant.

## 6. Start the website preview

1. Click inside the terminal from step 5.
2. Copy the following command, paste it into the terminal, and press **Enter**.
   Copy only the command, not the surrounding backticks.

        python -m mkdocs serve --dev-addr 0.0.0.0:8000

3. Wait until the terminal says the site is being served. The command keeps
   running while you use the preview; that is normal. Do not close this terminal.
4. If a notification offers **Open in Browser**, click it. Otherwise, click the
   **Ports** tab beside **Terminal** in the bottom panel, find port **8000**,
   and use its **Open in Browser** globe icon. If **Ports** is hidden, open
   the editor's **View > Command Palette**, type `Ports: Focus on Ports View`,
   and select that command.
5. In the **Ports** tab, confirm that port 8000 has visibility **Private**.
   Do not change it to public. Sign in with your GitHub account if the preview
   asks you to authenticate.
6. In the preview website's navigation, choose **Student survival hub**, then
   **Study planner**. On a narrow screen, open the navigation menu first.
7. Enter `30` in **Available minutes** and `3` in **Number of tasks**, then
   click **Make my plan**.

**Check:** the planner gives each task 10 minutes. You have now run the starter
website without editing any code. This private preview is not a published
GitHub Pages site; publishing happens in the final workshop scene.

If the terminal says `No module named mkdocs`, the package installation may not
have finished. Wait for setup to complete. If it has finished and the error
remains, run `python -m pip install -r requirements.txt` in the terminal, wait
for it to finish successfully, and retry the preview command. For any other
error, keep the message visible and show the facilitator.

## 7. Check the starter project

1. Return to the editor tab. Keep the preview server running in its terminal.
2. Choose **Terminal > New Terminal** again to open a second terminal.
3. Run each of the following commands separately: paste one line, press
   **Enter**, and wait for it to finish before entering the next.

```bash
npm test
python -m mkdocs build --strict
python scripts/check_links.py
```

**Check:** the tests report no failures, the build finishes without errors, and
the link checker says **Generated site paths and fragments are valid**.
If a command fails, stop and show the facilitator the command and its error
message before changing anything.

The `npm run lab:debug` command belongs to a later, deliberately failing exercise.
Do not run it as a setup check. There are no npm packages to install.

## 8. Start the workshop

Keep the editor and preview tabs open. Go to [Meet Alex](workshop/index.md),
then follow the link to the first scene. You are ready when you have your own
repository, an available Copilot client or partner, a working planner preview,
and passing starter checks.

## Local fallback (without Codespaces)

Use this route only if you cannot use Codespaces or prefer working on your own
computer. You still need to complete steps 1 to 4 above.

### Install the tools

1. Install the current stable [Git](https://git-scm.com/downloads) release for
   your operating system, following its installer instructions.
2. Install a current stable [Python 3](https://www.python.org/downloads/)
   release, version 3.12 or newer. On Windows, enable **Add Python to PATH**
   if the installer offers it.
3. Install the current **LTS** release of [Node.js](https://nodejs.org/en/download).
   The Node.js installation also provides the `npm` command.
4. After installation, open a new terminal: **Terminal** on macOS, your Linux
   terminal app, or **PowerShell** from the Windows Start menu.
5. Run `git --version`, `node --version`, and `npm --version` separately.
   Each should print a version number. Check Python with `python3 --version`
   on macOS/Linux or `py -3 --version` on Windows.
   If a command is not found, ask the facilitator to help finish that installation.

### Download your copy

1. Return to **your repository** in the browser. Click **Code**, select
   **Local** if shown, then **HTTPS**, and copy the clone URL using the copy icon.
2. In your terminal, type `git clone `, including the space, paste the URL you
   just copied, and press **Enter**. This downloads your fork, not the original
   workshop repository. Wait for the command to finish.
3. Run `cd day-in-a-students-life` to move into the downloaded project folder.
   If you chose a different repository name, use that folder name instead.
4. Keep this terminal open. Run the commands for **your operating system only**
   from the next section, one line at a time.

### Prepare Python and start the preview

On **macOS or Linux**:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python -m mkdocs serve
```

On **Windows PowerShell**:

```powershell
py -3 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python -m mkdocs serve
```

The `.venv` folder holds this project's Python packages separately from other
projects. Activation makes this terminal use those packages. If activation or
installation fails, ask the facilitator for help; do not bypass your computer's
security policy.

1. Open the address printed by MkDocs, normally `http://127.0.0.1:8000/`,
   in your browser. Keep the terminal running.
2. Try the planner as described in step 6 above.
3. Open a second terminal, move into the same project folder with
   `cd day-in-a-students-life`, and run the activation command for your
   operating system again. You do not need to recreate `.venv` or reinstall
   the packages.
4. Run the three checks from step 7, one command at a time.
5. Once they pass, continue to [Meet Alex](workshop/index.md).

## Optional: connect the GitHub Copilot desktop app

1. Follow the [official GitHub Copilot app instructions](https://docs.github.com/en/copilot/concepts/copilot-surfaces/github-copilot-app)
   to install it if it is available for your account and computer.
2. Sign in with the GitHub account that owns your workshop copy.
3. Use the app's repository or folder picker to open **your fork** or its
   local checkout, not the original `codess-aus` repository.
4. If the app offers **Plan** mode, select it. Send:
   `Explain docs/project/brief.md and the repository's file structure. Do not change any files.`
5. Check that the reply refers to this workshop's files. If it cannot access
   them, attach the files or supply their text. Review proposed changes before
   allowing execution.

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

## When you finish

1. In the terminal running the preview, press **Ctrl+C** to stop the server.
2. If you used Codespaces, open [your Codespaces dashboard](https://github.com/codespaces).
3. Find the Codespace for your workshop repository, open its **...** menu,
   and select **Stop codespace**. Confirm that it is no longer running.
4. Do not delete the Codespace if it contains work you have not saved back to
   GitHub. Stopping it preserves the workspace; storage allowance may still apply.

Closing the browser tab is not the same as stopping the Codespace.
