let Exercise = require("../models/Exercise");

module.exports = (app) => {
  app.get("/api/exercise", (req, res) => {
    Exercise.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });

  app.post("/api/exercise/add", (req, res) => {
    const group = req.body.group;
    const exerciseName = req.body.exerciseName;
    const reps = req.body.reps;
    const sets = req.body.sets;
    const duration = req.body.duration;

    const newExercise = new Exercise({
      group,
      exerciseName,
      reps,
      sets,
      duration,
    });

    newExercise
      .save()
      .then(() => res.json("Exercise added"))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });

  app.delete("/api/exercise/:id", (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
      .then(() => res.json("Exercise deleted"))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });
};
