import React, { useState } from 'react'
import { useTheme } from '../../hooks/useTheme';
import { useInView } from '../../hooks/useView';
import emailjs from '@emailjs/browser';

export default function ContactForm({onSent}) {
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");
    const [sending, setSending] = useState(false);

    const { t } = useTheme();
    const [vis] = useInView();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !msg) {
            setError("Please fill in all fields.");
            return;
        }
        setSending(true);
        setError("");

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {   
                    from_email: email,
                    message: msg,
                    to_name: "Abdulrahman"
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            onSent(true);
        } catch (error) {
            console.error("Email sending error:", error);
            setError("Failed to send message.");
        } finally {
            setSending(false);
        }
    }
    

    const inputStyle = {
        width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${t.border}`,
        background: t.bgCode, color: t.text, fontSize: 14, fontFamily: "'Syne', sans-serif",
        outline: "none", transition: "border-color 0.2s",
    };

  return (
    <div style={{ marginTop: 30, display: "flex", flexDirection: "column", gap: 14, 
                animation: vis ? "fadeUp 0.6s 0.12s cubic-bezier(.22,1,.36,1) both" : "none" }}>
        <form onSubmit={handleSubmit}
            style={{
                display: "flex", flexDirection: "column", gap: 14, marginTop: 30,
                animation: vis ? "fadeUp 0.6s 0.12s cubic-bezier(.22,1,.36,1) both" : "none" 
            }}>
            <input
                type="email"
                placeholder="your@email.com" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = t.accent}
                onBlur={e => e.target.style.borderColor = t.border} 
                required />
            <textarea 
                placeholder="What's on your mind?" 
                value={msg} 
                onChange={e => setMsg(e.target.value)} 
                rows={4}
                style={{ ...inputStyle, resize: "vertical", fontFamily: "'Syne', sans-serif" }}
                onFocus={e => e.target.style.borderColor = t.accent}
                onBlur={e => e.target.style.borderColor = t.border} 
                required />
            {error && (
                <span style={{ color: "red", fontSize: 13, fontFamily: "'IBM Plex Mono', monospace" }}>
                    {error}
                </span>
            )}
            <button 
                type='submit'
                disabled={sending} 
                style={{
                  padding: "12px 32px", borderRadius: 8, border: "none", 
                  background: sending ? t.textMuted : t.accent, 
                  color: "#fff", fontFamily: "'IBM Plex Mono', monospace", 
                  fontSize: 14, fontWeight: 600, cursor: "pointer",
                  transition: "opacity 0.2s, transform 0.15s", 
                  alignSelf: "flex-start",
                  opacity: sending ? 0.6 : 1,
                }} 
                onMouseEnter={e => 
                    {!sending && (e.currentTarget.style.opacity = "0.85"); 
                      e.currentTarget.style.transform = "translateY(-1px)"; 
                    }}
                onMouseLeave={e => 
                    {!sending && (e.currentTarget.style.opacity = "1");
                      e.currentTarget.style.transform = "translateY(0)"; 
                    }}>
                {sending ? "Sending..." : "Send Message →"}
            </button>
        </form>
            
        </div>
  )
}
