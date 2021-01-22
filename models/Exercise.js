const mongoose = require("mongoose");

const { Schema } = mongoose;

const exerciseSchema = new Schema(
  {
    group: {
      type: String,
      required: true,
    },
    exerciseName: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      min: 0,
      // required: true,
      default: 0,
    },
    sets: {
      type: Number,
      min: 0,
      // required: true,
      default: 0,
    },
    duration: {
      type: Number,
      min: 0,
      // required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
