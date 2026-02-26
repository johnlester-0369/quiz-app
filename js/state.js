// Single source of truth for runtime quiz state. Exported as a plain object so mutations
// are shared by reference across all importing modules — no event bus or pub/sub needed
// at this app's scale. If state complexity grows, this is the natural extraction point
// for a more formal store (e.g. a reducer pattern).
export const state = {
  activeGroup:  null,   // reference into quizGroups[] for the currently running quiz
  currentIndex: 0,      // zero-based index into activeGroup.questions
  score:        0,      // count of correct answers in the current session
  answered:     false,  // guards against double-submission before the next question advances
};