import { useState } from "react";
import { useInView } from "../../hooks/useView";
import { useTheme } from "../../hooks/useTheme";
import ContactForm from "./ContactForm";
import { ContactConfirmed } from "./ContactConfirmed";

export function Contact() {
  const { t } = useTheme();
  const [ref, vis] = useInView();
  const [sent, setSent] = useState(false);


  const handleResend = () => {
      setSent(false);
      setEmail("");
      setMsg("");
  }

  return (
    <section 
        ref={ref} 
        id="contact" 
        style={{ padding: "110px 24px 100px", maxWidth: 640, margin: "0 auto" }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: t.codeComment }}>
            {"// contact.send()"}
        </span>
        <h2 style={{ 
                fontSize: 36, fontWeight: 800, letterSpacing: -1, marginTop: 6, 
                fontFamily: "'Syne', sans-serif", 
                animation: vis ? "fadeUp 0.6s both" : "none" 
            }}>
            Get in Touch
        </h2>
        <p style={{ color: t.textAccent, fontSize: 15, marginTop: 10, lineHeight: 1.7 }}>
            Open to security consulting, audit work, or interesting Web3 projects. Drop a line.
        </p>

      {!sent ? (
          <ContactForm onSent={setSent} />
      ) : (
          <ContactConfirmed handleResend={handleResend} />
        )}
    </section>
  );
}