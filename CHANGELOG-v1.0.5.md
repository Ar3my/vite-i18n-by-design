# 📦 Changelog

## [1.0.5] - 2025-04-18

### 🛠 Improvements
- Replaced automatic `loadMessages()` call with explicit export to avoid ENOENT errors if `locales/` does not exist.
- Now uses:
  ```ts
  import { loadMessages } from 'vite-i18n-by-design';
  const messages = loadMessages();
  ```
- Ensures safe runtime usage and allows custom directory paths.

### ⚙️ Internal
- Maintains strict TypeScript typing
- Uses CommonJS-compatible syntax (`require('fs')`) for full compatibility with Node environments.
