# vite-i18n-by-design

> 🔌 A Vite plugin that loads and merges Vue I18n messages from a structured `locales/` folder with support for HMR and static usage.  
> ✅ TypeScript-ready — no setup required.

---

## 📦 Features

- 🔁 Loads messages from `locales/<lang>/<namespace>.json`
- ⚡️ Supports HMR via `virtual:i18n-messages`
- 📦 Automatically injects messages into your Vite app
- 💡 Typed out-of-the-box (no need to declare `virtual:` manually)
- 🧱 Compatible with ESM, Vite, and Vue I18n

---

## 📁 Folder structure

```
locales/
  fr/
    app.json
    dashboard.json
  en/
    app.json
    dashboard.json
```

---

## 🚀 Installation

```bash
npm install vite-i18n-by-design --save-dev
```

---

## 🔌 Vite Plugin Setup

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

## 🧠 Usage in app with HMR (recommended for dev)

> ⚠️ Required if you want **HMR during development** (auto reload of JSON changes).

```ts
// i18n.ts
import { createI18n } from 'vue-i18n';
import messages from 'virtual:i18n-messages';

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages,
});
```

✅ `virtual:i18n-messages` is **injected by the plugin** and fully typed — no need to declare it manually.

---

## 🧱 Static build-time usage (optional for advanced use)

If you want to load messages yourself (e.g. in SSR, build tools, or CLI scripts), you can:

```ts
import { loadMessages } from 'vite-i18n-by-design';

const messages = loadMessages('locales'); // or any custom path
```

> ❗ This will not support HMR and should not be used in code that runs in the browser.

---

## 🧪 HMR vs Static usage

| Scenario                  | Use `virtual:` | Use `loadMessages()` |
|---------------------------|----------------|----------------------|
| Dev with Vite             | ✅ Yes          | ❌ No (fs not available in browser) |
| Production build          | ✅ Yes          | ✅ Optional |
| SSR or CLI (Node.js)      | ❌ Not supported| ✅ Yes |

---

## 🪪 License

MIT © [Antoine Remy](https://github.com/antoineremy)
