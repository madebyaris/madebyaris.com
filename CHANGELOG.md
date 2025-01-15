# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-01-15

### Changed
- Enhanced blog post page with improved layout and styling
- Updated WordPress API integration with better error handling
- Improved SEO handling with RankMath integration
- Enhanced image handling with Next.js Image component
- Updated Post type definition with additional fields
- Improved metadata generation with better fallbacks

### Fixed
- Fixed WordPress API URL configuration
- Improved error handling in API calls
- Fixed type definitions for blog post page
- Enhanced featured image handling

### Added
- Added back to blog navigation
- Added post date and author display
- Added contact link in blog posts
- Added better loading states
- Added debug logging for API calls
- Added revalidation time of 1 hour for posts

### Technical
- Refactored WordPress API client for better error handling
- Updated Post interface with new fields (date, modified, featured_media)
- Added RankMath SEO integration
- Improved TypeScript types across the application
- Enhanced error boundaries and fallbacks

## [1.0.1] - 2025-01-15

### Fixed
- Type error in blog post page component to match Next.js 15's type requirements

## [1.0.0] - 2025-01-15

### Added
- Initial release
- Next.js 14 app router implementation
- React Server Components (RSC) architecture
- TailwindCSS for styling
- Shadcn UI components integration
- TypeScript strict mode enabled
- Server actions with next-safe-action
- Query state management with nuqs
- Responsive design with mobile-first approach
- SEO optimization
- Performance optimizations for Core Web Vitals

### Security
- Implemented secure server actions with input validation
- Type-safe API endpoints
- Security headers configuration

[1.1.0]: https://github.com/username/project/releases/tag/v1.1.0
[1.0.1]: https://github.com/username/project/releases/tag/v1.0.1
[1.0.0]: https://github.com/username/project/releases/tag/v1.0.0
