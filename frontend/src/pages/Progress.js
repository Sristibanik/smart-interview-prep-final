import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";

import dsaQuestions from "../data/dsaQuestions";
import dbmsQuestions from "../data/dbmsQuestions";
import osQuestions from "../data/osQuestions";
import cnQuestions from "../data/cnQuestions";
import aptitudeQuestions from "../data/aptitudeQuestions";
import hrQuestions from "../data/hrQuestions";

function Progress() {
  const { subject } = useParams();
  const navigate = useNavigate();

  let allQuestions = [];
  let title = "";

  switch (subject) {
    case "dsa":
      allQuestions = dsaQuestions;
      title = "DSA";
      break;
    case "dbms":
      allQuestions = dbmsQuestions;
      title = "DBMS";
      break;
    case "os":
      allQuestions = osQuestions;
      title = "Operating System";
      break;
    case "cn":
      allQuestions = cnQuestions;
      title = "Computer Networks";
      break;
    case "aptitude":
      allQuestions = aptitudeQuestions;
      title = "Aptitude";
      break;
    case "hr":
      allQuestions = hrQuestions;
      title = "HR Interview";
      break;
    default:
      allQuestions = dsaQuestions;
      title = "DSA";
  }

  const questions = useMemo(() => {
    return [...allQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(20, allQuestions.length));
  }, [subject]);

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [quizFinished, setQuizFinished] = useState(false);

  if (!questions.length) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#020617",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        No Questions Available
      </div>
    );
  }

  const handleAnswer = (option) => {
    const isCorrect =
      option === questions[current].answer;

    setSelected(option);

    let newScore = score;

    if (isCorrect) {
      newScore = score + 1;
      setScore(newScore);
    }

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent((prev) => prev + 1);
        setSelected("");
      } else {
        const currentUser =
  localStorage.getItem("currentUser");

localStorage.setItem(
  `${currentUser}-${subject}-score`,
  newScore
);

        setQuizFinished(true);
      }
    }, 700);
  };

  const progress =
    ((current + 1) / questions.length) * 100;

  if (quizFinished) {
    const accuracy = (
      (score / questions.length) *
      100
    ).toFixed(0);

    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#020617",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#0f172a",
            padding: "50px",
            borderRadius: "20px",
            width: "600px",
            textAlign: "center",
            color: "white",
            boxShadow:
              "0 0 30px rgba(37,99,235,0.3)",
          }}
        >
          <h1>🎉 Quiz Completed</h1>

          <h2>Subject: {title}</h2>

          <h2>
            Score: {score}/{questions.length}
          </h2>

          <h2>
            Accuracy: {accuracy}%
          </h2>

          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              marginTop: "25px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() =>
                window.location.reload()
              }
              style={{
                padding: "14px 24px",
                border: "none",
                borderRadius: "10px",
                background: "#2563eb",
                color: "white",
                cursor: "pointer",
              }}
            >
              Restart Quiz
            </button>

            <button
              onClick={() =>
                navigate("/dashboard")
              }
              style={{
                padding: "14px 24px",
                border: "none",
                borderRadius: "10px",
                background: "#f59e0b",
                color: "white",
                cursor: "pointer",
              }}
            >
              View Dashboard
            </button>

            <button
              onClick={() =>
                navigate("/questions")
              }
              style={{
                padding: "14px 24px",
                border: "none",
                borderRadius: "10px",
                background: "#16a34a",
                color: "white",
                cursor: "pointer",
              }}
            >
              Back To Subjects
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "900px",
          background: "#0f172a",
          borderRadius: "20px",
          padding: "40px",
          color: "white",
        }}
      >
        <h1>🚀 {title} Interview Practice</h1>

        <p style={{ color: "#94a3b8" }}>
          Question {current + 1} / {questions.length}
        </p>

        <div
          style={{
            background: "#1e293b",
            height: "10px",
            borderRadius: "20px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              background: "#2563eb",
              height: "10px",
              borderRadius: "20px",
            }}
          />
        </div>

        <h2
          style={{
            marginTop: "30px",
            marginBottom: "20px",
          }}
        >
          {questions[current].question}
        </h2>

        <div
          style={{
            display: "grid",
            gap: "15px",
          }}
        >
          {questions[current].options.map(
            (option) => (
              <button
                key={option}
                disabled={selected !== ""}
                onClick={() =>
                  handleAnswer(option)
                }
                style={{
                  padding: "15px",
                  border: "none",
                  borderRadius: "10px",
                  color: "white",
                  fontSize: "16px",
                  cursor: "pointer",
                  background:
                    selected === option
                      ? option ===
                        questions[current].answer
                        ? "#16a34a"
                        : "#dc2626"
                      : "#2563eb",
                }}
              >
                {option}
              </button>
            )
          )}
        </div>

        <h3
          style={{
            marginTop: "25px",
            color: "#38bdf8",
          }}
        >
          Score: {score}
        </h3>
      </div>
    </div>
  );
}

export default Progress;