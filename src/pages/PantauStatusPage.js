// src/components/PantauStatusPage.js
import React from 'react';
import { usePengaduan } from '../context/PengaduanContext';

const PantauStatusPage = () => {
  const { pengaduan } = usePengaduan(); // Mengambil data pengaduan dari context

  // Pastikan data pengaduan ada
  if (!pengaduan || pengaduan.length === 0) {
    return <p>Tidak ada pengaduan yang ditemukan.</p>; // Menampilkan pesan jika tidak ada data
  }

  return (
    <section className="pantau-status">
      <h1>Status Pengaduan Anda</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Subjek</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pengaduan.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nama}</td>
              <td>{item.judul}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default PantauStatusPage;
