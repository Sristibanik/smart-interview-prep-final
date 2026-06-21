import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const navigate = useNavigate();

  const userData = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const userName = userData?.name || "Student";

  const currentUser =
    localStorage.getItem("currentUser") || "guest";

  const subjects = [
    { name: "DSA", key: "dsa" },
    { name: "DBMS", key: "dbms" },
    { name: "OS", key: "os" },
    { name: "CN", key: "cn" },
    { name: "Aptitude", key: "aptitude" },
    { name: "HR", key: "hr" },
  ];

  const scores = subjects.map((s) => ({
    ...s,
    score: Number(
      localStorage.getItem(
        `${currentUser}-${s.key}-score`
      ) || 0
    ),
  }));

  const total = scores.reduce(
    (sum, s) => sum + s.score,
    0
  );

  const readiness = Math.round(
    (total / 120) * 100
  );

  const readinessText =
    readiness >= 80
      ? "Placement Ready 🚀"
      : readiness >= 60
      ? "Almost Ready 🔥"
      : readiness >= 40
      ? "Needs More Practice 📚"
      : "Beginner Level 🌱";

  const strongest =
    [...scores].sort(
      (a, b) => b.score - a.score
    )[0] || { name: "None" };

  const weakSubjects = scores
    .filter((s) => s.score < 5)
    .map((s) => s.name);

  const chartData = scores.map((item) => ({
    name: item.name,
    value: item.score,
  }));

  const COLORS = [
    "#2563eb",
    "#16a34a",
    "#f59e0b",
    "#dc2626",
    "#8b5cf6",
    "#06b6d4",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "40px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1>👋 Welcome, {userName}</h1>
        <h2>📊 Placement Dashboard</h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#0f172a",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>🎯 Placement Readiness</h3>
          <h1>{readiness}%</h1>
          <p>{readinessText}</p>
        </div>

        <div
          style={{
            background: "#0f172a",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>🟢 Strongest Subject</h3>
          <h2>{strongest.name}</h2>
        </div>

        <div
          style={{
            background: "#0f172a",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>🔴 Need Improvement</h3>
          <h2>
            {weakSubjects.length
              ? weakSubjects.join(", ")
              : "None 🎉"}
          </h2>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          background: "#0f172a",
          padding: "25px",
          borderRadius: "15px",
        }}
      >
        <h2>📈 Performance Distribution</h2>

        <div
          style={{
            width: "100%",
            height: "400px",
          }}
        >
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={130}
                label
              >
                {chartData.map(
                  (entry, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index % COLORS.length
                        ]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          background: "#0f172a",
          padding: "25px",
          borderRadius: "15px",
        }}
      >
        <h2>📚 Recommended Focus</h2>

        {weakSubjects.length ? (
          <ul>
            {weakSubjects.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        ) : (
          <p>Excellent performance 🎉</p>
        )}
      </div>

      <div
        style={{
          marginTop: "20px",
          background: "#0f172a",
          padding: "25px",
          borderRadius: "15px",
        }}
      >
        <h2>💡 Daily Placement Tips</h2>

        <ul>
          <li>Practice 2 DSA questions daily</li>
          <li>Revise DBMS concepts</li>
          <li>Study OS Scheduling</li>
          <li>Prepare HR Self Introduction</li>
        </ul>
      </div>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <button
          onClick={() =>
            navigate("/questions")
          }
          style={{
            padding: "15px 30px",
            border: "none",
            borderRadius: "10px",
            background: "#16a34a",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Continue Practice
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem(
              "currentUser"
            );
            navigate("/login");
          }}
          style={{
            padding: "15px 30px",
            border: "none",
            borderRadius: "10px",
            background: "#dc2626",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;