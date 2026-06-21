import "./Questions.css";
import { useNavigate } from "react-router-dom";

function Questions() {
  const navigate = useNavigate();

  const subjects = [
    {
      name: "DSA",
      count: 20,
      desc: "Arrays, Trees, Graphs & DP",
      route: "dsa",
    },
    {
      name: "DBMS",
      count: 20,
      desc: "SQL, Normalization & Transactions",
      route: "dbms",
    },
    {
      name: "Operating System",
      count: 20,
      desc: "Scheduling, Memory & Deadlocks",
      route: "os",
    },
    {
      name: "Computer Networks",
      count: 20,
      desc: "TCP/IP, Routing & Protocols",
      route: "cn",
    },
    {
      name: "Aptitude",
      count: 20,
      desc: "Quantitative & Logical Reasoning",
      route: "aptitude",
    },
    {
      name: "HR Interview",
      count: 20,
      desc: "Behavioral & Situational Questions",
      route: "hr",
    },
  ];

  return (
    <div className="questions-page">
      <div className="questions-header">
        <h1>📚 Interview Preparation</h1>
        <p>
          Select a subject and start your placement preparation journey.
        </p>
      </div>

      <div className="questions-grid">
        {subjects.map((subject) => (
          <div className="question-card" key={subject.name}>
            <h2>{subject.name}</h2>

            <h3>{subject.count} Questions</h3>

            <p>{subject.desc}</p>

            <button
              onClick={() =>
                navigate(`/progress/${subject.route}`)
              }
            >
              Start Practice →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;