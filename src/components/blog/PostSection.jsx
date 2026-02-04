import React, { useState } from 'react'
import { CodeBlock } from './CodeBlock';
import { Explanation } from './Explanation';
import { useTheme } from '../../hooks/useTheme';

export function PostSection({post}) {
    const [activeSection, setActiveSection] = useState(null);
    const { t } = useTheme();
    
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px 100px' }}>
        <div style={{ fontSize: 11, color: t.codeComment, fontFamily: "'IBM Plex Mono', monospace", marginBottom: 16 }}>
          <span style={{ color: t.codeKeyword }}>export default function </span> 
           DeepDive() {"{ return ("}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {post.sections.map((sec) => {
            const open = activeSection === sec.id;
            return (
                <div key={sec.id} style={{ 
                    background: t.bgCard, 
                    borderRadius: 12, 
                    border: `1px solid ${open ? t.accent : t.border}`, 
                    overflow: 'hidden',
                    transition: 'border-color 0.2s'
                }}>
                    <div style={{ padding: "14px 20px", cursor: "pointer", 
                        display: "flex", justifyContent: "space-between", 
                        alignItems: "center" }}
                        onClick={() => setActiveSection(open ? null : sec.id)}
                    >
                    <span style={{ fontSize: 14, fontFamily: "'IBM Plex Mono', monospace", 
                        fontWeight: 500, color: open ? t.accent : t.textAccent }}>
                        {sec.label}
                    </span>
                    <span style={{ color: t.textMuted, fontSize: 16, transition: "transform 0.2s",
                        transform: open ? "rotate(90deg)" : "rotate(0deg)" }}>›</span>
                    </div>

                {open && (
                  <div style={{ borderTop: `1px solid ${t.border}` }}>
                    <CodeBlock sec={sec} />
                    <Explanation sec={sec} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ fontSize: 11, color: t.codeComment, fontFamily: "'IBM Plex Mono', monospace", marginTop: 16 }}>{")}; // end DeepDive"}</div>
      </div>
  )
}
