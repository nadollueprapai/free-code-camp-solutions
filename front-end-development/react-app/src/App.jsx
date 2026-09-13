import React, { lazy, Suspense } from 'react';

const currentExerciseCategory = "react-fundamentals";
const currentExerciseName = "digital-pet-game";

const CurrentExercise = lazy(() =>
  import(
    `/workspaces/free-code-camp-solutions/front-end-development/digital-pet-game/index.tsx`
  )
);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading exercise...</div>}>
        <CurrentExercise />
      </Suspense>
    </>
  );
}

export default App;
