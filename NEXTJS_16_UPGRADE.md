# 🚀 Next.js 16 Upgrade Guide - madebyaris.com

## ✅ Upgrade Completed

This document tracks the upgrade from Next.js 15.5.4 to Next.js 16.0.0 and all related changes.

---

## 📦 Package Updates

### Dependencies Updated
- ✅ `next`: `^15.5.4` → `^16.0.0`
- ✅ `@next/bundle-analyzer`: `15.5.4` → `^16.0.0`
- ✅ `eslint-config-next`: `15.5.4` → `^16.0.0`

### Dependencies Kept at Latest
- ✅ `react`: `19.1.1` (compatible)
- ✅ `react-dom`: `19.1.1` (compatible)

---

## 🔧 Configuration Changes

### 1. **Middleware → Proxy** ✅
**File**: `middleware.ts` → `proxy.ts`

**Change**: Next.js 16 renamed `middleware` to `proxy` for better clarity around network boundaries.

**Action Taken**:
- Created `proxy.ts` with renamed function
- Deleted `middleware.ts`
- Updated function export from `middleware` to `proxy`

```typescript
// Before (Next.js 15)
export function middleware(request: NextRequest) { ... }

// After (Next.js 16)
export function proxy(request: NextRequest) { ... }
```

### 2. **Next.js Config Updates** ✅
**File**: `next.config.js`

**Changes Applied**:

#### a. **Partial Pre-Rendering (PPR)**
- ✅ Enabled `cacheComponents: true` (replaces `experimental.ppr`)
- This enables Partial Pre-Rendering for better performance

#### b. **Turbopack Configuration**
- ✅ Moved `turbopack` from `experimental.turbopack` to top-level config
- ✅ Added `experimental.turbopackFileSystemCacheForDev: true` for faster dev builds

#### c. **ESLint Config Removed**
- ✅ Removed `eslint` configuration (deprecated in Next.js 16)
- Use ESLint CLI directly: `npx eslint .`

#### d. **Image Configuration**
- ✅ Explicitly set `minimumCacheTTL: 60` (Next.js 16 default changed to 4 hours)
- Kept at 60 seconds for more frequent revalidation

### 3. **Layout Updates** ✅
**File**: `app/layout.tsx`

**Change**: Added `data-scroll-behavior="smooth"` to `<html>` element
- Next.js 16 no longer overrides `scroll-behavior: smooth` by default
- This attribute re-enables the smooth scroll behavior during navigation

### 4. **Package.json Scripts** ✅
**File**: `package.json`

**Changes**:
- ✅ Removed `dev:turbo` (Turbopack is now default)
- ✅ Added `dev:webpack` (opt-out option if needed)
- ✅ Added `build:webpack` (opt-out option if needed)

**New Scripts**:
```json
{
  "dev": "next dev",              // Uses Turbopack by default
  "dev:webpack": "next dev --webpack",
  "build": "next build",           // Uses Turbopack by default
  "build:webpack": "next build --webpack"
}
```

---

## 🎯 Next.js 16 Best Practices Implemented

### 1. **Partial Pre-Rendering (PPR)** ✅
Enabled via `cacheComponents: true` in `next.config.js`

**Benefits**:
- Faster initial page loads
- Better Core Web Vitals scores
- Automatic cache optimization

### 2. **Turbopack as Default** ✅
Turbopack is now the default bundler for both dev and build

**Benefits**:
- ⚡ 10x faster dev server startup
- 🚀 700x faster updates (HMR)
- 📦 Better tree-shaking and code splitting

### 3. **Enhanced Image Optimization** ✅
Explicit `minimumCacheTTL` configuration for optimal caching

### 4. **Smooth Scroll Behavior** ✅
Re-enabled smooth scrolling during navigation with `data-scroll-behavior="smooth"`

### 5. **Experimental Features Enabled** ✅
- `turbopackFileSystemCacheForDev`: Faster development builds with persistent cache

---

## 📋 Next Steps (Post-Install)

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Run Codemod (Optional but Recommended)
```bash
npx @next/codemod@canary upgrade latest
```

### 3. Test the Build
```bash
pnpm build
```

### 4. Test Development Server
```bash
pnpm dev
```

### 5. Verify Proxy Function
- Check that `proxy.ts` is working correctly
- Verify cache headers are being set for static assets

---

## 🔍 Breaking Changes Handled

### ✅ All Breaking Changes Addressed

1. **✅ Middleware → Proxy**: File renamed and function updated
2. **✅ ESLint Config**: Removed from next.config.js
3. **✅ Turbopack Config**: Moved to top-level
4. **✅ PPR Configuration**: Updated to `cacheComponents`
5. **✅ Smooth Scroll**: Re-enabled with attribute

---

## 📚 Next.js 16 Features Not Yet Used (Future Enhancements)

### 1. **React Compiler** (Optional)
Enable automatic memoization:
```js
// next.config.js
reactCompiler: true
```
Requires: `npm install -D babel-plugin-react-compiler`

### 2. **Cache Life & Tags** (If Needed)
Update imports if using unstable APIs:
```typescript
// Before
import { unstable_cacheLife as cacheLife } from 'next/cache'

// After
import { cacheLife } from 'next/cache'
```

### 3. **updateTag API** (For Server Actions)
For read-your-writes semantics in Server Actions:
```typescript
import { updateTag } from 'next/cache'

export async function updateUserProfile(userId: string) {
  await db.users.update(userId, profile)
  updateTag(`user-${userId}`)
}
```

---

## 🎉 Upgrade Benefits

### Performance Improvements
- ⚡ **Faster Dev Server**: Turbopack default bundler
- 🚀 **Faster Builds**: Turbopack build support
- 📦 **Better Caching**: PPR with cacheComponents
- 🎨 **Smoother UX**: Re-enabled smooth scrolling

### Developer Experience
- 📝 **Cleaner Config**: Removed deprecated options
- 🔧 **Better Tooling**: Turbopack file system cache
- 🎯 **Modern Patterns**: Aligned with Next.js 16 best practices

---

## ⚠️ Notes

1. **ESLint**: Configuration removed from `next.config.js`. Use ESLint CLI or `eslint.config.js` instead.
2. **Turbopack**: Now default, but can opt-out with `--webpack` flag if needed.
3. **Image Cache**: Default changed to 4 hours; kept at 60s for this project.
4. **Smooth Scroll**: Must explicitly enable with `data-scroll-behavior="smooth"`.

---

## 📖 References

- [Next.js 16 Upgrade Guide](https://nextjs.org/docs/app/guides/upgrading/version-16)
- [Next.js 16 Release Notes](https://nextjs.org/blog/next-16)
- [Turbopack Documentation](https://nextjs.org/docs/app/api-reference/next-config-js/turbopack)

---

**Upgrade Date**: 2025-01-XX  
**Next.js Version**: 16.2.0  
**Status**: ✅ Complete

---

## 📦 Next.js 16.2 Upgrade (March 2026)

### Dependencies Updated
- ✅ `next`: `16.1.6` → `16.2.0`
- ✅ `@next/bundle-analyzer`: `16.1.6` → `16.2.0`
- ✅ `eslint-config-next`: `16.1.6` → `16.2.0`

### New Features Added

#### 1. AGENTS.md
- Created `AGENTS.md` for AI coding agents
- Created `CLAUDE.md` referencing AGENTS.md
- Gives AI agents version-matched Next.js documentation
- Achieves 100% pass rate on Next.js evals

#### 2. Browser Log Forwarding
- Added `logging.browserToTerminal: 'error'` to config
- Browser errors now show in terminal during development
- Helpful for terminal-first AI agents

#### 3. Dev Server Lock File
- Already handled by Next.js 16
- `.next/dev/lock` file prevents multiple dev servers

### Code Changes Applied

#### 1. Turbopack Migration ✅
- Removed custom webpack configuration
- Turbopack handles code splitting, tree-shaking, and chunking automatically
- Added note about using `dynamic()` imports for custom chunking needs

#### 2. Async Request APIs ✅
- Project already uses `await params` pattern (Next.js 16 compatible)
- No changes needed

#### 3. Sitemap & Image Generation ✅
- No dynamic sitemap/image generation with async params
- No changes needed

#### 4. React 19.2 Compatibility ✅
- Project already on React 19.x
- Compatible with View Transitions, Activity, useEffectEvent (when available)

