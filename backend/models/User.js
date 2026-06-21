const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,

  progress: {
    dsa: {
      currentQuestion: {
        type: Number,
        default: 0,
      },
      score: {
        type: Number,
        default: 0,
      },
    },

    dbms: {
      currentQuestion: {
        type: Number,
        default: 0,
      },
      score: {
        type: Number,
        default: 0,
      },
    },

    os: {
      currentQuestion: {
        type: Number,
        default: 0,
      },
      score: {
        type: Number,
        default: 0,
      },
    },

    cn: {
      currentQuestion: {
        type: Number,
        default: 0,
      },
      score: {
        type: Number,
        default: 0,
      },
    },

    aptitude: {
      currentQuestion: {
        type: Number,
        default: 0,
      },
      score: {
        type: Number,
        default: 0,
      },
    },

    hr: {
      currentQuestion: {
        type: Number,
        default: 0,
      },
      score: {
        type: Number,
        default: 0,
      },
    },
  },
});

module.exports = mongoose.model("User", userSchema);