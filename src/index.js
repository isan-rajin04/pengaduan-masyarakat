import React, { useState } from 'react'; // Import useState
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import Home from './components/Home'; // Import Home component
import PengaduanPage from './pages/PengaduanPage'; // Import PengaduanPage component
import Navbar from './components/Navbar'; // Import Navbar component
import PantauStatusPage from './pages/PantauStatusPage'; // Import PantauStatusPage component
import AdminDashboardPage from './pages/AdminDashboardPage'; // Import AdminDashboardPage component
import AboutUsPage from './pages/AboutUsPage'; // Import AboutUsPage component
import TataCaraPage from './pages/TataCaraPage'; // Import TataCaraPage component
import LoginPage from './pages/LoginPage'; // Import LoginPage component
import { PengaduanProvider } from './context/PengaduanContext'; // Import PengaduanProvider
import RegisterPage from './pages/RegisterPage'; // Import RegisterPage component

const Index = () => {
  const [userRole, setUserRole] = useState(null); // Manage user role
  const [users, setUsers] = useState([]); // State untuk daftar pengguna

  // Define handleRegister function
  const handleRegister = (newUser) => {
    console.log('Registering user:', newUser);
    setUsers([...users, newUser]);
  };

  return (
    <PengaduanProvider> {/* Menyediakan akses global ke data pengaduan */}
      <Router>
        <Navbar userRole={userRole} setUserRole={setUserRole} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pengaduan" element={<PengaduanPage />} />
          <Route path="/pantau" element={<PantauStatusPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/tata-cara" element={<TataCaraPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route
            path="/login"
            element={
              <LoginPage
                users={users}
                setUserRole={setUserRole}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RegisterPage handleRegister={handleRegister} />
            }
          />
        </Routes>
      </Router>
    </PengaduanProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
