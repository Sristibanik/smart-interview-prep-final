const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ FIXED CORS (IMPORTANT)
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const questionRoutes = require("./routes/questionRoutes");
const progressRoutes = require("./routes/progressRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/progress", progressRoutes);

// MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/interviewprep")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Test
app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});