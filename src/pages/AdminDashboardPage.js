// src/components/AdminDashboardPage.js
import React from 'react';
import { usePengaduan } from '../context/PengaduanContext';

const AdminDashboardPage = () => {
  const { pengaduan, editPengaduan, deletePengaduan } = usePengaduan(); // Mengambil data pengaduan dari context

  const handleEdit = (id, status) => {
    const updatedPengaduan = pengaduan.find((item) => item.id === id);
    updatedPengaduan.status = status;
    editPengaduan(updatedPengaduan); // Update status pengaduan
  };

  const handleDelete = (id) => {
    deletePengaduan(id); // Menghapus pengaduan
  };

  return (
    <section className="admin-dashboard">
      <h1>Dashboard Admin</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Subjek</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pengaduan.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nama}</td>
              <td>{item.judul}</td>
              <td>{item.status}</td>
              <td>
                <button onClick={() => handleEdit(item.id, 'Selesai')}>Selesai</button>
                <button onClick={() => handleDelete(item.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AdminDashboardPage;
