import React, { useEffect } from "react";
import axios from "axios";
import { BsTrash } from "react-icons/bs";

const Exercises = ({ exerciseData, setExerciseData }) => {
  useEffect(() => {
    axios
      .get("/api/exercise")
      .then((response) => setExerciseData(response.data));
  }, [setExerciseData]);

  const handleDelete = (id) => {
    axios.delete("/api/exercise/" + id).then((response) => {
      console.log(response.data);
    });

    setExerciseData(exerciseData.filter((el) => el._id !== id));
  };

  return (
    <div>
      <ul className="exercise-list">
        {exerciseData.map((data) => (
          <li key={data._id} className="exercise-list-item">
            <div className="top-row">
              <p className="group">{data.group.toUpperCase()}</p>
              <p className="item-exercise-name">{data.exerciseName}</p>
              <p className="item-date">{data.createdAt.slice(0, 10)}</p>
            </div>
            <div className="bottom-row">
              {data.sets !== null ? (
                <p className="item-sets">Sets: {data.sets}</p>
              ) : (
                <p className="item-sets"></p>
              )}
              {data.reps !== null ? (
                <p className="item-sets">Reps: {data.reps}</p>
              ) : (
                <p className="item-sets"></p>
              )}
              {data.duration !== null ? (
                <p className="item-sets">Cardio Duration: {data.duration}min</p>
              ) : (
                <p className="item-sets"></p>
              )}
            </div>
            <div className="trash">
              <BsTrash
                onClick={() => {
                  handleDelete(data._id);
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercises;
