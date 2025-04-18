import fs from 'fs';
import path from 'path';
const VIRTUAL_MODULE_ID = 'virtual:i18n-messages';
const RESOLVED_VIRTUAL_MODULE_ID = '\0' + VIRTUAL_MODULE_ID;
function loadMessages(localesDir) {
    const messages = {};
    const locales = fs.readdirSync(localesDir);
    for (const locale of locales) {
        const localePath = path.join(localesDir, locale);
        if (fs.statSync(localePath).isDirectory()) {
            messages[locale] = {};
            const files = fs.readdirSync(localePath);
            for (const file of files) {
                if (file.endsWith('.json')) {
                    const namespace = path.basename(file, '.json');
                    const content = fs.readFileSync(path.join(localePath, file), 'utf-8');
                    messages[locale][namespace] = JSON.parse(content);
                }
            }
        }
    }
    return messages;
}
export default function i18nLoaderPlugin(options = {}) {
    const { localesDir = 'locales' } = options;
    const fullPath = path.resolve(process.cwd(), localesDir);
    return {
        name: 'vite-i18n-by-design',
        enforce: 'pre',
        resolveId(id) {
            if (id === VIRTUAL_MODULE_ID)
                return RESOLVED_VIRTUAL_MODULE_ID;
        },
        load(id) {
            if (id === RESOLVED_VIRTUAL_MODULE_ID) {
                const messages = loadMessages(fullPath);
                return `export default ${JSON.stringify(messages, null, 2)};`;
            }
        },
        handleHotUpdate({ file, server }) {
            if (file.startsWith(fullPath) && file.endsWith('.json')) {
                server.moduleGraph.invalidateAll();
                server.ws.send({ type: 'full-reload' });
            }
        },
    };
}
