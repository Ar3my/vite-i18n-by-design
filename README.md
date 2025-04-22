# vite-i18n-by-design

[![npm version](https://img.shields.io/npm/v/vite-i18n-by-design.svg)](https://www.npmjs.com/package/vite-i18n-by-design)
[![License: MIT](https://img.shields.io/npm/l/vite-i18n-by-design.svg)](LICENSE)

> A Vite plugin that loads and merges Vue I18n messages from a structured `locales/` folder (supporting JSON and YAML) with full HMR support and TypeScript types out-of-the-box.

---

## 🚀 Features

- 🧩 Loads `.json`, `.yml`, and `.yaml` files from `locales/<lang>/<namespace>.*`
- 🔁 Automatically merges messages under each locale and namespace
- 🔥 Supports Vite HMR with `virtual:i18n-messages`
- 🧠 TypeScript types included for the virtual module
- 📦 Zero-config setup for runtime

---

## 📁 Folder Structure Example

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
    dashboard: { title: "Tableau de bord" }
  },
  en: {
    app: { hello: "Hello" },
    dashboard: { title: "Dashboard" }
  }
}
```

---

## 🔌 Vite Setup

```ts
// vite.config.ts
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

## 🧠 Usage in your app (with HMR)

```ts
import { createI18n } from 'vue-i18n';
import messages from 'virtual:i18n-messages';

export const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages
});
```

✅ Messages are auto-generated from your locales and support hot module reload on change.

---

## ⚠️ Known TypeScript Issue

If you get the following error in your IDE or build:

```text
Vue: Cannot find module 'virtual:i18n-messages' or its corresponding type declarations.
```

You can fix it by explicitly adding the type file in your `tsconfig.app.json`:

```json
"include": [
  "src",
  "env.d.ts",
  "./node_modules/vite-i18n-by-design/dist/virtual-i18n-messages.d.ts"
]
```

> 💡 You can also use `compilerOptions.paths` for a cleaner mapping.

---

## 📝 Supported File Types

- `.json`
- `.yaml`
- `.yml`

---

## 🧪 Comparison: Virtual vs Static Usage

| Usage Context         | `virtual:i18n-messages` | `loadMessages()`        |
|-----------------------|--------------------------|--------------------------|
| Dev + HMR             | ✅ Recommended            | ❌ Avoid (no HMR)        |
| Vite Build (Prod)     | ✅ Included               | ✅ Optional               |
| SSR / Node.js script  | ❌ Not available          | ✅ Yes                    |
| Client runtime        | ✅ Works automatically     | ❌ Uses `fs`, not for browser |

---

## 🪪 License

MIT © Antoine Remy
