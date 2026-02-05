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
            I'm a fullstack Web3 developer with three years building React applications and one year 
            specializing in DeFi security. I write smart contracts in Solidity, build the frontends 
            that interact with them, and audit both my own code and others' for vulnerabilities.
        </p>
        <p style={{ color: t.textAccent, fontSize: 15, lineHeight: 1.8, marginTop: 12 }}>
            My security focus emerged from building — after shipping contracts that handle real value, 
            you develop a paranoia for edge cases. Now I audit DeFi protocols, hunt for flash loan 
            attacks, oracle manipulation, and reentrancy bugs, and write about what I find.
        </p>
    </div>
  )
}
