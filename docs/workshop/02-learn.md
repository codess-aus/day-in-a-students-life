# 09:30: "I understood the lecture until I tried the exercise"

**Scene:** Alex understood the lecturer's JavaScript example. Now the exercise
looks different and the first attempt does not behave as expected.

**Friction:** recognising an explanation is not the same as applying it.

**Surface:** Copilot on GitHub.com.
**Time:** 10 minutes.

## Coding path

Predict the output before running this in a browser console or Node:

```javascript
const tasks = [
  { title: "Read chapter", completed: true },
  { title: "Practise arrays", completed: false },
  { title: "Draft reflection", completed: false }
];

// Keep unfinished tasks so study time is not allocated to completed work.
const unfinished = tasks.filter((task) => task.completed);
console.log(unfinished.map((task) => task.title));
```

1. State what you expected and what actually happened.
2. Ask for a hint rather than a replacement solution.
3. Correct the predicate and explain it to your partner.
4. Apply the idea to a new example: select only tasks that are both unfinished
   and marked `priority: "high"`. Use a tiny example you write yourself.

This prepares you for the planner feature later. The exercise snippet is
deliberately wrong; it is not the production planner.

## Non-coding alternative

Read [the supplied study notes](../project/readings.md). Explain the difference
between recognising an answer and retrieving it without looking. Ask Copilot
to question you, then apply the idea to your own fictional study schedule.

## Prompt to adapt

> Here is the exercise and my attempt. I expected [prediction], but observed
> [result]. Give me one hint about my reasoning, not the finished answer.
> Let me try again. Then give me a different example to check my understanding.

For the reading path, supply the reading instead of the code and ask for one
application question at a time. Do not ask for invented academic references.

## Checkpoint

Explain the concept without reading Copilot's response. Your second example
works, or your explanation accurately applies the supplied reading. Record
one thing you still do not understand.

**Reflection:** could you repeat the task with Copilot closed?

Next: [11:00: the group meeting](03-plan.md).
