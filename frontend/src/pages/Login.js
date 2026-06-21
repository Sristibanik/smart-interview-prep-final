import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          email,
          password,
        }
      );

     localStorage.setItem(
  "token",
  res.data.token
);

localStorage.setItem(
  "user",
  JSON.stringify(res.data.user)
);

localStorage.setItem(
  "currentUser",
  res.data.user.email
);

alert("Login Successful 🚀");

navigate("/questions");
    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
          "Login Failed ❌"
      );
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back 👋</h1>

        <p className="login-subtitle">
          Continue your interview preparation journey
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login →
        </button>

        <div className="login-footer">
          New User?
          <span
            onClick={() =>
              navigate("/signup")
            }
          >
            {" "}Create Account
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;