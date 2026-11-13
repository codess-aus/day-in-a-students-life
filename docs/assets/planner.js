import { allocateMinutes } from "./planner-core.js";

const form = document.querySelector("#study-planner");

// MkDocs loads this module on every page, but only the planner has a form.
if (form) {
  const minutesInput = form.querySelector("#available-minutes");
  const tasksInput = form.querySelector("#task-count");
  const error = form.querySelector("#planner-error");
  const result = form.querySelector("#planner-result");

  form.addEventListener("input", () => {
    error.textContent = "";
    result.replaceChildren();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    error.textContent = "";
    result.replaceChildren();

    let allocations;
    try {
      allocations = allocateMinutes(
        minutesInput.valueAsNumber,
        tasksInput.valueAsNumber
      );
    } catch (validationError) {
      if (!(validationError instanceof RangeError)) {
        throw validationError;
      }
      error.textContent = validationError.message;
      return;
    }

    const heading = document.createElement("p");
    heading.textContent = `Your ${minutesInput.valueAsNumber}-minute study plan:`;
    const list = document.createElement("ol");

    allocations.forEach((minutes, index) => {
      const item = document.createElement("li");
      item.textContent = `Task ${index + 1}: ${minutes} minute${minutes === 1 ? "" : "s"}`;
      list.append(item);
    });

    result.append(heading, list);
  });
}
