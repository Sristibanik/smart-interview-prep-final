const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },

  question: {
    type: String,
    required: true,
  },

  options: {
    type: [String],
    required: true,
  },

  answer: {
    type: String,
    required: true,
  },

  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    default: "Easy",
  },
});

module.exports = mongoose.model("Question", QuestionSchema);