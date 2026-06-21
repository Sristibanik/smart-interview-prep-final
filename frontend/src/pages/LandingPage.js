import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <nav className="navbar">
        <h2>🚀 SmartPrep</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/">Features</a>
          <a href="/">Questions</a>
          <a href="/">Contact</a>
        </div>

        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </nav>

      <div className="hero">
        <div className="hero-left">
          <h1>
            Ace Your Next
            <br />
            Technical Interview
          </h1>

          <p>
            Practice DSA, DBMS, OS and CN questions with
            analytics, progress tracking and mock interviews.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/login")}
            >
              Get Started
            </button>

            <button className="secondary-btn">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000"
            alt="Interview"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;