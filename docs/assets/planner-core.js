export function allocateMinutes(minutes, taskCount) {
  if (!Number.isInteger(minutes) || minutes < 1 || minutes > 1440) {
    throw new RangeError("Choose 1 to 1440 whole minutes.");
  }
  if (!Number.isInteger(taskCount) || taskCount < 1 || taskCount > 50) {
    throw new RangeError("Choose 1 to 50 tasks.");
  }

  const base = Math.floor(minutes / taskCount);
  const remainder = minutes % taskCount;

  // Distribute leftover minutes without losing time to rounding.
  return Array.from(
    { length: taskCount },
    (_, index) => base + (index < remainder ? 1 : 0)
  );
}
