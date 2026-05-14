import React, { useState } from 'react';
import { Mail, Lock, User, GraduationCap, Sparkles } from 'lucide-react';

const AuthPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gerçek bir senaryoda burada API doğrulaması yapılır
    onLogin();
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card">
        <div className="auth-brand">
          <Sparkles size={48} color="var(--primary)" />
          <h1>Adım Adım Öğretmen Asistanı</h1>
          <p>Türkiye Yüzyılı Maarif Modeli Uyumlu Asistan</p>
        </div>

        <div className="auth-tabs">
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Giriş Yap</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Üye Ol</button>
        </div>

        <form className="auth-page-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="page-input-group">
              <User size={18} />
              <input type="text" placeholder="Ad Soyad" required />
            </div>
          )}
          
          <div className="page-input-group">
            <Mail size={18} />
            <input type="email" placeholder="E-posta Adresi" required />
          </div>

          <div className="page-input-group">
            <Lock size={18} />
            <input type="password" placeholder="Şifre" required />
          </div>

          {!isLogin && (
            <div className="page-input-group">
              <GraduationCap size={18} />
              <select required>
                <option value="">Branş Seçiniz</option>
                <option value="Matematik">Matematik</option>
                <option value="Fen Bilimleri">Fen Bilimleri</option>
                <option value="Türkçe">Türkçe</option>
              </select>
            </div>
          )}

          <button type="submit" className="page-submit-btn">
            {isLogin ? 'Asistana Giriş Yap' : 'Öğretmen Hesabı Oluştur'}
          </button>
        </form>

        <p className="auth-toggle-text">
          {isLogin ? 'Hesabınız yok mu?' : 'Zaten hesabınız var mı?'}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? ' Hemen Üye Olun' : ' Giriş Yapın'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
