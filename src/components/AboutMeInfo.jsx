import React from 'react'
import { useTheme } from '../hooks/useTheme'
import { useInView } from '../hooks/useView';

export function AboutMeInfo() {
    const {t} = useTheme();
    const [ref, vis] = useInView();
    
  return (
    <div style={{ flex: "1 1 340px", animation: vis ? "fadeUp 0.6s cubic-bezier(.22,1,.36,1) both" : "none" }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: t.codeComment }}>
            {"// about.sol"}
        </span>
        <h2 style={{ fontSize: 38, fontWeight: 800, letterSpacing: -1, marginTop: 8, fontFamily: "'Syne', sans-serif" }}>
            About Me
        </h2>
        <p style={{ color: t.textAccent, fontSize: 15, lineHeight: 1.8, marginTop: 18 }}>
            I started in frontend — React components, design systems, performance
            optimization. After three years building UIs, I went deeper: into 
            the protocols, the contracts, the attack vectors. Now I sit at the
            intersection: I can read a Solidity audit report <em>and</em> ship 
            the dashboard that visualizes its findings.
        </p>
        <p style={{ color: t.textAccent, fontSize: 15, lineHeight: 1.8, marginTop: 12 }}>
            My focus is Web3 security tooling — making it easier for developers 
            to understand, test, and defend DeFi protocols. I write about it, 
            build open-source tools for it, and consult on it.
        </p>
    </div>
  )
}
