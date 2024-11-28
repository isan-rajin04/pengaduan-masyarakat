import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="features" className="section features-section">
      <h2>Fitur Unggulan</h2>
      <div className="features-container">
        <div 
          className="feature-box" 
          onClick={() => navigate('/pengaduan')} 
          style={{ cursor: 'pointer' }}>
          <i className="icon">📝</i>
          <h3>Pelaporan Cepat</h3>
          <p>Laporkan masalah dalam hitungan menit dengan proses yang sederhana dan intuitif.</p>
        </div>

        <div 
          className="feature-box" 
          onClick={() => navigate('/pantau')} 
          style={{ cursor: 'pointer' }}>
          <i className="icon">🔍</i>
          <h3>Pemantauan Status</h3>
          <p>Pantau status laporan Anda secara real-time dari mana saja.</p>
        </div>

        <div className="feature-box">
          <i className="icon">📱</i>
          <h3>Akses di Mana Saja</h3>
          <p>Akses layanan kami melalui perangkat apapun, kapanpun dan di mana saja.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
