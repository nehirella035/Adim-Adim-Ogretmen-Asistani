import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import PromptsPanel from './components/PromptsPanel';
import { getGeminiResponse } from './services/gemini';

function App() {
  const [config, setConfig] = useState({
    subject: 'Matematik',
    grade: '5. Sınıf',
    outputType: 'Ders Planı',
    duration: '40+40 Dakika'
  });

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className="app-wrapper">
      <header className="main-header">
        <h1>Adım Adım Öğretmen Asistanı</h1>
        <p>Türkiye Yüzyılı Maarif Modeli uyumlu ortaokul ders destek chatbotu</p>
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
    </div>
  );
}

export default App;
