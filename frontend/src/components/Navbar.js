import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={styles.nav}>
      <h2>PrepMaster 💜</h2>

      <div>
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        <button onClick={() => navigate("/questions")}>Questions</button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#ff6ec4",
    color: "white",
  },
};

export default Navbar;