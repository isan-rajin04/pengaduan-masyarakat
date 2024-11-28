import React from 'react';
import { Link } from 'react-router-dom'; // Tambahkan Link untuk navigasi

const HeroSection = () => (
  <section id="home" className="hero-section">
    <div className="hero-content">
      <h1>Platform Pengaduan Masyarakat</h1>
      <p>Laporkan masalah di lingkungan Anda dengan mudah dan cepat melalui platform kami.</p>
      <Link to="/pengaduan" className="btn">Buat Pengaduan</Link> {/* Gunakan Link untuk navigasi */}
    </div>
  </section>
);

export default HeroSection;
