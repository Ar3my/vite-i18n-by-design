import fs from 'fs';
import path from 'path';

export type I18nMessages = Record<string, Record<string, Record<string, string>>>;

export function loadMessages(localesDir: string): I18nMessages {
  const messages: I18nMessages = {};
  const locales: string[] = fs.readdirSync(localesDir);

  for (const locale of locales) {
    const localePath: string = path.join(localesDir, locale);
    if (fs.statSync(localePath).isDirectory()) {
      messages[locale] = {};
      const files: string[] = fs.readdirSync(localePath);
      for (const file of files) {
        if (file.endsWith('.json')) {
          const namespace: string = path.basename(file, '.json');
          const content: string = fs.readFileSync(path.join(localePath, file), 'utf-8');
          messages[locale][namespace] = JSON.parse(content);
        }
      }
    }
  }

  return messages;
}
