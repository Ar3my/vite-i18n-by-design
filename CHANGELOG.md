# 📦 Changelog

## [1.1.0] - 2025-04-22

### 🎯 Goal
Make `vite-i18n-by-design` truly plug-and-play for users:
- ✅ No need to manually declare `virtual:i18n-messages` in their own project
- ✅ Full TypeScript support with zero config

---

### ✅ Added
- Declared `virtual:i18n-messages` module inside the package itself
- New `types.d.ts` file is compiled and distributed with the package
- Linked to `types` in `package.json` so TypeScript picks it up automatically

---

### 🧠 Fixed
- Removed `Cannot find module 'virtual:i18n-messages'` TypeScript error
- PhpStorm now picks up the type after cache invalidation

---

### 📦 Result
```ts
import messages from 'virtual:i18n-messages';
// ✅ Typed automatically without user declaration
```

The package is now clean, self-contained, and DX-friendly 🎉
