import React from "react";
import axios from "axios";

const FilterBar = ({ setExerciseData }) => {
  const handleClick = (e) => {
    if (e.target.value === "all") {
      axios
        .get("/api/exercise")
        .then((response) => setExerciseData(response.data));
    } else {
      axios.get("/api/exercise").then((response) => {
        setExerciseData(
          response.data.filter((data) => data.group === e.target.value)
        );
      });
    }
  };

  return (
    <>
      <ul className="filter-bar">
        <button value="all" onClick={handleClick}>
          All
        </button>
        <button value="chest" onClick={handleClick}>
          Chest
        </button>
        <button value="back" onClick={handleClick}>
          Back
        </button>
        <button value="legs" onClick={handleClick}>
          Legs
        </button>
        <button value="shoulders" onClick={handleClick}>
          Shoulders
        </button>
        <button value="biceps" onClick={handleClick}>
          Biceps
        </button>
        <button value="triceps" onClick={handleClick}>
          Triceps
        </button>
        <button value="cardio" onClick={handleClick}>
          Cardio
        </button>
      </ul>
    </>
  );
};

export default FilterBar;
