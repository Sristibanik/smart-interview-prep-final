import { useState } from "react";
import { motion } from "framer-motion";
import "./Auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">

      {/* LEFT SIDE */}
      <div className="auth-left">
        <h1>PrepMaster </h1>
        <p>Smart Interview Prep Platform</p>

        <div className="features">
          <p>📚 Track subjects & questions</p>
          <p>⚡ Easy / Medium / Hard buckets</p>
          <p>⏱ Track solve time</p>
          <p>📝 Notes & revision</p>
          <p>📊 Progress dashboard</p>
        </div>

        <div className="stats">
          <div><h2>12K+</h2><span>Users</span></div>
          <div><h2>500+</h2><span>Questions</span></div>
          <div><h2>98%</h2><span>Success</span></div>
        </div>
      </div>

      {/* RIGHT SIDE CARD */}
      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 50 }}   // start
        animate={{ opacity: 1, y: 0 }}   // end
        transition={{ duration: 0.6 }}   // smooth
      >

        {/* Toggle */}
        <div className="toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <h2>{isLogin ? "Welcome back " : "Create Account ✨"}</h2>

        {/* Inputs with animation */}
        {!isLogin && (
          <motion.input
            whileFocus={{ scale: 1.05 }}
            placeholder="Name"
          />
        )}

        <motion.input
          whileFocus={{ scale: 1.05 }}
          placeholder="Email"
        />

        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="password"
          placeholder="Password"
        />

        {/* Button animation */}
        <motion.button
          className="main-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLogin ? "Login →" : "Sign Up →"}
        </motion.button>

      </motion.div>

    </div>
  );
}