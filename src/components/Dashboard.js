import React, { useState } from "react";
import AddExerciseForm from "./AddExerciseForm";
import Exercises from "./Exercises";
import FilterBar from "./FilterBar";

const Dashboard = () => {
  const [group, setGroup] = useState("");
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [duration, setDuration] = useState("");
  const [exerciseData, setExerciseData] = useState([]);

  return (
    <div>
      <FilterBar
        exerciseData={exerciseData}
        setExerciseData={setExerciseData}
      />
      <div className="dashboard-wrapper">
        <AddExerciseForm
          group={group}
          setGroup={setGroup}
          exerciseName={exerciseName}
          setExerciseName={setExerciseName}
          setExerciseData={setExerciseData}
          sets={sets}
          setSets={setSets}
          reps={reps}
          setReps={setReps}
          duration={duration}
          setDuration={setDuration}
        />
        <Exercises
          exerciseData={exerciseData}
          setExerciseData={setExerciseData}
        />
      </div>
    </div>
  );
};

export default Dashboard;
