# vite-i18n-by-design

> 🔌 A Vite plugin that automatically loads and merges Vue I18n messages from a structured `locales/` directory (organized by locale and namespace). Supports hot reload during development.

## 📦 Features

- ✅ Structured folder support: `locales/fr/component1.json`, `locales/en/component1.json`, etc.
- 🔁 Auto-merging of messages under each locale and namespace
- ⚡️ Vite dev server hot-reload support
- ✨ TypeScript support with virtual module declaration

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

## 🚀 Installation

```bash
npm install vite-i18n-by-design --save-dev
```

## 🧩 Usage in `vite.config.ts`

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

## 🗣 Usage in your app

```ts
import { createI18n } from 'vue-i18n';
import messages from 'virtual:i18n-messages';

export const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages,
});
```

## 🧠 TypeScript support

If you use TypeScript and want to avoid "Cannot find module 'virtual:i18n-messages'" errors, add the following declaration to your app:

```ts
// types/virtual-i18n-messages.d.ts
declare module 'virtual:i18n-messages' {
  const messages: Record<string, Record<string, Record<string, string>>>;
  export default messages;
}
```

## 🪪 License

MIT © [Antoine Remy](https://github.com/antoineremy)
