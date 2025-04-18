import path from 'path';
import type { Plugin, ViteDevServer } from 'vite';
import { loadMessages } from './loader.js';

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
      if (id === 'virtual:i18n-messages') return '\0virtual:i18n-messages';
    },
    load(id: string): string | undefined {
      if (id === '\0virtual:i18n-messages') {
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
