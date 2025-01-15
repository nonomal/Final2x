import { createI18n } from 'vue-i18n'
import { en } from '../locales/en'
import { zh } from '../locales/zh'
import { ja } from '../locales/ja'
import { fr } from '../locales/fr'

// -----------------------------------------------------------------------------
// to add a new language, add the language file to the locales folder and add the language id to the LANG_LIST array
// and "import { xx } from '../locales/xx'" at the top of this file
// and add the language to the messages object below
export const LANG_LIST: string[] = ['en', 'zh', 'ja', 'fr']
// -----------------------------------------------------------------------------

const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'en',
  globalInjection: true, // 全局注册$t方法
  messages: {
    en,
    zh,
    ja,
    fr
  }
})

export default i18n
