import React, { useState } from 'react';
import { X, Mail, Lock, User, GraduationCap } from 'lucide-react';

const AuthModal = ({ isOpen, onClose, type }) => {
  const [isLogin, setIsLogin] = useState(type === 'login');

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}><X size={20} /></button>
        
        <div className="modal-header">
          <h2>{isLogin ? 'Hoş Geldiniz' : 'Aramıza Katılın'}</h2>
          <p>{isLogin ? 'Öğretmen hesabınızla giriş yapın' : 'Yeni bir öğretmen hesabı oluşturun'}</p>
        </div>

        <form className="auth-form" onSubmit={e => { e.preventDefault(); alert(isLogin ? 'Giriş Başarılı!' : 'Kayıt Başarılı!'); onClose(); }}>
          {!isLogin && (
            <div className="modal-input-group">
              <User size={18} />
              <input type="text" placeholder="Ad Soyad" required />
            </div>
          )}
          
          <div className="modal-input-group">
            <Mail size={18} />
            <input type="email" placeholder="E-posta Adresi" required />
          </div>

          <div className="modal-input-group">
            <Lock size={18} />
            <input type="password" placeholder="Şifre" required />
          </div>

          {!isLogin && (
            <div className="modal-input-group">
              <GraduationCap size={18} />
              <select required style={{background: 'transparent', border: 'none', width: '100%', outline: 'none', font: 'inherit'}}>
                <option value="">Branş Seçiniz</option>
                <option value="Matematik">Matematik</option>
                <option value="Fen Bilimleri">Fen Bilimleri</option>
                <option value="Türkçe">Türkçe</option>
              </select>
            </div>
          )}

          <button type="submit" className="auth-submit-btn">
            {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
          </button>
        </form>

        <div className="modal-footer">
          <p>
            {isLogin ? 'Hesabınız yok mu?' : 'Zaten hesabınız var mı?'}
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Üye Ol' : 'Giriş Yap'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
