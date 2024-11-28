import React, { useState } from 'react';
import '../Styles/PengaduanPage.css'; // Import CSS khusus untuk halaman Pengaduan

const PengaduanPage = () => {
  const [selectedForm, setSelectedForm] = useState('pengaduan'); // default 'pengaduan'
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    description: '',
    phone: '',
    address: '',
  });
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [rating, setRating] = useState(0);
  const [showRating, setShowRating] = useState(false);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedForm(option);
    setFeedback('');
    setShowFeedback(false);
    setRating(0);
    setShowRating(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback('Form berhasil dikirim! Terima kasih atas pengaduan/permintaan/aspirasinya.');
    setShowFeedback(true);

    setFormData({
      name: '',
      subject: '',
      description: '',
      phone: '',
      address: '',
    });

    setShowRating(true);

    setTimeout(() => {
      setShowFeedback(false);
    }, 5000);
  };

  const handleRating = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleRatingSubmit = () => {
    setRatingSubmitted(true);
    setTimeout(() => {
      window.location.href = '/'; // Redirect after 1 second
    }, 1000);
  };

  return (
    <div className="container">
      <h2>Form Pengaduan</h2>
      
      <div className="options">
        <div 
          className={`option ${selectedForm === 'pengaduan' ? 'active' : ''}`} 
          onClick={() => handleOptionClick('pengaduan')}
        >
          Pengaduan
        </div>
        <div 
          className={`option ${selectedForm === 'permintaan' ? 'active' : ''}`} 
          onClick={() => handleOptionClick('permintaan')}
        >
          Permintaan Informasi
        </div>
        <div 
          className={`option ${selectedForm === 'aspirasi' ? 'active' : ''}`} 
          onClick={() => handleOptionClick('aspirasi')}
        >
          Aspirasi
        </div>
      </div>

      {/* Form Pengaduan */}
      {selectedForm === 'pengaduan' && (
        <form className="active" onSubmit={handleSubmit}>
          <label htmlFor="name">Nama</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Masukkan nama Anda" 
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="subject">Subjek Pengaduan</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            placeholder="Masukkan subjek pengaduan" 
            value={formData.subject}
            onChange={handleChange}
          />
          <label htmlFor="description">Deskripsi Pengaduan</label>
          <textarea 
            id="description" 
            name="description" 
            rows="5" 
            placeholder="Jelaskan pengaduan Anda" 
            value={formData.description}
            onChange={handleChange}
          />
          <label htmlFor="phone">Nomor Telepon</label>
          <input 
            type="text" 
            id="phone" 
            name="phone" 
            placeholder="Masukkan nomor telepon Anda" 
            value={formData.phone}
            onChange={handleChange}
          />
          <label htmlFor="address">Alamat</label>
          <input 
            type="text" 
            id="address" 
            name="address" 
            placeholder="Masukkan alamat Anda" 
            value={formData.address}
            onChange={handleChange}
          />
          <input type="submit" value="Kirim Pengaduan" />
        </form>
      )}

      {/* Form Permintaan */}
      {selectedForm === 'permintaan' && (
        <form className="active" onSubmit={handleSubmit}>
          <label htmlFor="name">Nama</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Masukkan nama Anda" 
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="subject">Subjek Permintaan</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            placeholder="Masukkan subjek permintaan" 
            value={formData.subject}
            onChange={handleChange}
          />
          <label htmlFor="description">Deskripsi Permintaan</label>
          <textarea 
            id="description" 
            name="description" 
            rows="5" 
            placeholder="Jelaskan permintaan Anda" 
            value={formData.description}
            onChange={handleChange}
          />
          <input type="submit" value="Kirim Permintaan" />
        </form>
      )}

      {/* Form Aspirasi */}
      {selectedForm === 'aspirasi' && (
        <form className="active" onSubmit={handleSubmit}>
          <label htmlFor="name">Nama</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Masukkan nama Anda" 
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="subject">Subjek Aspirasi</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            placeholder="Masukkan subjek aspirasi" 
            value={formData.subject}
            onChange={handleChange}
          />
          <label htmlFor="description">Deskripsi Aspirasi</label>
          <textarea 
            id="description" 
            name="description" 
            rows="5" 
            placeholder="Jelaskan aspirasi Anda" 
            value={formData.description}
            onChange={handleChange}
          />
          <input type="submit" value="Kirim Aspirasi" />
        </form>
      )}

      {/* Rating & Feedback */}
      {showRating && !ratingSubmitted && (
        <div className="rating-container">
          <h3>Terima kasih atas pengisian Anda!</h3>
          <h4>Berikan Rating untuk layanan kami:</h4>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span 
                key={star} 
                className={`star ${rating >= star ? 'filled' : ''}`} 
                onClick={() => handleRating(star)}
              >
                ★
              </span>
            ))}
          </div>
          <button onClick={handleRatingSubmit}>Submit Rating</button>
        </div>
      )}

      {showFeedback && <div className="feedback">{feedback}</div>}
    </div>
  );
};

export default PengaduanPage;
