import path = require('path');
import plugin from './plugin';
import { loadMessages as internalLoadMessages } from './loader';
import type { I18nLoaderPluginOptions } from './plugin';
import type { I18nMessages } from './loader';

/**
 * Manual message loader to avoid runtime errors if locales folder is missing.
 */
export const loadMessages = (
    dir: string = 'locales'
): I18nMessages => internalLoadMessages(path.resolve(process.cwd(), dir));

/**
 * Named export for plugin (useful for CJS require).
 */
export function i18nLoaderPlugin(options?: I18nLoaderPluginOptions) {
    return plugin(options);
}

/**
 * Default export — Vite plugin.
 */
export default i18nLoaderPlugin;