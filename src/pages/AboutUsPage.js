import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      {/* Header dengan animasi */}
      <header className="about-header">
        <h1>Tentang Kami</h1>
      </header>
      
      {/* Bagian gambar pemerintahan */}
      <section className="about-image">
        <img src="https://www.constructionplusasia.com/wp-content/uploads/2019/03/Interview-Box-Gedung-Kantor-Terpadu-Sukoharjo.jpg" alt="Pemerintahan Sukoharjo" className="gov-image"/>
      </section>
      
      {/* Konten Deskripsi */}
      <section className="about-content">
        <h2>Pemerintahan Sukoharjo</h2>
        <p>
          Kami adalah pemerintahan daerah Sukoharjo yang berdedikasi untuk memberikan layanan terbaik
          kepada masyarakat. Dengan visi mewujudkan Sukoharjo yang Makmur, kami berkomitmen untuk
          menangani setiap pengaduan masyarakat dengan cepat dan transparan.
        </p>
        <p>
          Kantor kami berlokasi di <strong>Jl. Proklamasi No.123, Sukoharjo</strong>. Hubungi kami melalui
          telepon di <strong>(0271) 123456</strong> atau email di <strong>info@sukoharjo.go.id</strong>.
        </p>
        <p>
          Kami percaya bahwa transparansi dan kecepatan dalam menangani pengaduan masyarakat adalah
          kunci untuk membangun kepercayaan publik.
        </p>
      </section>

      {/* Tim Kami dengan animasi */}
      <section className="about-team">
        <h3>Tim Kami</h3>
        <ul>
          <li><strong>Bupati Sukoharjo:</strong> Prof. Dr. Ir. Abdillah Ichsan, S.kom.,M.Eng</li>
          <li><strong>Sekretaris Daerah:</strong> Ir. KH. Rachmat Arivandityas P, S.Mj2., M.Wb,. </li>
          <li><strong>Tim Pengaduan Daerah:</strong> Dr. Raden Tumenggung Wahyu Dwi P, M.Spcm</li>
        </ul>
      </section>

      <footer className="about-footer">
        <p>© 2024 Kelompok 6. Bocil Astronot All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUsPage;
