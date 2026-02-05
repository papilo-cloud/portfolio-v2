# Abdul's Web3 Developer Portfolio

A modern, production-ready portfolio website built with React, featuring dark/light themes, interactive blog deep-dives, and a clean terminal-inspired aesthetic.

---

## Features

### Design
- **Dual theme system** — Dark mode (IDE-inspired blacks) and light mode (warm editorial paper) with instant toggle
- **Terminal aesthetic** — Monospace code blocks, syntax highlighting, blinking cursor animations
- **Blog deep-dives** — Interactive expandable sections with code walkthroughs (modeled after technical documentation)
- **Smooth animations** — Scroll-triggered fade-ups, hover glows, and staggered reveals

### Technical
- **Single-page app** with React Router for blog post detail pages
- **Zero external UI libraries** — Pure CSS-in-JS with theme context
- **Responsive** — Mobile-first, works across all screen sizes
- **Performant** — Lazy loading, optimized animations, minimal bundle size
- **Accessible** — Semantic HTML, keyboard navigation support

### Sections
1. **Hero** — Animated headline with ambient gradient blobs
2. **About** — Bio + experience stats with hover effects
3. **Skills** — Categorized tech stack badges
4. **Projects** — Highlighted work with tags and descriptions
5. **Blog** — Technical deep-dives on DeFi, security, and Solidity internals
6. **Contact** — Simple form with confirmation state

---

## Quick Start

### Prerequisites
- **Node.js** v18 or higher ([download here](https://nodejs.org))
- **npm** (comes with Node.js)

Check your version:
```bash
node --version
npm --version
```

### Installation

**1. Clone or download this repo**
```bash
git clone https://github.com/papilo-cloud/portfolio-v2.git
cd portfolio-v2
```

**2. Install dependencies**
```bash
npm install
```

**3. Run the dev server**
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## Customization Guide

### 1. Update Personal Info

**Find and edit these sections:**

**In `Hero.jsx`:**
```jsx
<h1>
  Building <span style={{ color: t.accent }}>secure</span> DeFi
  applications.
</h1>
<p>
  Fullstack Web3 developer and security auditor...
</p>
```

**In `Stats.jsx`:**
```jsx
const stats = [
  { val: "3+", label: "Years Frontend" },
  { val: "1+", label: "Year Web3" },
  // ...
];
```

**In `skills.js`:**
```jsx
const skills = [
  { name: "React", icon: "⚛", cat: "Frontend" },
  { name: "Solidity", icon: "◆", cat: "Smart Contracts" },
  // Add/remove skills here
];
```

**In `projects.js`:**
```jsx
const projects = [
  {
    title: "Your Project Name",
    desc: "Brief description...",
    tags: ["React", "Solidity"],
    highlight: true,  // set to true for featured projects
  },
  // ...
];
```

**In `blogPosts.js`:**
```jsx
const blogPosts = [
  {
    slug: "post-url-slug",
    title: "Post Title",
    subtitle: "Subtitle...",
    date: "Jan 28, 2025",
    readTime: "18 min read",
    tags: ["DeFi", "Security"],
    sections: [
      {
        id: "section-1",
        label: "① Section Label",
        code: `// your code here`,
        explain: "Explanation text...",
      },
      // ...
    ],
  },
  // ...
];
```

### 2. Change Colors / Theme

**In `context/ThemeProvider.jsx`**, find the `themes` object:

```jsx
const themes = {
  dark: {
    bg: "#0d0e12",           // main background
    accent: "#818cf8",       // primary accent color (links, buttons)
    green: "#34d399",        // success / code highlights
    // ... modify any color here
  },
  light: {
    bg: "#f4f2ee",
    accent: "#4f46e5",
    // ...
  },
};
```

**Color meanings:**
- `bg` — main background
- `bgCard` — cards, panels
- `bgCode` — code blocks, terminal windows
- `accent` — primary interactive color (buttons, links, hovers)
- `green`, `amber`, `red` — semantic highlights

### 3. Change Fonts

The portfolio uses:
- **Syne** (display, headings) — geometric sans-serif with personality
- **IBM Plex Mono** (code, labels) — monospace for technical feel

To change them, edit the `@import` in the `<GlobalStyles>` component:

```jsx
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
      // ...
    `}</style>
  );
}
```

Then update `fontFamily` values throughout the components:
```jsx
fontFamily: "'Your Font', sans-serif"
```

### 4. Add New Blog Posts

**Step 1:** Add the post metadata to the `blogPosts` array in `App.jsx`:

```jsx
{
  slug: "my-new-post",  // used in URL: /blog/my-new-post
  title: "My New Post",
  subtitle: "A deep dive into...",
  date: "Feb 01, 2025",
  readTime: "12 min read",
  tags: ["React", "DeFi"],
  sections: [
    {
      id: "intro",
      label: "① Introduction",
      code: `// code example\nfunction example() {\n  return "hello";\n}`,
      explain: "This section explains...",
    },
    // add more sections as needed
  ],
}
```

---

## Common Issues

### Fonts not loading
Check your internet connection — fonts are loaded from Google Fonts CDN.

### Theme toggle not working
Make sure `<ThemeProvider>` wraps your entire app in `App.jsx` and `<Nav />` is rendered on all routes (either inside `<Routes>` or outside it).

### Blog post not found
Verify:
1. The `slug` in `blogPosts` matches the URL path
2. You exported `blogPosts` from `App.jsx`: `export { blogPosts };`
3. `BlogPost.jsx` imports it: `import { blogPosts } from './App';`

---

## Credits

**Design inspiration:**
- Terminal aesthetics from modern dev tools (VS Code, Warp)
- Technical documentation from Uniswap, Aave, and Compound

**Built by Abdul** — Web3 security engineer, DeFi enthusiast, and frontend developer.

---