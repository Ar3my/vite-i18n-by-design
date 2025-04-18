import path from 'path';
import plugin from './plugin.js';
import { loadMessages as internalLoadMessages } from './loader.js';
export const loadMessages = (dir = 'locales') => internalLoadMessages(path.resolve(process.cwd(), dir));
export function i18nLoaderPlugin(options) {
    return plugin(options);
}
export default i18nLoaderPlugin;
