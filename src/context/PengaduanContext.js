// src/contexts/PengaduanContext.js
import React, { createContext, useState, useContext } from 'react';

// Membuat context untuk pengaduan
const PengaduanContext = createContext();

// Custom hook untuk menggunakan context ini
export const usePengaduan = () => {
  return useContext(PengaduanContext);
};

export const PengaduanProvider = ({ children }) => {
  const [pengaduan, setPengaduan] = useState([
    { id: 1, nama: 'Budi', alamat: 'Jl. Merdeka 123', telepon: '08123456789', judul: 'Jalan Rusak', deskripsi: 'Jalan rusak di depan rumah saya.', status: 'Di Proses' },
    { id: 2, nama: 'Wahyu', alamat: 'Jl. Merdeka 22', telepon: '08123456789', judul: 'Lampu Jalan Padam', deskripsi: 'Lampu Jalan di depan rumah saya padam.', status: 'Belum Ditangani' },
    { id: 3, nama: 'Siti', alamat: 'Jl. Sudirman 456', telepon: '08198765432', judul: 'Sampah Menumpuk', deskripsi: 'Sampah di daerah saya belum diangkut selama seminggu.', status: 'Belum Ditangani' },
    { id: 4, nama: 'Kamto', alamat: 'Jl. Gentan 13', telepon: '08123456787', judul: 'Jalan berlubang daerah Gentan', deskripsi: 'Jalan rusak di depan rumah saya.', status: 'Belum Ditangani' },
    { id: 5, nama: 'Isan', alamat: 'Jl. Grogol 72', telepon: '08123456787', judul: 'Banjir', deskripsi: 'Jika hujan deras rumah saya selalu banjir.', status: 'Di Proses' },
    {
      id: 6,
      nama: 'Nopal',
      alamat: 'Jl. Purbayan 1922',
      telepon: '08198765432',
      judul: 'Begal',
      deskripsi: 'Daerah saya rawan begal.',
      status: 'Belum Ditangani',
    },
    {
      id: 7,
      nama: 'Andit',
      alamat: 'Jl. Manang 86',
      telepon: '08123456789',
      judul: 'Pelayanan BPJS',
      deskripsi: 'Pelayanan BPJS kurang gesit.',
      status: 'Di Proses',
    },
    {
      id: 8,
      nama: 'Demin',
      alamat: 'Jl. Sukarno 123',
      telepon: '08123456789',
      judul: 'Aspal Berlubang',
      deskripsi: 'Aspal di daerah saya banyak yang berlubang.',
      status: 'Di Proses',
    },
    {
      id: 9,
      nama: 'Yono Saputro',
      alamat: 'Jl. Mojo 456',
      telepon: '08198765432',
      judul: 'Kemacetan',
      deskripsi: 'Setiap sore rawan macet.',
      status: 'Belum Ditangani',
    },
    // Data fiksi tambahan
    {
      id: 10,
      nama: 'Dimpel',
      alamat: 'Jl. Raya No. 80',
      telepon: '08234567890',
      judul: 'Pohon Tumbang',
      deskripsi: 'Pohon besar tumbang menutup jalan raya.',
      status: 'Belum Ditangani',
    },
    {
      id: 11,
      nama: 'Rusdi',
      alamat: 'Jl. Cemani No. 44',
      telepon: '08345678901',
      judul: 'Kebocoran Pipa',
      deskripsi: 'Pipa air bocor di sekitar rumah saya.',
      status: 'Di Proses',
    },
    {
      id: 12,
      nama: 'Usama',
      alamat: 'Jl. Selamat 22',
      telepon: '08456789012',
      judul: 'Tanggul Jebol',
      deskripsi: 'Tanggul di belakang rumah jebol saat hujan lebat.',
      status: 'Belum Ditangani',
    },
    {
      id: 13,
      nama: 'Joko',
      alamat: 'Jl. Pahlawan 10',
      telepon: '08567890123',
      judul: 'Polusi Udara',
      deskripsi: 'Polusi udara akibat asap pabrik mengganggu lingkungan.',
      status: 'Di Proses',
    },
    {
      id: 14,
      nama: 'Rio',
      alamat: 'Jl. Kembang No. 22',
      telepon: '08678901234',
      judul: 'Sungai Tercemar',
      deskripsi: 'Sungai di dekat rumah tercemar limbah industri.',
      status: 'Belum Ditangani',
    },
    // Tambahkan data pengaduan lainnya di sini
  ]);

  const editPengaduan = (updatedPengaduan) => {
    setPengaduan((prevPengaduan) =>
      prevPengaduan.map((pengaduan) =>
        pengaduan.id === updatedPengaduan.id ? updatedPengaduan : pengaduan
      )
    );
  };

  const deletePengaduan = (id) => {
    setPengaduan((prevPengaduan) => prevPengaduan.filter((pengaduan) => pengaduan.id !== id));
  };

  return (
    <PengaduanContext.Provider value={{ pengaduan, editPengaduan, deletePengaduan }}>
      {children}
    </PengaduanContext.Provider>
  );
};
