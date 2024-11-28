import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PengaduanPage from "./components/PengaduanPage";
import PantauStatusPage from "./components/PantauStatusPage";
import TataCaraPage from "./components/TataCaraPage";
import AboutUsPage from "./components/AboutUsPage";
import LoginPage from "./components/LoginPage";
import AdminDashboardPage from "./components/AdminDashboardPage";

function App() {
  const [userRole, setUserRole] = useState(null);

  return (
    <Router>
      <Navbar userRole={userRole} setUserRole={setUserRole} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pengaduan" element={<PengaduanPage />} />
        <Route path="/pantau" element={<PantauStatusPage />} />
        <Route path="/tata-cara" element={<TataCaraPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route
          path="/login"
          element={<LoginPage setUserRole={setUserRole} />}
        />
        {userRole === "admin" && (
          <Route path="/admin" element={<AdminDashboardPage />} />
        )}
        <Route path="*" element={<Navigate to={userRole ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
