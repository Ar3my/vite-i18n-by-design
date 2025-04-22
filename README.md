# vite-i18n-by-design

[![npm version](https://img.shields.io/npm/v/vite-i18n-by-design.svg)](https://www.npmjs.com/package/vite-i18n-by-design)
[![License: MIT](https://img.shields.io/npm/l/vite-i18n-by-design.svg)](LICENSE)

> A Vite plugin to load and merge Vue I18n messages from JSON or YAML files with full HMR and TypeScript support.

## 🚀 Features

- Load messages from `locales/<lang>/<namespace>.json`, `.yml`, or `.yaml`
- Supports HMR with `virtual:i18n-messages`
- Auto-injected and statically merged into your build
- Works with Vue I18n and TypeScript with zero config

## 🔌 Setup

```ts
// vite.config.ts
import i18nLoaderPlugin from 'vite-i18n-by-design';

export default defineConfig({
  plugins: [
    vue(),
    i18nLoaderPlugin()
  ],
});
```

## 🧠 In your app

```ts
import { createI18n } from 'vue-i18n';
import messages from 'virtual:i18n-messages';

export default createI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages
});
```

## 📝 File support

- `.json`
- `.yml` / `.yaml`

## ⚠️ Important

Do **not** use `loadMessages()` in client-side code — it uses `fs` and is only meant for Node.js environments.

## 🪪 License

MIT © Antoine Remy
