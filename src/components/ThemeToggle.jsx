import React from 'react'

export function ThemeToggle({onClick}) {
  return (
    <button 
        onClick={onClick}
        style={{
                background: t.bgCard,
                border: `1px solid ${t.border}`,
                borderRadius: 20, width: 44, height: 24,
                cursor: "pointer", position: "relative",
                transition: "background 0.3s",
            }}>
            <div style={{
                position: "absolute",
                top: 2,
                left: mode === "dark" ? 2 : 22,
                width: 18, height: 18,
                borderRadius: "50%",
                background: mode === "dark" ? "#818cf8" : "#f59e0b",
                transition: "left 0.3s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
            }}>
                {mode === "dark" ? "🌙" : "☀️"}
            </div>
          </button>
  )
}
