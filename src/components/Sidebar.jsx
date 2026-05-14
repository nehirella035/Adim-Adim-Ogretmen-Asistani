import React from 'react';
import { Book, Users, FileText, Clock } from 'lucide-react';

const Sidebar = ({ config, setConfig }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="sidebar">
      <div className="form-group">
        <label><Book size={14} style={{verticalAlign:'middle', marginRight:'6px'}}/> Ders Seçiniz</label>
        <select name="subject" value={config.subject} onChange={handleChange}>
          <option value="Matematik">Matematik</option>
          <option value="Fen Bilimleri">Fen Bilimleri</option>
          <option value="Türkçe">Türkçe</option>
          <option value="Sosyal Bilgiler">Sosyal Bilgiler</option>
          <option value="İngilizce">İngilizce</option>
          <option value="Din Kültürü">Din Kültürü</option>
          <option value="Teknoloji Tasarım">Teknoloji Tasarım</option>
        </select>
      </div>

      <div className="form-group">
        <label><Users size={14} style={{verticalAlign:'middle', marginRight:'6px'}}/> Sınıf Seçiniz</label>
        <select name="grade" value={config.grade} onChange={handleChange}>
          <option value="5. Sınıf">5. Sınıf</option>
          <option value="6. Sınıf">6. Sınıf</option>
          <option value="7. Sınıf">7. Sınıf</option>
          <option value="8. Sınıf">8. Sınıf</option>
        </select>
      </div>

      <div className="form-group">
        <label><FileText size={14} style={{verticalAlign:'middle', marginRight:'6px'}}/> Çıktı Türü Seçiniz</label>
        <select name="outputType" value={config.outputType} onChange={handleChange}>
          <option value="Ders Planı">Ders Planı</option>
          <option value="Etkinlik Tasarımı">Etkinlik Tasarımı</option>
          <option value="Beceri Temelli Soru">Beceri Temelli Soru</option>
          <option value="Ölçme-Değerlendirme Aracı">Ölçme-Değerlendirme Aracı</option>
          <option value="Rubrik">Rubrik</option>
          <option value="Farklılaştırma Önerisi">Farklılaştırma Önerisi</option>
          <option value="Dijital Araç Önerisi">Dijital Araç Önerisi</option>
          <option value="Veli Bilgilendirme Metni">Veli Bilgilendirme Metni</option>
          <option value="Öğretmen Sunum Taslağı">Öğretmen Sunum Taslağı</option>
        </select>
      </div>

      <div className="form-group">
        <label><Clock size={14} style={{verticalAlign:'middle', marginRight:'6px'}}/> Süre Seçiniz</label>
        <select name="duration" value={config.duration} onChange={handleChange}>
          <option value="40 Dakika">40 Dakika</option>
          <option value="40+40 Dakika">40+40 Dakika</option>
          <option value="3 Ders Saati">3 Ders Saati</option>
          <option value="Haftalık Plan">Haftalık Plan</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
