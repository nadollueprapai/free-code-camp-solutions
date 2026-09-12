import React, { lazy, Suspense } from 'react';
const currentExerciseCategory = "react-fundamentals";
const currentExcerciseName = "mood-board";

const CurrentExercise = lazy(() => 
  import(`/workspaces/free-code-camp-solutions/front-end-development/${currentExerciseCategory}/${currentExcerciseName}/index.jsx`)
);
function App() {
  return <CurrentExercise/>
}

export default App
