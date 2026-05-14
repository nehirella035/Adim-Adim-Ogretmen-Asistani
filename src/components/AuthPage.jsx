import React, { useState } from 'react';
import { Mail, Lock, User, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import authVisual from '../assets/auth_visual.png';

const AuthPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="auth-split-container">
      {/* Left Side: Visual & Content */}
      <div className="auth-visual-side">
        <div className="visual-overlay"></div>
        <img src={authVisual} alt="Teacher Assistant" className="visual-image" />
        <div className="visual-content">
          <div className="visual-badge">
            <Sparkles size={16} />
            <span>Maarif Modeli Uyumlu</span>
          </div>
          <h2>Eğitimin Geleceğine Adım Atın</h2>
          <p>Yapay zeka desteğiyle derslerinizi daha verimli, öğrencilerinizi daha mutlu kılın.</p>
          
          <div className="visual-features">
            <div className="feature-item">
              <CheckCircle2 size={18} />
              <span>Ders Planı Hazırlama</span>
            </div>
            <div className="feature-item">
              <CheckCircle2 size={18} />
              <span>Süreç Odaklı Ölçme</span>
            </div>
            <div className="feature-item">
              <CheckCircle2 size={18} />
              <span>Dijital Araç Önerileri</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="auth-form-side">
        <div className="auth-form-card">
          <div className="form-header">
            <h1>{isLogin ? 'Hoş Geldiniz' : 'Aramıza Katılın'}</h1>
            <p>{isLogin ? 'Lütfen öğretmen hesabınızla giriş yapın.' : 'Ücretsiz öğretmen hesabınızı oluşturun.'}</p>
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
              {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
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
    </div>
  );
};

export default AuthPage;
