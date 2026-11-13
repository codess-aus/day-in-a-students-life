# Facilitator runbook

## What this workshop is about

Follow a student's day, not a feature checklist. Start each scene with the
frustration, let participants make an attempt, then introduce the assistance.
Keep coding as the main demonstration. Alternatives contribute to the same hub.

The desired outcome is one checked contribution, a reviewable handoff, and an
explanation of what the student learned. A deployed site is useful evidence,
but a generation-speed contest is not.

## Before participants arrive

- Read all seven scenes and rehearse the coding route on a fresh repository copy.
- Confirm Copilot app availability, sign-in, policies, and usage. Check the
  current [official access references](setup.md#access-and-cost-checkpoints).
- Confirm Codespaces access or prepare local and paired routes. Pre-create one
  working workspace in case provisioning is slow.
- Enable Pages with **GitHub Actions** in the facilitator's repository. Deploy
  once so you have a known working published example.
- Open the brief, meeting notes, planner preview, app, and repository in advance.
- Run `npm test`, `python -m mkdocs build --strict`, and
  `python scripts/check_links.py`. The baseline must pass.
- Run `npm run lab:debug` and confirm only the zero-hours assertion fails.
  Keep the original lab defect for participants.
- Prepare an example issue and pull request in your demonstration copy if you
  want a phone demonstration before participants have created their own.
- Verify cloud-session handoff entitlement before promising it. Otherwise
  demonstrate issue and pull-request review on Mobile.
- Give participants the [setup page](setup.md) ahead of time. Student benefit
  approval is not an activity to complete during the workshop.

Do not install extensions or access accounts on a shared library computer without
permission. The story is fictional; participants should use an authorised device.

## Timing

| Segment | Full route | Compact route |
| --- | --- | --- |
| Welcome, scenario, and setup check | 10 min | 5 min |
| 08:15: recover context | 10 min | 8 min |
| 09:30: learn with hints | 10 min | 8 min |
| 11:00: make a shared plan | 15 min | 10 min |
| 13:00: build a contribution | 25 min | 25 min |
| 14:30: debug and verify | 15 min | 10 min |
| 16:45: review and handoff | 10 min | 8 min |
| 19:30: publish and close | 10 min | 6 min |
| Debrief | 5 min | 5 min |
| **Total** | **120 min** | **90 min** |

For the compact route, pair on debugging, give participants the C1 criteria
without expanding the scope, and use the facilitator's Pages deployment.
Do not compress away the review and verification steps.

## Opening script

> It is 8:15. You are on the bus. You have unread messages, a confusing exercise,
> a group project, and work later. Today is not about getting AI to do your
> degree. It is about reducing the friction between knowing what matters and
> doing something useful, while keeping responsibility for the result.

Show the working starter before introducing tools. Explain repositories as shared
project workspaces, issues as agreed tasks, and pull requests as proposed changes
for review. Do not spend the opening on Git internals.

## Scene cues and expected observations

| Scene | Ask before opening Copilot | Watch for |
| --- | --- | --- |
| Morning | "What do you think matters first?" | Deadline conflict noticed; optional work not promoted to requirements |
| Learning | "What output do you predict?" | Participants attempt the task before receiving a solution |
| Planning | "What can wait until tomorrow?" | Login/database scope rejected; Sam's review availability respected |
| Building | "What is the smallest useful change?" | Changes stay focused; alternative paths get equal review attention |
| Debugging | "What exactly failed?" | Root cause identified; invalid input not disguised as success |
| Handoff | "Could someone continue without calling you?" | Actual checks, limitations, and next steps documented |
| Publishing | "What proves it is live and usable?" | Published page opened; green workflow not treated as sufficient |

## Answer notes

Keep these for facilitation rather than reading them before participants attempt
the exercises.

### Morning and planning

The authoritative deadline is Friday at 8 pm. Accounts and a database are out of
scope. Accessibility ownership is unresolved in the notes; participants must
assign it rather than claim the meeting already settled it.

### Learning

The snippet retains completed tasks. The unfinished predicate is
`!task.completed`. For the transfer example, combine that with
`task.priority === "high"`. Ask why, then use a different input.

### Coding feature

A suitable approach filters unfinished tasks, calls `allocateMinutes` for a
non-empty list, and pairs returned minutes with titles. The empty-list state must
be handled before calling the existing function, which deliberately rejects zero
tasks. Do not require a particular function name or UI design.

The existing baseline tests should remain. Expect new tests to demonstrate
mixed completion, all-completed input, and retention of order and totals.
Do not implement C2 until the core contribution is usable.

### Debugging

`estimateWeeks(10, 0)` returns `Infinity`. The minimal fix rejects weekly hours
that are non-finite **or non-positive**, throwing the existing explicit
`RangeError`. Ask students to add the negative-hours case. Zero weeks is not a
valid answer when ten hours of work remain.

The live calculator does not import the lab. Keep `npm test` and the explicitly
invoked lab separate so teaching material cannot break Pages publication.

### Budget alternative

The line totals are $30, $45, $10, and $20: **$105**, not $95.
The original plan exceeds the $100 limit by $5. One defensible recommendation is
to reduce posters from twelve to ten, saving $5 for a revised $100 total.
Other feasible, clearly justified adjustments are acceptable.

### Content alternative

The supplied readings are teaching material, not academic evidence. A strong
contribution cites S1-S3, keeps the fictional notice, and says what would need
verification before real campus publication.

## When something goes wrong

| Problem | Keep the learning goal by |
| --- | --- |
| Copilot unavailable or quota exhausted | Pairing, using written prompts as review questions, and explaining the limitation |
| Mobile not available | Using GitHub.com for the same issue or review |
| Codespace provisioning slow | Pairing in a prepared workspace or using local setup |
| App and Codespace disagree | Checking branch and pushed commits; not assuming shared uncommitted state |
| Pages permissions missing | Demonstrating the facilitator deployment and recording the participant limitation |
| Copilot proposes a large rewrite | Returning to the issue and asking for the smallest reviewable increment |
| Generated references look credible | Opening sources; rejecting anything the supplied material does not support |
| Checks fail after an edit | Reading the failure and narrowing the change, not deleting checks |

Do not ask students to purchase access or expose private data to rescue a demo.

## Debrief and evidence

At the start and end, ask participants to rate how difficult it feels to choose
the next action on a 1-5 scale. Treat this as a reflection, not a productivity
claim or a graded comparison.

Ask each pair to show one artifact and answer:

1. What friction did you experience?
2. What did Copilot help with?
3. What did you reject, correct, or independently verify?
4. What can you now explain without Copilot?

Finish by stopping Codespaces and confirming any unresolved publishing or review
work. Do not imply unfinished work was completed.
