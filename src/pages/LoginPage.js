import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = ({ setUserRole }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy data untuk login
    const users = [
      { username: "admin", password: "admin123", role: "admin" },
      { username: "user", password: "user123", role: "user" },
    ];

    const user = users.find(
      (u) =>
        u.username === credentials.username && u.password === credentials.password
    );

    if (user) {
      setUserRole(user.role);
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/"); // User diarahkan ke Home
      }
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
