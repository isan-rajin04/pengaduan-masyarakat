import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = ({ handleRegister }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simpan data pengguna ke localStorage
    let users = JSON.parse(localStorage.getItem("users")) || []; // Ambil data pengguna yang sudah ada
    const existingUser = users.find(user => user.username === formData.username);

    if (existingUser) {
      setError("Username already exists");
    } else {
      users.push({ ...formData, role: "user" }); // Menambahkan role user, bisa disesuaikan jika admin
      localStorage.setItem("users", JSON.stringify(users)); // Simpan data ke localStorage
      navigate("/login"); // Redirect ke halaman login setelah berhasil
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
