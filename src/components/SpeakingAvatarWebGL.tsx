import React, { useEffect, useState, useRef } from 'react';
import avatarImg from './avatar.jpg';
import './SpeakingAvatar.css';

interface SpeakingAvatarWebGLProps {
  activeTabId: string;
}

interface ProductItem {
  id: string;
  name: string;
  color: string;
  icon: React.ReactNode;
  desc: string;
}

const PRODUCT_ICONS = {
  hr: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  care: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
  prop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
      <path d="M7 2v20" />
      <path d="M17 2v20" />
      <path d="M2 12h20" />
    </svg>
  ),
  mind: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-4.12 2.5 2.5 0 0 1 0-4.88A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-4.12 2.5 2.5 0 0 0 0-4.88A2.5 2.5 0 0 0 14.5 2z" />
    </svg>
  ),
  verify: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 11 2 2 4-4" />
    </svg>
  ),
  fix: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  time: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

const PRODUCTS_MAP: Record<string, ProductItem[]> = {
  comms: [
    { id: 'link', name: 'Qor8 Link', color: 'var(--color-brand-blue)', icon: PRODUCT_ICONS.link, desc: "Secure developer chat and encrypted file sharing channels." },
    { id: 'time', name: 'Qor8 Time', color: 'var(--color-brand-blue)', icon: PRODUCT_ICONS.time, desc: "Track project hours, logs, and timesheets automatically." }
  ],
  operations: [
    { id: 'hr', name: 'Qor8 HR', color: 'var(--color-brand-purple)', icon: PRODUCT_ICONS.hr, desc: "Manage workforce directories, schedules, and shifts." },
    { id: 'verify', name: 'Qor8 Verify', color: 'var(--color-brand-teal)', icon: PRODUCT_ICONS.verify, desc: "Automate customer KYC checkouts and ID document checks." },
    { id: 'mind', name: 'Qor8 Mind', color: 'var(--color-brand-purple)', icon: PRODUCT_ICONS.mind, desc: "Workflow mental checkups and cognitive team training." }
  ],
  assets: [
    { id: 'prop', name: 'Qor8 Prop', color: 'var(--color-brand-green)', icon: PRODUCT_ICONS.prop, desc: "Track facilities inspections and contractor schedules." },
    { id: 'care', name: 'Qor8 Care', color: 'var(--color-brand-green)', icon: PRODUCT_ICONS.care, desc: "Log office health checkups and manage desk reservations." },
    { id: 'fix', name: 'Qor8 Fix', color: 'var(--color-brand-orange)', icon: PRODUCT_ICONS.fix, desc: "Automate IT tickets and track maintenance reports." }
  ]
};

export const SpeakingAvatarWebGL: React.FC<SpeakingAvatarWebGLProps> = ({ activeTabId }) => {
  const [volume, setVolume] = useState(0);
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);
  const [triggerReset, setTriggerReset] = useState(0);

  const categoryProducts = PRODUCTS_MAP[activeTabId] || [];
  const transcriptRef = useRef<HTMLParagraphElement>(null);

  // Auto-select first product when activeTabId updates
  useEffect(() => {
    if (categoryProducts.length > 0) {
      setActiveProduct(categoryProducts[0]);
      setTriggerReset(prev => prev + 1);
    } else {
      setActiveProduct(null);
    }
  }, [activeTabId]);

  // Procedural speaking amplitude simulation (syllables + speech pauses)
  useEffect(() => {
    if (activeTabId === 'all' || !activeProduct) {
      setVolume(0);
      return;
    }

    let frameId: number;
    let currentVol = 0;
    const updateVolume = () => {
      const t = (Date.now() * 0.003) + triggerReset * 100;
      let targetVol = Math.sin(t) * 0.6 + Math.sin(t * 2.2) * 0.3 + Math.sin(t * 5.4) * 0.1;
      targetVol = Math.max(0.0, targetVol);
      
      const syllable = Math.sin(t * 6.0) * 0.5 + 0.5;
      targetVol = targetVol * syllable;

      currentVol = currentVol + (targetVol - currentVol) * 0.12;
      setVolume(currentVol);
      frameId = requestAnimationFrame(updateVolume);
    };

    frameId = requestAnimationFrame(updateVolume);
    return () => cancelAnimationFrame(frameId);
  }, [activeTabId, activeProduct, triggerReset]);

  // Typewriter engine state machine (erases from the right first, then types forward)
  const [typewrittenText, setTypewrittenText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [pendingText, setPendingText] = useState("");

  useEffect(() => {
    if (activeProduct) {
      if (typewrittenText !== "" && typewrittenText !== activeProduct.desc) {
        setIsDeleting(true);
        setPendingText(activeProduct.desc);
      } else {
        setPendingText(activeProduct.desc);
        setIsDeleting(false);
      }
    }
  }, [activeProduct]);

  useEffect(() => {
    let timer: any;

    const tick = () => {
      if (isDeleting) {
        // Word-by-word backspace eraser engine
        setTypewrittenText((prev) => {
          if (!prev) {
            setIsDeleting(false);
            return "";
          }
          const words = prev.trim().split(/\s+/);
          if (words.length <= 1 || (words.length === 2 && words[0] === "")) {
            setIsDeleting(false);
            return "";
          }
          return words.slice(0, -1).join(" ");
        });
      } else {
        // YouTube-style word-by-word transcription typewriter
        if (typewrittenText !== pendingText) {
          setTypewrittenText((prev) => {
            const targetWords = pendingText.trim().split(/\s+/);
            if (!prev) {
              return targetWords[0] || "";
            }
            const currentWords = prev.trim().split(/\s+/);
            if (currentWords.length < targetWords.length) {
              const nextWord = targetWords[currentWords.length];
              return prev + " " + nextWord;
            }
            return pendingText;
          });
        }
      }
    };

    const speed = isDeleting ? 60 : 260;
    timer = setInterval(tick, speed);

    return () => clearInterval(timer);
  }, [typewrittenText, pendingText, isDeleting]);

  // Scroll ticker: force scrollLeft to the maximum value to slide older text leftward
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollLeft = transcriptRef.current.scrollWidth;
    }
  }, [typewrittenText]);

  return (
    <div className="professional-avatar-container">
      {/* Siri-style pulse wave border surrounding the avatar image */}
      <div className="avatar-frame">
        <div 
          className="avatar-halo-glow" 
          style={{ 
            transform: `scale(${1 + volume * 0.18})`, 
            opacity: 0.15 + volume * 0.3 
          }} 
        />
        <div 
          className="avatar-halo-pulse" 
          style={{ 
            transform: `scale(${1 + volume * 0.35})`, 
            opacity: volume > 0.1 ? 0.08 : 0 
          }} 
        />
        <img src={avatarImg} alt="AI Assistant Avatar" className="avatar-photo" />
      </div>

      {/* Siri Waveform visualizer */}
      <div className="siri-wave-wrapper" style={{ '--volume': volume } as React.CSSProperties}>
        <div className="siri-wave-bar wave-1" />
        <div className="siri-wave-bar wave-2" />
        <div className="siri-wave-bar wave-3" />
        <div className="siri-wave-bar wave-4" />
        <div className="siri-wave-bar wave-5" />
      </div>

      {/* Category products selector buttons row */}
      {categoryProducts.length > 0 && (
        <div className="avatar-product-selector">
          {categoryProducts.map(product => {
            const isSelected = activeProduct?.id === product.id;
            return (
              <button 
                key={product.id}
                className={`avatar-product-btn ${isSelected ? 'selected' : ''}`}
                style={{ '--accent-color': product.color } as React.CSSProperties}
                onClick={() => {
                  setActiveProduct(product);
                  setTriggerReset(prev => prev + 1);
                }}
              >
                <div className="product-btn-icon">
                  {product.icon}
                </div>
                <span className="product-btn-label">{product.name.replace('Qor8 ', '')}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Synced transcription clean single-line text with ticker scroll */}
      <p ref={transcriptRef} className="avatar-transcribe-text">
        {typewrittenText}
        {(volume > 0.05 || isDeleting) && <span className="transcribe-cursor" />}
      </p>
    </div>
  );
};
export default SpeakingAvatarWebGL;
