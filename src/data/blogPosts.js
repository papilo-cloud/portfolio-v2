export const blogPosts = [
  {
    slug: "twap-oracle",
    title: "Uniswap V2 TWAP Oracle — Deep Dive",
    subtitle: "From first principles to source code to attack vectors",
    date: "Jan 28, 2025",
    readTime: "18 min read",
    tags: ["DeFi", "Security", "Uniswap"],
    sections: [
      {
        id: "problem",
        label: "① Why Spot Prices Break",
        code: `// BROKEN — do not use\nfunction getSpotPrice() external view returns (uint) {\n    (uint112 r0, uint112 r1, ) = pair.getReserves();\n    return r1 / r0; // flash loan can manipulate this\n}`,
        explain: "Any contract can change the reserve ratio in the same transaction it reads it. Flash loan attacks exploit this exact gap — borrow massive capital, move the price, trigger a victim contract, repay the loan. All in one tx.",
      },
      {
        id: "math",
        label: "② The TWAP Formula",
        code: `// TWAP = (P₁·T₁ + P₂·T₂ + … + Pₙ·Tₙ)\n//        ──────────────────────────────\n//          T₁ + T₂ + … + Tₙ\n//\n// Example: 4-min window\n//   100×60 + 105×60 + 98×60 + 110×60\n//   ─────────────────────────────── = $103.25\n//               240`,
        explain: "Price is weighted by how long it lasted — not by how extreme it was. A spike lasting 12 seconds in a 3600-second window carries 0.33% weight. Useless to an attacker.",
      },
      {
        id: "accumulator",
        label: "③ The Prefix Sum Trick",
        code: `// price0CumulativeLast grows forever:\n//   += oldPrice × timeElapsed\n//\n// To get TWAP for window [A, B]:\n//   (accumulator_B − accumulator_A)\n//   ───────────────────────────────\n//       (timestamp_B − timestamp_A)`,
        explain: "One ever-growing counter. Any time window is extracted by subtracting two snapshots — the same trick as prefix-sum subarray queries in O(1). The consumer contract takes the snapshots.",
      },
      {
        id: "update",
        label: "④ Inside _update()",
        code: `function _update(...) private {\n    uint32 timeElapsed = blockTimestamp\n                       - blockTimestampLast;\n    // accumulate the PREVIOUS price\n    price0CumulativeLast +=\n        encode(_reserve1).uqdiv(_reserve0)\n        * timeElapsed;\n    // then write new reserves\n    reserve0 = uint112(balance0);\n}`,
        explain: "The price recorded is always the previous price. You cannot retroactively change something already accumulated into the past. This single design choice is the backbone of manipulation resistance.",
      },
      {
        id: "overflow",
        label: "⑤ Overflow by Design",
        code: `// Snapshot A: accumulator = 2**256 − 50\n// Snapshot B: accumulator = 30  (wrapped)\n//\n// Contract computes:\n//   30 − (2**256 − 50)\n//   = (−(2**256 − 80)) mod 2**256\n//   = 80  ✓  correct difference\n//\n// Solidity ≥ 0.8: must use unchecked {}`,
        explain: "uint256 subtraction with modular arithmetic gives the correct difference regardless of how many times the accumulator has wrapped. Forgetting unchecked{} in Solidity ≥0.8 is the #1 porting bug.",
      },
    ],
  },
  {
    slug: "uq112x112",
    title: "UQ112x112 — Fixed Point Math in Solidity",
    subtitle: "How Uniswap stores fractional prices in integers",
    date: "Jan 15, 2025",
    readTime: "10 min read",
    tags: ["Solidity", "Math", "Uniswap"],
    sections: [
      {
        id: "why",
        label: "① Why Fixed Point?",
        code: `// Solidity has no float.\n// 7 / 2 = 3  (truncated)\n//\n// Fixed point: scale everything by 2**112\n// Now 7 becomes 7 × 2**112\n// 7 × 2**112 / 2 = 3.5 × 2**112  ✓`,
        explain: "Solidity's integer division truncates. Fixed-point encoding reserves half the bits for the fractional part, making ratios expressible without decimals.",
      },
      {
        id: "layout",
        label: "② Bit Layout",
        code: `// UQ112x112 lives in a uint224:\n//\n// [  112 bits: integer  |  112 bits: fraction  ]\n// ─────────────────────────────────────────────\n//              uint224 (224 bits)\n//\n// Q112 = 2**112  ← this IS 1.0\n// 5 × Q112       ← this IS 5.0`,
        explain: "112 + 112 = 224 bits. Leaves 32 bits free in a 256-bit slot for a timestamp. The entire number is symmetric — equal range above and below 1.0 — because prices can go both ways.",
      },
      {
        id: "encode",
        label: "③ encode() + uqdiv()",
        code: `// encode(y): shift an integer into fixed point\n//   encode(5) = 5 × 2**112\n//\n// uqdiv(x, y): divide, keep the scale\n//   (realX × 2**112) / y\n//   = (realX / y) × 2**112  ← still valid!\n//\n// encode(7).uqdiv(2) = 3.5 in UQ112x112`,
        explain: "The scaling factor 2**112 survives division untouched. This is why uqdiv can produce fractional results from integer division — the precision is already baked into x.",
      },
    ],
  },
  {
    slug: "flash-loans",
    title: "Flash Loans & Oracle Manipulation",
    subtitle: "How attacks work and how to defend against them",
    date: "Dec 30, 2024",
    readTime: "14 min read",
    tags: ["Security", "DeFi", "Attacks"],
    sections: [
      {
        id: "anatomy",
        label: "① Anatomy of an Attack",
        code: `// Single transaction:\n// 1. Flash borrow 10,000 ETH\n// 2. Dump into target pool → price crashes\n// 3. Victim contract reads spot price\n// 4. Exploit the mispriced collateral\n// 5. Repay flash loan\n// 6. Profit  💀`,
        explain: "Everything happens atomically. If step 5 fails, the whole transaction reverts. The attacker has zero risk and unlimited borrowed capital.",
      },
      {
        id: "defense",
        label: "② Defense Layers",
        code: `// Layer 1: TWAP oracles (time smoothing)\n// Layer 2: Circuit breakers (max deviation)\n// Layer 3: Multi-source aggregation\n// Layer 4: Delayed state reads\n//\n// Best practice: combine at least 2 layers.\n// TWAP alone is not enough for thin pools.`,
        explain: "No single defense is sufficient. TWAP handles single-block spikes. Circuit breakers catch sustained manipulation. Multi-source aggregation eliminates single points of failure.",
      },
      {
        id: "cost",
        label: "③ Making It Expensive",
        code: `// Cost to manipulate a $10M pool\n// over a 1-hour TWAP window:\n//\n//   ~300 blocks × (arb losses + fees)\n//   = $100k–$500k for ~5% deviation\n//\n// vs. profit from most exploits:\n//   usually < $50k\n//\n// → Attack becomes unprofitable  ✓`,
        explain: "The economics are the real defense. Sustained manipulation costs more than the exploit pays. This is why window length and pool liquidity are the two most critical parameters.",
      },
    ],
  },
];