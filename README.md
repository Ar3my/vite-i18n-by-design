# vite-i18n-by-design

[![npm version](https://img.shields.io/npm/v/vite-i18n-by-design.svg)](https://www.npmjs.com/package/vite-i18n-by-design)
[![MIT License](https://img.shields.io/npm/l/vite-i18n-by-design.svg)](LICENSE)

> 🔌 Vite plugin that automatically loads and merges Vue I18n messages from a structured `locales/` directory (organized by locale and namespace). Supports hot reload and offers direct typed message access.

---

## 🚀 Features

- ✅ Load `locales/<lang>/<namespace>.json` files automatically
- 🔁 Merge translations by locale and namespace
- ⚡️ HMR support in dev mode via virtual module (`virtual:i18n-messages`)
- 🧠 Direct static `messages` import (no virtual module required)
- 💪 Full TypeScript support, no config needed

---

## 📁 Folder structure example

```
locales/
  fr/
    app.json
    dashboard.json
  en/
    app.json
    dashboard.json
```

```jsonc
// locales/fr/app.json
{
  "hello": "Bonjour",
  "bye": "Au revoir"
}
```

Becomes:

```ts
{
  fr: {
    app: {
      hello: "Bonjour",
      bye: "Au revoir"
    },
    dashboard: { ... }
  },
  en: {
    app: { ... },
    dashboard: { ... }
  }
}
```

---

## 📦 Installation

```bash
npm install vite-i18n-by-design --save-dev
```

---

## 🔌 Usage in `vite.config.ts`

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import i18nLoaderPlugin from 'vite-i18n-by-design';

export default defineConfig({
  plugins: [
    vue(),
    i18nLoaderPlugin({
      localesDir: 'locales' // optional, default is 'locales'
    }),
  ],
});
```

---

## 🧠 Static usage (recommended for production)

```ts
// i18n.ts
import { createI18n } from 'vue-i18n';
import { messages } from 'vite-i18n-by-design';

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages,
});
```

---

## 🧪 Dev HMR usage (optional, supports `virtual:` module)

```ts
// i18n.ts (dev mode)
import messages from 'virtual:i18n-messages';

const i18n = createI18n({
  locale: 'fr',
  messages,
});
```

✅ Types for `virtual:i18n-messages` are included — no need to declare anything manually.

---

## 🛠 Advanced Options

```ts
i18nLoaderPlugin({
  localesDir: 'my/custom/dir'
});
```

---

## 🪪 License

MIT © [Antoine Remy](https://github.com/antoineremy)
