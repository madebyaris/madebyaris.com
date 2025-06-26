# MadeByAris.com Design System
**Version 2.0.0** | Professional Portfolio & Blog Platform

---

## 🎯 Design System Overview

This design system captures the sophisticated, modern aesthetic of madebyaris.com - a senior full-stack developer's portfolio showcasing enterprise-level web development expertise. Built on Next.js 15, React 19, TypeScript, and Tailwind CSS with Shadcn/UI components.

### Core Design Philosophy
- **Professional Excellence**: Clean, sophisticated design reflecting senior-level expertise
- **Performance-First**: Optimized for Core Web Vitals and accessibility
- **Content-Focused**: Blog and case study content takes center stage
- **Modern Aesthetics**: Contemporary design with subtle animations and glassmorphism
- **Developer Experience**: Consistent patterns for rapid development

---

## 🎨 Color System

### Design Tokens (HSL-Based)
Our color system uses HSL values for maximum flexibility and dark mode compatibility.

```css
/* Light Mode Variables */
:root {
  --background: 0 0% 100%;           /* Pure white */
  --foreground: 0 0% 3.9%;           /* Near black */
  --card: 0 0% 100%;                 /* White cards */
  --card-foreground: 0 0% 3.9%;      /* Dark text on cards */
  --popover: 0 0% 100%;              /* White popovers */
  --popover-foreground: 0 0% 3.9%;   /* Dark text in popovers */
  --primary: 0 0% 9%;                /* Dark primary */
  --primary-foreground: 0 0% 98%;    /* Light text on primary */
  --secondary: 0 0% 96.1%;           /* Light gray */
  --secondary-foreground: 0 0% 9%;   /* Dark text on secondary */
  --muted: 0 0% 96.1%;               /* Muted background */
  --muted-foreground: 0 0% 45.1%;    /* Muted text */
  --accent: 0 0% 96.1%;              /* Accent background */
  --accent-foreground: 0 0% 9%;      /* Dark text on accent */
  --destructive: 0 84.2% 60.2%;      /* Red for errors */
  --destructive-foreground: 0 0% 98%; /* Light text on destructive */
  --border: 0 0% 89.8%;              /* Light borders */
  --input: 0 0% 89.8%;               /* Input borders */
  --ring: 0 0% 3.9%;                 /* Focus rings */
  --radius: 0.5rem;                  /* Border radius */
}

/* Dark Mode Variables */
.dark {
  --background: 0 0% 3.9%;           /* Dark background */
  --foreground: 0 0% 98%;            /* Light text */
  --card: 0 0% 3.9%;                 /* Dark cards */
  --card-foreground: 0 0% 98%;       /* Light text on cards */
  --popover: 0 0% 3.9%;              /* Dark popovers */
  --popover-foreground: 0 0% 98%;    /* Light text in popovers */
  --primary: 0 0% 98%;               /* Light primary */
  --primary-foreground: 0 0% 9%;     /* Dark text on primary */
  --secondary: 0 0% 14.9%;           /* Dark gray */
  --secondary-foreground: 0 0% 98%;  /* Light text on secondary */
  --muted: 0 0% 14.9%;               /* Dark muted */
  --muted-foreground: 0 0% 63.9%;    /* Muted text */
  --accent: 0 0% 14.9%;              /* Dark accent */
  --accent-foreground: 0 0% 98%;     /* Light text on accent */
  --destructive: 0 62.8% 30.6%;      /* Darker red */
  --destructive-foreground: 0 0% 98%; /* Light text on destructive */
  --border: 0 0% 14.9%;              /* Dark borders */
  --input: 0 0% 14.9%;               /* Dark input borders */
  --ring: 0 0% 83.1%;                /* Light focus rings */
}
```

### Semantic Color Usage
- **Primary**: Brand identity, CTAs, active states, links
- **Secondary**: Supporting elements, less prominent actions
- **Muted**: Subtle backgrounds, disabled states, placeholders
- **Accent**: Highlights, badges, notifications
- **Destructive**: Errors, warnings, deletion actions

### Gradient Palette
```css
/* Background Gradients */
.gradient-light {
  background: radial-gradient(100% 50% at 50% 0%, rgba(0,163,255,0.13) 0, rgba(0,163,255,0) 50%, rgba(0,163,255,0) 100%);
}

.gradient-dark {
  background: radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0));
}

/* Decorative Gradients */
.gradient-blue {
  background: radial-gradient(circle, rgba(0,163,255,0.1) 0%, transparent 60%);
}

.gradient-purple {
  background: radial-gradient(circle, rgba(120,119,198,0.1) 0%, transparent 60%);
}

.gradient-text {
  background: linear-gradient(to right, #09090b, #52525b);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-text-dark {
  background: linear-gradient(to right, #fafafa, #a1a1aa);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 📝 Typography System

### Font Stack
```css
/* Primary Sans Serif */
font-family: 'Plus_Jakarta_Sans', 'var(--font-jakarta)', 
             -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Monospace (Code) */
font-family: 'var(--font-geist-mono)', 
             'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;

/* System Fallback */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
             'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
             'Helvetica Neue', sans-serif;
```

### Type Scale (Tailwind CSS Classes)
```css
/* Headings */
.text-5xl    /* 3rem (48px) - Hero titles */
.text-4xl    /* 2.25rem (36px) - Page titles */
.text-3xl    /* 1.875rem (30px) - Section headings */
.text-2xl    /* 1.5rem (24px) - Card titles */
.text-xl     /* 1.25rem (20px) - Subheadings */
.text-lg     /* 1.125rem (18px) - Large body */

/* Body Text */
.text-base   /* 1rem (16px) - Default body */
.text-sm     /* 0.875rem (14px) - Small text */
.text-xs     /* 0.75rem (12px) - Captions, labels */

/* Line Heights */
.leading-tight    /* 1.25 - Headlines */
.leading-normal   /* 1.5 - Body text */
.leading-relaxed  /* 1.75 - Long-form content */

/* Font Weights */
.font-light      /* 300 */
.font-normal     /* 400 */
.font-medium     /* 500 */
.font-semibold   /* 600 */
.font-bold       /* 700 */
.font-extrabold  /* 800 */
```

### Typography Hierarchy
```tsx
// Hero Title
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">

// Page Title  
<h1 className="text-3xl md:text-4xl font-bold tracking-tight">

// Section Heading
<h2 className="text-2xl md:text-3xl font-bold">

// Card Title
<h3 className="text-xl md:text-2xl font-semibold">

// Body Text
<p className="text-base md:text-lg text-muted-foreground leading-relaxed">

// Small Text
<span className="text-sm text-muted-foreground">
```

### Blog Content Typography
```css
/* Prose Styling for Blog Posts */
.prose {
  max-width: 100%;
  font-size: 1.125rem;
  line-height: 1.8;
  color: hsl(var(--foreground));
}

.prose h1 { font-size: 2.25rem; margin-top: 2.5rem; margin-bottom: 1rem; }
.prose h2 { font-size: 1.875rem; margin-top: 2.5rem; margin-bottom: 1rem; }
.prose h3 { font-size: 1.5rem; margin-top: 2rem; margin-bottom: 0.75rem; }

.prose p { margin-bottom: 1.5rem; }
.prose strong { font-weight: 700; }
.prose em { font-style: italic; }

.prose blockquote {
  border-left: 4px solid hsl(var(--primary));
  padding-left: 1.5rem;
  background-color: hsl(var(--muted), 0.3);
  border-radius: 0 0.5rem 0.5rem 0;
}
```

---

## 📏 Spacing System

### Spacing Scale (Tailwind)
Based on 0.25rem (4px) increments:

```css
/* Padding & Margins */
.p-1    /* 0.25rem (4px) */
.p-2    /* 0.5rem (8px) */
.p-3    /* 0.75rem (12px) */
.p-4    /* 1rem (16px) */
.p-6    /* 1.5rem (24px) */
.p-8    /* 2rem (32px) */
.p-12   /* 3rem (48px) */
.p-16   /* 4rem (64px) */
.p-20   /* 5rem (80px) */
.p-24   /* 6rem (96px) */

/* Section Spacing */
.py-16  /* Top/bottom: 4rem (64px) - Standard section */
.py-20  /* Top/bottom: 5rem (80px) - Large section */
.py-24  /* Top/bottom: 6rem (96px) - Hero sections */

/* Component Spacing */
.gap-4  /* 1rem (16px) - Grid gaps */
.gap-6  /* 1.5rem (24px) - Card spacing */
.gap-8  /* 2rem (32px) - Large grids */
```

### Layout Containers
```tsx
// Page Container
<div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

// Content Container  
<div className="max-w-4xl mx-auto">

// Narrow Content (Blog)
<div className="max-w-3xl mx-auto">

// Wide Content (Portfolio)
<div className="max-w-7xl mx-auto">
```

---

## 🧩 Component System

### Button Variants
```tsx
// Primary Button
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Primary Action
</Button>

// Secondary Button  
<Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
  Secondary Action
</Button>

// Ghost Button
<Button variant="ghost" className="hover:bg-accent hover:text-accent-foreground">
  Subtle Action
</Button>

// Link Button
<Button variant="link" className="text-primary hover:underline">
  Link Action
</Button>

// Call-to-Action Button
<Button className="bg-black dark:bg-white text-white dark:text-black rounded-full px-6 py-3 hover:scale-105 transition-transform">
  Get Started
</Button>
```

### Card Patterns
```tsx
// Standard Card
<Card className="p-6 md:p-8 shadow-lg hover:shadow-xl transition-all border border-border/50">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>

// Glassmorphism Card
<Card className="bg-white/30 dark:bg-zinc-800/30 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-700/50">

// Blog Card
<Card className="blog-card overflow-hidden hover:border-primary/30 transition-all">
  <div className="aspect-[16/9] overflow-hidden">
    <Image className="object-cover hover:scale-105 transition-transform" />
  </div>
  <CardContent className="p-6">
    <h3 className="text-xl font-semibold mb-3">Post Title</h3>
    <p className="text-muted-foreground mb-4">Excerpt...</p>
    <div className="flex items-center text-sm text-muted-foreground">
      <time>Date</time>
    </div>
  </CardContent>
</Card>
```

### Badge/Tag System
```tsx
// Primary Badge
<span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
  Badge Text
</span>

// Category Tag
<span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors">
  Category
</span>

// Status Badge
<span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded text-xs font-medium">
  Status
</span>
```

### Navigation Patterns
```tsx
// Header Navigation
<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="flex h-14 items-center justify-center">
    <div className="flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
      {/* Navigation content */}
    </div>
  </div>
</header>

// Footer Navigation
<footer className="border-t bg-background">
  <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {/* Footer content */}
  </div>
</footer>
```

---

## 🎭 Visual Effects

### Glassmorphism
```css
/* Glass Effect */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-dark {
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Hover Effects
```css
/* Card Hover */
.hover-lift {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hover-lift:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px -5px rgba(0, 0, 0, 0.1);
}

/* Image Hover */
.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}

/* Button Hover */
.hover-glow {
  transition: all 0.2s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(var(--primary), 0.3);
}
```

### Loading States
```css
/* Shimmer Effect */
.shimmer {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Pulse Loading */
.pulse-loading {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}
```

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
/* Default: 320px+ (mobile) */
sm: '640px',   /* Small tablets */
md: '768px',   /* Tablets */
lg: '1024px',  /* Laptops */
xl: '1280px',  /* Desktops */
2xl: '1536px'  /* Large screens */
```

### Responsive Patterns
```tsx
// Responsive Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Responsive Text
<h1 className="text-3xl md:text-4xl lg:text-5xl">

// Responsive Spacing
<section className="py-12 md:py-16 lg:py-20">

// Responsive Container
<div className="px-4 sm:px-6 lg:px-8">

// Hide/Show Elements
<div className="hidden md:block">Desktop Only</div>
<div className="md:hidden">Mobile Only</div>
```

### Mobile Optimizations
```css
/* Touch Targets */
.touch-target {
  min-height: 44px;
  min-width: 44px;
}

/* Safe Areas */
.safe-area {
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

/* Viewport Units */
.full-height {
  min-height: 100vh;
  min-height: 100dvh; /* Dynamic viewport */
}
```

---

## ♿ Accessibility Standards

### Focus Management
```css
/* Focus Indicators */
:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
  border-radius: 0.25rem;
}

/* Skip Links */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  padding: 8px;
  z-index: 1000;
  text-decoration: none;
  border-radius: 4px;
}

.skip-link:focus {
  top: 6px;
}
```

### Color Contrast
- **Normal text**: 7:1 contrast ratio minimum
- **Large text**: 4.5:1 contrast ratio minimum
- **Interactive elements**: 3:1 contrast ratio minimum

### Semantic HTML
```tsx
// Proper heading hierarchy
<h1>Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection Title</h3>

// Landmarks
<main>Main content</main>
<nav aria-label="Primary navigation">Navigation</nav>
<aside>Sidebar content</aside>

// Lists
<ul role="list">
  <li>List item</li>
</ul>

// Images
<img src="..." alt="Descriptive text" />
<img src="..." alt="" role="presentation" /> // Decorative
```

---

## ⚡ Performance Patterns

### Image Optimization
```tsx
// Next.js Image Component
<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="rounded-lg"
  priority // For above-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>

// Responsive Images
<Image
  src="/image.jpg"
  alt="Description"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### Loading Strategies
```tsx
// Dynamic Imports
const LazyComponent = dynamic(() => import('./Component'), {
  loading: () => <LoadingSpinner />
});

// Suspense Boundaries
<Suspense fallback={<LoadingSkeleton />}>
  <AsyncComponent />
</Suspense>

// Content Visibility
<div className="cv-auto" style={{ containIntrinsicSize: '0 500px' }}>
  Long content
</div>
```

### Animation Performance
```css
/* GPU Acceleration */
.gpu-accelerated {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Will Change */
.will-change-transform {
  will-change: transform;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🛠️ Development Guidelines

### Component Architecture
```tsx
// Component Structure
interface ComponentProps {
  // Props definition
}

export function Component({ prop1, prop2, ...props }: ComponentProps) {
  // Hooks
  // Derived state
  // Event handlers
  
  return (
    <div className={cn("base-classes", className)} {...props}>
      {/* JSX */}
    </div>
  );
}

// Export with display name
Component.displayName = "Component";
```

### Styling Conventions
```tsx
// Class ordering: Layout → Spacing → Typography → Colors → Effects
<div className="flex items-center gap-4 p-6 text-lg font-medium text-foreground bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
```

### File Organization
```
components/
├── ui/                 # Base UI components
├── layout/            # Layout components  
├── feature/           # Feature-specific components
└── providers/         # Context providers

lib/
├── utils.ts          # Utility functions
├── types.ts          # Type definitions
└── constants.ts      # App constants
```

---

## 📋 Quality Checklist

Before shipping any component or page, verify:

### ✅ Design Consistency
- [ ] Uses design tokens (colors, spacing, typography)
- [ ] Follows component patterns
- [ ] Consistent with existing UI elements
- [ ] Proper visual hierarchy

### ✅ Accessibility  
- [ ] WCAG 2.1 AA compliant (minimum)
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Focus indicators visible
- [ ] Color contrast meets standards

### ✅ Responsive Design
- [ ] Mobile-first approach
- [ ] Works on all breakpoints (320px+)
- [ ] Touch-friendly interactions (44px min)
- [ ] Readable typography on all devices

### ✅ Performance
- [ ] Optimized images with proper sizing
- [ ] Minimal layout shifts
- [ ] Fast loading times
- [ ] Efficient animations

### ✅ Code Quality
- [ ] TypeScript types defined
- [ ] Props properly typed
- [ ] Error boundaries implemented
- [ ] Loading states handled

---

## 🚀 Implementation Examples

### Hero Section Pattern
```tsx
<section className="w-full min-h-[calc(100vh-5rem)] relative overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-zinc-100/50 via-blue-50/30 to-zinc-100/50 dark:from-zinc-900/50 dark:via-blue-900/10 dark:to-zinc-900/50" />
  </div>
  
  {/* Content */}
  <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-5rem)]">
    <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div className="text-center">
        <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          Badge Text
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Hero Title
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Hero description text
        </p>
      </div>
    </div>
  </div>
</section>
```

### Service Card Pattern
```tsx
<Card className="group relative h-full p-6 md:p-8 bg-white dark:bg-zinc-800/60 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-zinc-200/50 dark:border-zinc-700/50 overflow-hidden">
  {/* Decoration */}
  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 dark:bg-blue-900/20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
  
  {/* Icon */}
  <div className="relative mb-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl w-fit">
    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
  </div>
  
  {/* Content */}
  <h3 className="text-xl md:text-2xl font-bold mb-4">Service Title</h3>
  <p className="text-muted-foreground mb-6">Service description</p>
  
  {/* Features */}
  <ul className="space-y-2">
    <li className="flex items-center text-muted-foreground">
      <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
      Feature item
    </li>
  </ul>
</Card>
```

---

## 📚 Resources & References

### Design Inspiration
- Modern portfolio websites
- Professional service sites  
- Developer portfolios
- SaaS landing pages

### Technical References
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Shadcn/UI Components](https://ui.shadcn.com)
- [Radix UI Primitives](https://radix-ui.com)
- [Next.js Documentation](https://nextjs.org)

### Accessibility Guidelines
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Accessible Colors](https://accessible-colors.com)

---

**Last Updated**: December 2024  
**Version**: 2.0.0  
**Maintainer**: Development Team

This design system is a living document that evolves with the project. For questions or contributions, please refer to the project documentation or contact the development team. 