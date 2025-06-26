// Critical CSS utility for performance optimization
// This helps inline critical CSS and defer non-critical CSS

export const criticalCSS = `
/* Critical CSS - Above the fold styles */

/* Reset and base styles */
html, body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

/* Layout basics */
.min-h-screen { min-height: 100vh; }
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.relative { position: relative; }
.absolute { position: absolute; }
.w-full { width: 100%; }
.h-full { height: 100%; }
.max-w-6xl { max-width: 72rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.py-8 { padding-top: 2rem; padding-bottom: 2rem; }

/* Grid system for hero */
.grid { display: grid; }
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.gap-6 { gap: 1.5rem; }

/* Typography */
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
.font-bold { font-weight: 700; }
.text-zinc-900 { color: rgb(24, 24, 27); }
.text-zinc-700 { color: rgb(63, 63, 70); }

/* Buttons */
.rounded-full { border-radius: 9999px; }
.bg-black { background-color: rgb(0, 0, 0); }
.text-white { color: rgb(255, 255, 255); }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }

/* Transitions */
.transition-transform { transition-property: transform; }
.hover\\:scale-105:hover { transform: scale(1.05); }

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .dark\\:text-white { color: rgb(255, 255, 255); }
  .dark\\:text-zinc-300 { color: rgb(212, 212, 216); }
  .dark\\:bg-white { background-color: rgb(255, 255, 255); }
  .dark\\:text-black { color: rgb(0, 0, 0); }
}

/* Responsive design */
@media (min-width: 768px) {
  .md\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  .md\\:col-span-3 { grid-column: span 3 / span 3; }
  .md\\:col-span-2 { grid-column: span 2 / span 2; }
  .md\\:gap-8 { gap: 2rem; }
  .md\\:py-12 { padding-top: 3rem; padding-bottom: 3rem; }
  .md\\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
  .md\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
  .md\\:py-4 { padding-top: 1rem; padding-bottom: 1rem; }
}

@media (min-width: 1024px) {
  .lg\\:text-5xl { font-size: 3rem; line-height: 1; }
}

/* Loading states */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

/* Image optimization */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Focus styles for accessibility */
*:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
`

// Function to inline critical CSS
export function inlineCriticalCSS(): string {
  return `<style id="critical-css">${criticalCSS.replace(/\s+/g, ' ').trim()}</style>`
}

// Function to defer non-critical CSS
export function deferNonCriticalCSS(): string {
  return `
<script>
  // Defer non-critical CSS loading
  (function() {
    function loadCSS(href, media) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = media || 'all';
      document.head.appendChild(link);
    }
    
    // Load non-critical CSS after page load
    window.addEventListener('load', function() {
      // These will be loaded by Next.js automatically, this is just for demonstration
      // loadCSS('/_next/static/css/non-critical.css');
    });
  })();
</script>
  `
}

// Media query optimization for critical CSS
export const mediaQueries = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
  touch: '(hover: none)',
  mouse: '(hover: hover)',
  motionReduce: '(prefers-reduced-motion: reduce)',
  darkMode: '(prefers-color-scheme: dark)',
  lightMode: '(prefers-color-scheme: light)',
}

// Critical above-the-fold component styles
export const criticalComponents = {
  header: `
    .header {
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  `,
  hero: `
    .hero {
      min-height: calc(100vh - 5rem);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
  navigation: `
    .nav {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    .nav-link {
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease;
    }
    .nav-link:hover {
      color: #3b82f6;
    }
  `
}

// Function to generate critical CSS based on route
export function getCriticalCSSForRoute(route: string): string {
  const baseCritical = criticalCSS
  
  switch (route) {
    case '/':
      return baseCritical + criticalComponents.header + criticalComponents.hero
    case '/about':
      return baseCritical + criticalComponents.header
    case '/contact':
      return baseCritical + criticalComponents.header
    default:
      return baseCritical + criticalComponents.header
  }
} 