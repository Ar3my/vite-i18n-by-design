import path = require('path');
import { loadMessages as internalLoadMessages } from './loader';
import i18nLoaderPlugin from './plugin';

export const loadMessages = (dir: string = 'locales') =>
  internalLoadMessages(path.resolve(process.cwd(), dir));

export default i18nLoaderPlugin;
