import type { I18nLoaderPluginOptions } from './plugin.js';
import type { I18nMessages } from './loader.js';
export declare const loadMessages: (dir?: string) => I18nMessages;
export declare function i18nLoaderPlugin(options?: I18nLoaderPluginOptions): import("vite").Plugin<any>;
export default i18nLoaderPlugin;
