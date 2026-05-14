import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import PromptsPanel from './components/PromptsPanel';
import AuthModal from './components/AuthModal';
import AuthPage from './components/AuthPage';
import { getGeminiResponse } from './services/gemini';
import { LogOut } from 'lucide-react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [config, setConfig] = useState({
    subject: 'Matematik',
    grade: '5. Sınıf',
    outputType: 'Ders Planı',
    duration: '40+40 Dakika'
  });

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, type: 'login' });

  const handleSendMessage = async (text) => {
    const userMessage = { role: 'user', text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const aiResponse = await getGeminiResponse(newMessages, config);
      setMessages([...newMessages, { role: 'ai', text: aiResponse }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages([...newMessages, { role: 'ai', text: "Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoggedIn) {
    return <AuthPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="app-wrapper">
      <header className="main-header">
        <div className="header-brand">
          <h1>Adım Adım Öğretmen Asistanı</h1>
          <p>Türkiye Yüzyılı Maarif Modeli uyumlu ortaokul ders destek chatbotu</p>
        </div>
        <div className="header-actions">
          <button 
            className="auth-button login" 
            style={{display:'flex', alignItems:'center', gap:'8px'}}
            onClick={() => setIsLoggedIn(false)}
          >
            <LogOut size={16} />
            Çıkış Yap
          </button>
        </div>
      </header>
      
      <div className="content-container">
        <Sidebar config={config} setConfig={setConfig} />
        
        <ChatWindow 
          messages={messages} 
          onSendMessage={handleSendMessage} 
          isLoading={isLoading} 
        />
        
        <PromptsPanel onSelectPrompt={handleSendMessage} />
      </div>

      <AuthModal 
        isOpen={modal.isOpen} 
        type={modal.type} 
        onClose={() => setModal({ ...modal, isOpen: false })} 
      />
    </div>
  );
}

export default App;
