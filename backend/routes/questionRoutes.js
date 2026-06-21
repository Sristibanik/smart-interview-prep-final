const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

router.get("/:subject", async (req, res) => {
  try {
    const questions = await Question.aggregate([
      {
        $match: {
          subject: req.params.subject,
        },
      },
      {
        $sample: {
          size: 20,
        },
      },
    ]);

    res.json(questions);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;