// Deliberate lab defect: non-positive weekly hours are not rejected.
// This module is never imported by the live site.
export function estimateWeeks(totalHours, weeklyHours) {
  if (!Number.isFinite(totalHours) || totalHours <= 0) {
    throw new RangeError("Total hours must be positive.");
  }
  if (!Number.isFinite(weeklyHours)) {
    throw new RangeError("Weekly hours must be positive.");
  }
  return Math.ceil(totalHours / weeklyHours);
}
