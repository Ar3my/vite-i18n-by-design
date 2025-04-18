# 📦 Changelog

## [1.0.4] - 2025-04-18

### 🚀 Features
- Added direct `messages` export alongside the Vite plugin.
- Bundled types for `virtual:i18n-messages` — no need to declare manually anymore.

### 🛠 Improvements
- Refactored `fs` and `path` imports to use `require()` for Node.js/CommonJS compatibility.
- Full TypeScript strict mode support (`strict`, `noImplicitAny`, `strictNullChecks`).
- Cleaner project structure and typing across the whole package.

### 🧪 Dev Experience
- Improved DX with simpler import:
  ```ts
  import { messages } from 'vite-i18n-by-design';
  ```

---

