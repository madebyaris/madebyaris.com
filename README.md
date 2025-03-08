# 🚀 Made by Aris - Professional Portfolio & Services

A modern, high-performance portfolio and services website built with Next.js 15 and the App Router. This website showcases professional skills, services, and projects with a focus on web development expertise in Next.js, PHP, and WordPress.

![Made by Aris](https://madebyaris.com/og-image.png)

## ✨ Key Features

### 🎨 Modern Design & User Experience
- Responsive design optimized for all devices
- Dark/Light mode with system preference detection
- Smooth page transitions and animations
- Accessible UI components with keyboard navigation

### 🌐 Service Pages
- **Next.js Development Services**
  - Next.js SEO Optimization
  - Vercel Deployment
  - Agency Services (Indonesia)
  - Next.js Indonesia Localization
- **PHP Development Services**
  - Custom Applications
  - API Development
  - Database Solutions
  - Modernization
- **WordPress Services**
  - Theme Development
  - Plugin Development
  - Headless Development
  - Optimization

### ⚡ Performance Optimizations
- Next.js 15 with App Router and Turbopack
- Static Site Generation with revalidation
- Image optimization with next/image
- Bundle size optimization
- CSS optimization with Tailwind

### 🔍 SEO Features
- Structured data for rich search results
- Optimized metadata for each page
- OpenGraph images for social sharing
- Sitemap generation
- Robots.txt configuration

### 🌍 Internationalization
- Multi-language support (English and Indonesian)
- Localized content for Indonesian market
- SEO optimization for local search

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email**: [Resend](https://resend.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) + [Speed Insights](https://vercel.com/docs/speed-insights)
- **Deployment**: [Vercel](https://vercel.com/)

## 📋 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v20+
- [pnpm](https://pnpm.io/) v9.15.3+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/madebyaris/madebyaris.com.git
   cd madebyaris.com
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file based on `.env.example`:
   ```
   # WordPress API
   NEXT_PUBLIC_WP_API_URL="your-wordpress-api-url"
   
   # Email (Resend)
   RESEND_API_KEY="your-resend-api-key"
   
   # Revalidation
   REVALIDATION_SECRET="your-secret-token"
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
| `pnpm start:standalone` | Start standalone server (for production with `output: standalone`) |
| `pnpm lint` | Run ESLint |
| `pnpm analyze` | Analyze bundle size |

## 🏗️ Project Structure

```
madebyaris.com/
├── app/                  # App Router pages and layouts
│   ├── about/            # About page
│   ├── api/              # API routes
│   ├── blog/             # Blog section
│   ├── contact/          # Contact page
│   ├── privacy-policy/   # Privacy policy page
│   ├── projects/         # Projects showcase
│   ├── services/         # Service pages
│   │   ├── nextjs-development/  # Next.js services
│   │   ├── php-development/     # PHP services
│   │   └── wordpress/           # WordPress services
│   ├── terms-of-service/ # Terms of service page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
├── lib/                  # Utilities and API clients
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## 🔄 Content Revalidation

This project uses Next.js 15's revalidation features to keep content fresh while maintaining high performance:

### Static Generation with Revalidation

Pages are statically generated at build time and automatically revalidated after a specified time period. This approach provides:

- Fast initial page loads
- SEO benefits of static content
- Automatic content updates without full rebuilds

### On-Demand Revalidation

The `/api/revalidate` endpoint allows for on-demand revalidation of specific content when triggered by webhooks or other events.

Example usage:
```bash
curl -X POST "https://madebyaris.com/api/revalidate?secret=your-secret-token&tag=blog-posts"
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

The easiest way to deploy this website is using [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Set the required environment variables
4. Deploy

### Standalone Deployment

This project uses Next.js's `output: standalone` configuration for optimized production deployments:

1. Build the application:
   ```bash
   pnpm build
   ```

2. Run the standalone server:
   ```bash
   pnpm start:standalone
   ```

### Docker Deployment

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install -g pnpm && pnpm install && pnpm build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

Aris Setiawan - [arissetia.m@gmail.com](mailto:arissetia.m@gmail.com)

Project Link: [https://github.com/madebyaris/madebyaris.com](https://github.com/madebyaris/madebyaris.com)

---

Built with ❤️ by [Aris Setiawan](https://madebyaris.com)
