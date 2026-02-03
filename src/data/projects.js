export const projects = [
  {
    title: "DeFi Flash Loan Guard",
    desc: `A real-time monitoring system that detects and flags suspicious 
          flash loan patterns across major DeFi protocols. Built with event-stream
          processing and a custom alert engine.`,
    tags: ["Solidity", "Node.js", "Web3.js", "Security"],
    highlight: true,
  },
  {
    title: "TWAP Oracle Toolkit",
    desc: `Developer tooling for consuming and validating Uniswap V2/V3 TWAP 
          oracles. Includes manipulation-cost calculators, window-size advisors, 
          and a live dashboard.`,
    tags: ["React", "Solidity", "Express.js", "DeFi"],
    highlight: true,
  },
  {
    title: "Smart Contract Audit CLI",
    desc: `A CLI tool that runs static analysis on Solidity contracts, 
          flags common vulnerability patterns (reentrancy, access control, 
          oracle manipulation), and outputs structured reports.`,
    tags: ["Node.js", "Solidity", "Security"],
    highlight: false,
  },
];