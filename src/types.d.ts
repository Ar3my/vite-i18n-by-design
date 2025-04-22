/// <reference types="vite/client" />

declare module 'virtual:i18n-messages' {
  import type { I18nMessages } from './loader.js';
  const messages: I18nMessages;
  export default messages;
}
