const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  questionId: {
    type: String,
    required: true,
  },
  solvedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Progress",
  progressSchema
);