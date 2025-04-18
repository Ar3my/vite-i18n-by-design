import type { Plugin } from 'vite';
export type I18nMessages = Record<string, Record<string, Record<string, string>>>;
export interface I18nLoaderPluginOptions {
    localesDir?: string;
}
export default function i18nLoaderPlugin(options?: I18nLoaderPluginOptions): Plugin;
