import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export type I18nMessages = Record<string, Record<string, Record<string, string>>>;

export function loadMessages(localesDir: string): I18nMessages {
  const messages: I18nMessages = {};
  if (!fs.existsSync(localesDir)) return messages;

  const locales: string[] = fs.readdirSync(localesDir);

  for (const locale of locales) {
    const localePath: string = path.join(localesDir, locale);
    if (fs.statSync(localePath).isDirectory()) {
      messages[locale] = {};
      const files: string[] = fs.readdirSync(localePath);
      for (const file of files) {
        const ext = path.extname(file);
        if (ext === '.json' || ext === '.yml' || ext === '.yaml') {
          const namespace: string = path.basename(file, ext);
          const content: string = fs.readFileSync(path.join(localePath, file), 'utf-8');
          const data = ext === '.json' ? JSON.parse(content) : yaml.load(content);
          messages[locale][namespace] = data as Record<string, string>;
        }
      }
    }
  }

  return messages;
}
