// React does the render work in 2 phases
// the render phase and the commit phase

// Render phase
// 1. Find all elements flagged for update
// 2. For each flagged phase. it converts JSX to react elements and stores the result.
// 3. It performs reconciliation - Diff old new tree of React elements (AKA Virtual DOM).
// 4. It hands over the changes to the next phase

// Commit Phase
// 1. The changes are applied to the DOM
