let Exercise = require("../models/Exercise");

module.exports = (app) => {
  app.get("/api/exercise", async (req, res) => {
    await Exercise.find()
      .then((exercises) => res.json(exercises))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });

  app.post("/api/exercise/add", async (req, res) => {
    const newExercise = new Exercise({
      group: req.body.group,
      exerciseName: req.body.exerciseName,
      reps: req.body.reps,
      sets: req.body.sets,
      duration: req.body.duration,
    });

    await newExercise
      .save()
      .then(() => res.json("Exercise added"))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });

  app.delete("/api/exercise/:id", async (req, res) => {
    await Exercise.findByIdAndDelete(req.params.id)
      .then(() => res.json("Exercise deleted"))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });
};
