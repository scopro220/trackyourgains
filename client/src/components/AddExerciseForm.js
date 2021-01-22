import React from "react";
import axios from "axios";

const AddExerciseForm = ({
  setGroup,
  setDuration,
  setReps,
  setSets,
  setExerciseName,
  sets,
  reps,
  duration,
  group,
  exerciseName,
  setExerciseData,
}) => {
  const groups = [
    "",
    "chest",
    "back",
    "legs",
    "shoulders",
    "biceps",
    "triceps",
    "cardio",
  ];

  const onGroupChange = (e) => {
    setGroup(e.target.value);
  };

  const onExerciseNameChange = (e) => {
    setExerciseName(e.target.value);
  };

  const onSetsChange = (e) => {
    setSets(e.target.value);
  };

  const onRepsChange = (e) => {
    setReps(e.target.value);
  };

  const onDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      group,
      exerciseName,
      sets,
      reps,
      duration,
    };

    axios
      .post("/api/exercise/add", exercise)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    axios
      .get("/api/exercise")
      .then((response) => setExerciseData(response.data));

    setGroup("");
    setExerciseName("");
    setSets("");
    setReps("");
    setDuration("");
  };

  return (
    <div>
      <form className="exercise-form" onSubmit={onSubmit}>
        <select required value={group} onChange={onGroupChange}>
          {groups.map((group) => {
            return (
              <option key={group} value={group}>
                {group.charAt(0).toUpperCase() + group.slice(1)}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          name="exercisename"
          placeholder="Exercise Name"
          autoComplete="off"
          value={exerciseName}
          onChange={onExerciseNameChange}
          required
        />
        <input
          type="number"
          name="sets"
          min="0"
          placeholder="Sets"
          autoComplete="off"
          value={sets}
          onChange={onSetsChange}
        />
        <input
          type="number"
          name="reps"
          min="0"
          placeholder="Reps"
          autoComplete="off"
          value={reps}
          onChange={onRepsChange}
        />
        <input
          type="number"
          name="duration"
          min="0"
          placeholder="Cardio Duration (minutes)"
          autoComplete="off"
          value={duration}
          onChange={onDurationChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddExerciseForm;
