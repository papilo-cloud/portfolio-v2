import React from 'react'
import { useTheme } from '../../hooks/useTheme';

export function Explanation({sec}) {
    const { t } = useTheme();
    
  return (
    <div style={{ padding: "16px 20px", display: "flex", gap: 12, alignItems: "flex-start" }}>
        <span style={{ color: t.codeFn, fontSize: 16, marginTop: 2 }}>💡</span>
        <p style={{ fontSize: 14, color: t.textAccent, lineHeight: 1.7, 
            fontFamily: "'Syne', sans-serif", margin: 0 }}>
            {sec.explain}
        </p>
    </div>
  )
}
