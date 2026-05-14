import React from 'react';
import { Lightbulb } from 'lucide-react';

const PromptsPanel = ({ onSelectPrompt }) => {
  const prompts = [
    "5. sınıf matematik kesirler için ders planı hazırla.",
    "6. sınıf cebirsel ifadeler için etkinlik tasarla.",
    "7. sınıf oran-orantı için beceri temelli soru üret.",
    "8. sınıf matematik LGS tarzı soru hazırla.",
    "Bir konu için rubrik oluştur.",
    "Bir kazanım için farklılaştırma öner."
  ];

  return (
    <div className="prompts-panel">
      <div className="panel-title" style={{display:'flex', alignItems:'center', gap:'8px'}}>
        <Lightbulb size={18} className="text-primary" />
        <span>Örnek İstemler</span>
      </div>
      {prompts.map((prompt, index) => (
        <div 
          key={index} 
          className="prompt-card" 
          onClick={() => onSelectPrompt(prompt)}
        >
          {prompt}
        </div>
      ))}
      <div style={{marginTop: 'auto', padding: '1rem', background: 'linear-gradient(135deg, #6366f110, #3b82f610)', borderRadius: 12, fontSize: '0.75rem', color: 'var(--text-muted)'}}>
        <strong>💡 İpucu:</strong> Sol panelden çıktı türünü değiştirerek daha spesifik sonuçlar alabilirsiniz.
      </div>
    </div>
  );
};

export default PromptsPanel;
