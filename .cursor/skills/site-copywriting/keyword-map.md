# Keyword and CTA map

Each page has one primary keyword. Put it in the H1 (naturally), the meta title, the first answer-first paragraph, and one H2. Secondary keywords go in H2s, FAQ questions, and body copy. Sources: Google Search Console (90 days to 2026-09-24), RankMySEO tracked keywords, and the competitor keyword gap. Volumes and KD (keyword difficulty) for the SEO, SaaS, AI MVP, AI integration, and new WordPress pages come from Ubersuggest on 2026-10-14 (US for English, Indonesia for Bahasa Indonesia).

The CTA column is the `contactHref()` id from `lib/contact-services.ts`. Every Build page's primary button uses it.

| Page | Primary keyword | Secondary keywords | CTA id | Notes |
|---|---|---|---|---|
| `/` | hire Next.js developer | Next.js and AI developer, Aris Setiawan | nextjs | Brand query "aris setiawan" ranks at position 8.8 |
| `/services/nextjs-development` | hire a Next.js developer | Next.js development services, custom Next.js development, Next.js developer for hire | nextjs | GSC: "custom next js development riyadh" (17 impressions) |
| `/services/nextjs-development/nextjs-indonesia` | jasa pembuatan website Next.js | jasa Next.js, jasa Next.js developer Indonesia, Next.js adalah | nextjs | Bahasa Indonesia. Absorbs the redirected `/nextjs-development-indonesia` |
| `/services/nextjs-development/agency-indonesia` | Next.js agency Indonesia | agensi Next.js, Next.js agency | nextjs | Tracked at position 5; "agensi nextjs" at position 1.6. Solo specialist positioning |
| `/services/nextjs-development/vercel` | Vercel pricing for Next.js | Vercel hosting, deploy Next.js to Vercel, Vercel cost optimization | vercel | Gap: "vercel pricing" 720/mo KD 23, "vercel hosting" 590/mo KD 13 |
| `/services/nextjs-development/nextjs-seo` | Next.js SEO services | technical SEO for Next.js, Next.js App Router SEO, schema markup | seo | Proof: this site's schema, sitemap, and llms.txt |
| `/services/ai-development` | hire an AI developer | AI chatbot development, AI agent development | ai | Hub for the two spokes below. Links "AI integration services" to the spoke, the post as "how AI integration works" |
| `/services/ai-development/ai-mvp` | AI MVP development (260/mo, KD 16) | AI MVP development services (170, KD 14), build an AI MVP, AI startup MVP | ai-mvp | Proof: RankMySEO went from idea to hosted MVP. No week counts |
| `/services/ai-development/ai-integration` | AI integration services (590/mo, KD 28) | generative AI integration services (90, KD 20), add AI to an existing app, integrate ChatGPT into a website | ai | Owns the hiring intent. `/blog/ai-integration-services` is the explainer; re-angle that post to "how AI integration works" so they stop competing |
| `/services/saas-development` | SaaS development company (720/mo, KD 8) | SaaS development services (480, KD 20), custom SaaS development (140), SaaS development cost (90), SaaS MVP development (70) | saas | Angle: cheap to run (little CPU per request, scale from zero, cheap servers, frugal AI). No prices or cost figures. Proof: RankMySEO |
| `/services/saas-development/jasa-pembuatan-aplikasi-web` | jasa pembuatan aplikasi web (140/mo, KD 13) | jasa pembuatan aplikasi website (170), jasa pembuatan aplikasi berbasis web (50), jasa pembuatan aplikasi (880, broad) | saas | Bahasa Indonesia. Written fresh, so no hreflang pair |
| `/services/seo` | technical SEO services (2,400/mo, KD 37) | SEO audit services (1,900, KD 35), technical SEO audit services (480, KD 11), technical SEO consultant (320), freelance SEO consultant (480) | seo | SEO topical page: four offers (audit, research, fixes, monthly) plus a guides grid. Proof: RankMySEO, this site, and three unnamed client results (700K to 1.8M impressions per 28 days; 2K to 20K for a factory equipment brand; search reputation management). Never name clients |
| `/services/seo/jasa-seo` | jasa SEO (4,400/mo, KD 14) | jasa SEO website (720, KD 10), jasa SEO profesional (480), jasa SEO bulanan (390), jasa SEO Surabaya (320, KD 11), konsultan SEO (260), harga jasa SEO (70) | seo | Bahasa Indonesia. Skip "jasa SEO murah" (590, KD 40) as a target; one FAQ addresses it |
| `/services/vibe-code-friend` | Cursor mentoring | Cursor training for teams, Cursor AI for teams, AI coding workflow | cursor-mentoring | Level up door |
| `/services/vibe-code-friend/ai-ide-tutoring` | Cursor AI tutoring | how to use Cursor AI, Cursor AI tutorial, cara menggunakan Cursor AI | cursor-mentoring | |
| `/services/vibe-code-friend/code-fixing` | fix AI-generated code | vibe coding cleanup, code debugging service | code-fixing | No prices. "Quote after I see the code" |
| `/services/wordpress` | hire a WordPress developer (590/mo, KD 32) | WordPress developer for hire, WordPress development services (1,000, KD 40), headless WordPress development services | wordpress | No testimonials. Hub for eight spokes |
| `/services/wordpress/maintenance` | WordPress maintenance services (880/mo, KD 19) | WordPress support services (480), WordPress maintenance plan, WordPress malware removal service (210, KD 18) | wordpress-care | Malware removal is an H2 here, not its own page. Links `/blog/website-maintenance-cost` |
| `/services/wordpress/redesign` | WordPress website redesign services (880/mo, KD 35) | WordPress website redesign (90, KD 18), redesign without losing SEO | wordpress | |
| `/services/wordpress/migration` | WordPress migration service (260/mo, KD 24) | migrate WordPress to a new host, WordPress to Next.js migration | wordpress | |
| `/services/wordpress/woocommerce` | hire a WooCommerce developer (210/mo, KD 40) | WooCommerce developer (390, KD 49), WooCommerce development services, payment gateway integration | wordpress | |
| `/services/wordpress/jasa-wordpress` | jasa pembuatan website WordPress (210/mo, KD 17) | jasa perbaikan website (140, KD 8), jasa WordPress (70), jasa website WordPress (70), jasa maintenance WordPress | wordpress, wordpress-care | Bahasa Indonesia |
| `/services/wordpress/theme-development` | custom WordPress theme development | WordPress theme developer | wordpress | |
| `/services/wordpress/plugin-development` | custom WordPress plugin development | WordPress plugin developer | wordpress | Tracked "plugin development" |
| `/services/wordpress/optimization` | WordPress speed optimization service | WordPress security hardening, slow WordPress site | wordpress | |
| `/services/wordpress/headless-development` | headless WordPress development services | headless WordPress Next.js, Next.js WordPress | headless-wordpress | Already rewritten |
| `/services/php-development` | PHP development services | hire PHP developer, PHP API development services | php | No testimonials. GSC "php api development services" at position 41 |
| `/services/php-development/api-development` | PHP API development | REST API for Next.js, Laravel API | php | Post `/blog/php-api-development-for-nextjs` ranks at position 8.2 |
| `/services/php-development/custom-applications` | custom PHP application development | PHP web application developer | php | |
| `/services/php-development/database-solutions` | MySQL database optimization | PHP database design, slow MySQL queries | php | |
| `/services/php-development/modernization` | legacy PHP modernization | upgrade old PHP app, PHP to Laravel migration | php | |
| `/guides/cursor` | Cursor guide | Cursor for teams, Cursor project rules, Cursor rules examples, Cursor pricing 2026, Cursor vs Copilot | cursor-mentoring | Topical hub over the WordPress `cursor` category. Groups live in `lib/topics/index.ts`. Primary keyword volume unconfirmed: re-run RankMySEO `keyword_planner` on "cursor guide" and "cursor for teams" |
| `/blog/category/[slug]` | (archive) Cursor, Next.js, AI development, WordPress | | nextjs | Copy in `blogCategories` in `lib/topics/index.ts`. Only categories listed there get an archive |
| `/cursor-ambassador` | Cursor ambassador | Cursor Ambassador Indonesia | cursor-mentoring | Already rewritten |
| `/spacexai-ambassador` | SpaceXAI ambassador | SpaceX AI ambassador program | cursor-mentoring | 11.6% CTR. Don't change the title |
| `/minimax-ambassador` | MiniMax ambassador | MiniMax Dev Community Expert | ai | |
| `/minimax-ambassador/minimax-indonesia` | MiniMax Indonesia | MiniMax AI, MiniMax coding plan | ai | Bahasa Indonesia |
| `/about` | Aris Setiawan | Next.js developer Indonesia | other | |
| `/projects` | Next.js case studies | WordPress projects | nextjs | |
| `/contact` | (conversion page) | | | Done |

## Existing blog slugs you may link to

ai-agent-development, ai-chatbot-development, ai-integration-services, apa-itu-cursor-ai, apakah-cursor-ai-gratis, cara-menggunakan-cursor-ai, chat-vs-composer-in-cursor, cost-to-hire-nextjs-developer, cursor-agent-for-shipping, cursor-ai-indonesia, cursor-ai-pricing, cursor-ai-tutorial-for-beginners, cursor-ai-vs-copilot, cursor-ai-workflow-for-production, cursor-mcp-setup-for-shipping, cursor-project-rules, cursor-vibe-coding-workflow, headless-wordpress-with-nextjs, hire-a-next-js-developer-what-good-looks-like-in-2026, how-teams-should-roll-out-cursor-in-the-first-30-days, how-to-pick-vps-for-wordpress, how-to-use-cursor-ai-effectively, how-to-use-cursor-ai-to-build-an-app, integrate-machine-learning-into-nextjs-product, jasa-pembuatan-website-jakarta-nextjs, jasa-website-company-profile-nextjs-vs-template, migrasi-wordpress-ke-nextjs-bisnis, migrating-a-pages-app-to-app-router, next-js-pada-vps-murah, nextjs-app-router-api, nextjs-app-router-in-practice, nextjs-app-router-vs-pages, nextjs-cache-on-vercel, php-api-development-for-nextjs, pr-review-checklist-for-ai-generated-code, rankmyseo-is-live-open-beta, rankmyseo-saas-vs-open-source, introducing-rankmyseo-saas, seo-for-ai-vs-geo, seo-metadata-in-nextjs-app-router, switch-to-headless-wordpress-for-better-experience, technical-debt-pada-aplikasi-buatan-ai, technical-seo-audit-checklist, tentang-next-js-dan-php, website-maintenance-cost, when-a-website-needs-machine-learning, wordpress-vs-nextjs-when-worth-it
