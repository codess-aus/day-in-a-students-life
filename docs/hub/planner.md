# Plan a study block

Choose your available whole minutes and the number of tasks you want to tackle.
The starter divides time equally; any remainder is assigned one minute at a time
to the earliest tasks. When you have fewer minutes than tasks, some tasks receive
zero minutes.

This is a planning aid, not a promise about what you will learn.

<form id="study-planner" class="planner">
  <div>
    <label for="available-minutes">Available minutes</label>
    <input id="available-minutes" name="minutes" type="number" min="1" max="1440" step="1" value="40" required aria-describedby="minutes-help">
    <p id="minutes-help">Choose 1 to 1440 whole minutes.</p>
  </div>
  <div>
    <label for="task-count">Number of tasks</label>
    <input id="task-count" name="taskCount" type="number" min="1" max="50" step="1" value="3" required aria-describedby="tasks-help">
    <p id="tasks-help">Choose 1 to 50 tasks.</p>
  </div>
  <button type="submit">Make my plan</button>
  <p id="planner-error" role="alert"></p>
  <div id="planner-result" role="status" aria-live="polite" aria-atomic="true"></div>
</form>

<noscript>The calculator requires JavaScript. You can still divide minutes by
the number of tasks yourself and assign remaining minutes to the first tasks.</noscript>

## Your coding contribution

The starter does not yet know task names or completion status. Build that feature
in [the afternoon activity](../workshop/04-build.md), keeping input validation and
accessible feedback.

## Try it before editing

- 40 minutes across 3 tasks should produce 14, 13, and 13 minutes.
- 2 minutes across 3 tasks should produce 1, 1, and 0 minutes.
- Zero, negative, fractional, and blank inputs should not produce a study plan.
