import path = require('path');
import { loadMessages } from './loader';
import i18nLoaderPlugin from './plugin';

export const messages = loadMessages(path.resolve(process.cwd(), 'locales'));

export default i18nLoaderPlugin;
