import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ userRole, setUserRole }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">Pengaduan Masyarakat</Link>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/pengaduan">Pengaduan</Link></li>
        <li className="navbar-item"><Link to="/pantau">Pantau Status</Link></li>
        <li className="navbar-item"><Link to="/about-us">About Us</Link></li>
        <li className="navbar-item"><Link to="/tata-cara">Tata Cara</Link></li>
        {userRole === "admin" && (
          <li className="navbar-item"><Link to="/admin">Admin Dashboard</Link></li>
        )}
        {!userRole ? (
          <li className="navbar-item">
            <Link to="/login" className="login-link">Login</Link> {/* Link to Login Page */}
          </li>
        ) : (
          <li className="navbar-item">
            <button className="logout-button" onClick={() => setUserRole(null)}>
              Logout
            </button> {/* Logout Button */}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
