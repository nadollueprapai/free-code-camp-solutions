import React, { lazy, Suspense } from 'react';

const currentExerciseCategory = "react-fundamentals";
const currentExerciseName = "tic-tac-toe";

const CurrentExercise = lazy(() =>
  import(
    `/workspaces/free-code-camp-solutions/front-end-development/react-state-hooks-routing/tic-tac-toe/index.jsx`
  )
);

function App() {
  return (
    <>
      <h1>{currentExerciseName}</h1>

      <Suspense fallback={<div>Loading exercise...</div>}>
        <CurrentExercise />
      </Suspense>
    </>
  );
}

export default App;
