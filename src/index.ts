import path from 'path';
import plugin from './plugin.js';
import { loadMessages as internalLoadMessages } from './loader.js';
import type { I18nLoaderPluginOptions } from './plugin.js';
import type { I18nMessages } from './loader.js';

export const loadMessages = (dir: string = 'locales'): I18nMessages =>
  internalLoadMessages(path.resolve(process.cwd(), dir));

export function i18nLoaderPlugin(options?: I18nLoaderPluginOptions) {
  return plugin(options);
}

export default i18nLoaderPlugin;

declare module 'virtual:i18n-messages' {
  import type { I18nMessages } from './loader.js';
  const messages: I18nMessages;
  export default messages;
}
