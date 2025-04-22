# vite-i18n-by-design

[![npm version](https://img.shields.io/npm/v/vite-i18n-by-design.svg)](https://www.npmjs.com/package/vite-i18n-by-design)
[![License: MIT](https://img.shields.io/npm/l/vite-i18n-by-design.svg)](LICENSE)

> 🔌 A Vite plugin that automatically loads and merges Vue I18n messages from a structured `locales/` folder (organized by locale and namespace), supporting both JSON and YAML formats.  
> ✅ Built for Vite + Vue I18n with full HMR support and out-of-the-box TypeScript integration.

---

## 🚀 Features

- 🔁 Auto-load messages from `locales/<lang>/<namespace>.json`, `.yml`, or `.yaml`
- 🔥 HMR support via `virtual:i18n-messages`
- 🧩 Seamless integration with Vue I18n
- 🧠 Includes TypeScript types for `virtual:` module — no manual setup
- 🧱 Zero-config: install, enable the plugin, and you're done

---

## 📁 Example folder structure

```
locales/
  fr/
    app.json
    dashboard.yml
  en/
    app.json
    dashboard.yml
```

Becomes:

```ts
{
  fr: {
    app: { hello: "Bonjour" },
    dashboard: { welcome: "Bienvenue" }
  },
  en: {
    app: { hello: "Hello" },
    dashboard: { welcome: "Welcome" }
  }
}
```

---

## 📦 Installation

```bash
npm install vite-i18n-by-design --save-dev
```

---

## 🔌 Plugin Setup

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import i18nLoaderPlugin from 'vite-i18n-by-design';

export default defineConfig({
  plugins: [
    vue(),
    i18nLoaderPlugin({
      localesDir: 'locales' // optional, default is 'locales'
    })
  ],
});
```

---

## 🧠 Usage in app (with HMR)

> ✅ This is the recommended usage, especially during development.

```ts
import { createI18n } from 'vue-i18n';
import messages from 'virtual:i18n-messages';

export default createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages
});
```

`virtual:i18n-messages` is injected by the plugin, and **fully typed out-of-the-box**.

---

## 🧱 Static usage (optional for CLI / SSR)

You can also load messages manually via `loadMessages()` (Node.js only):

```ts
import { loadMessages } from 'vite-i18n-by-design';

const messages = loadMessages(); // loads from 'locales' by default
```

> ⚠️ **Warning:** `loadMessages()` uses Node.js `fs`. **Do not use it in browser-side code.**

---

## 📋 Supported file types

- `.json`
- `.yaml`
- `.yml`

---

## 🧪 HMR vs Static comparison

| Context               | `virtual:i18n-messages` | `loadMessages()`     |
|----------------------|--------------------------|----------------------|
| Vite Dev (HMR)       | ✅ Required               | ❌ Not recommended   |
| Vite Build (Prod)    | ✅ Injected               | ✅ Optional          |
| Node CLI / SSR       | ❌ Not available          | ✅ Yes               |
| Browser runtime      | ✅ Yes (via plugin)       | ❌ Not supported     |

---

## 🪪 License

MIT © [Antoine Remy](https://github.com/antoineremy)
