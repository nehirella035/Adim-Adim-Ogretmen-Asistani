import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';

const ChatWindow = ({ messages, onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="chat-main">
      <div className="messages-list" ref={scrollRef}>
        {messages.length === 0 && (
          <div style={{textAlign: 'center', marginTop: '15%', opacity: 0.5}}>
            <Bot size={64} style={{margin: '0 auto 1.5rem', color: 'var(--primary)'}} />
            <h2 style={{fontSize:'1.25rem', color:'var(--text-main)'}}>Hoş Geldiniz, Meslektaşım</h2>
            <p style={{fontSize:'0.9rem'}}>Türkiye Yüzyılı Maarif Modeli çerçevesinde içerik üretmeye hazırız.</p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`msg-bubble ${msg.role === 'user' ? 'user' : 'ai'}`}>
            <div style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'6px', fontSize:'0.75rem', opacity:0.8}}>
              {msg.role === 'user' ? <User size={12}/> : <Bot size={12}/>}
              <span>{msg.role === 'user' ? 'Siz' : 'Asistan'}</span>
            </div>
            <div className="markdown-content" dangerouslySetInnerHTML={{ 
              __html: msg.text
                .replace(/\n/g, '<br/>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\|/g, ' ') // Simple table handling improvement could go here if needed
            }} />
          </div>
        ))}

        {isLoading && (
          <div className="msg-bubble ai">
            <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
              <Loader2 className="animate-spin" size={18} color="var(--primary)" />
              <span style={{fontSize:'0.9rem', color:'var(--text-muted)'}}>İçerik tasarlanıyor...</span>
            </div>
          </div>
        )}
      </div>

      <div className="chat-input-box">
        <form className="input-container" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="İhtiyacınızı veya konuyu buraya yazın..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button type="submit" className="send-button" disabled={!input.trim() || isLoading}>
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
