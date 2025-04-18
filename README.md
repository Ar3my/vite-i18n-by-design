# vite-i18n-by-design

> A Vite plugin to load and merge Vue I18n messages from a structured locales folder with HMR and static access.

## 🚀 Usage

### In your `vite.config.ts`:

```ts
import i18nLoaderPlugin from 'vite-i18n-by-design';

export default defineConfig({
  plugins: [
    vue(),
    i18nLoaderPlugin()
  ]
});
```

### In your app:

```ts
import { createI18n } from 'vue-i18n';
import { loadMessages } from 'vite-i18n-by-design';

const messages = loadMessages();

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages,
});
```

### Optional: use virtual module with HMR

```ts
import messages from 'virtual:i18n-messages';
```
