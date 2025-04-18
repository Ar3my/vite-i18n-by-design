import path = require('path');
import type { Plugin, ViteDevServer } from 'vite';
import { loadMessages } from './loader';

const VIRTUAL_MODULE_ID = 'virtual:i18n-messages';
const RESOLVED_VIRTUAL_MODULE_ID = '\0' + VIRTUAL_MODULE_ID;

export interface I18nLoaderPluginOptions {
  localesDir?: string;
}

export default function i18nLoaderPlugin(options: I18nLoaderPluginOptions = {}): Plugin {
  const { localesDir = 'locales' } = options;
  const fullPath: string = path.resolve(process.cwd(), localesDir);

  return {
    name: 'vite-i18n-by-design',
    enforce: 'pre',
    resolveId(id: string): string | undefined {
      if (id === VIRTUAL_MODULE_ID) return RESOLVED_VIRTUAL_MODULE_ID;
    },
    load(id: string): string | undefined {
      if (id === RESOLVED_VIRTUAL_MODULE_ID) {
        const messages = loadMessages(fullPath);
        return `export default ${JSON.stringify(messages, null, 2)};`;
      }
    },
    handleHotUpdate({ file, server }: { file: string; server: ViteDevServer }): void {
      if (file.startsWith(fullPath) && file.endsWith('.json')) {
        server.moduleGraph.invalidateAll();
        server.ws.send({ type: 'full-reload' });
      }
    },
  };
}
