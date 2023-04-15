import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from 'locales/en.json'
import translationUA from 'locales/ua.json'


const fallbackLng = ['en']
const availableLanguages = ['en', 'ua']


const resources = {
  en: {
    translation: translationEN
  },
  ua: {
    translation: translationUA
  }
}

i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources,
    fallbackLng, // fallback language is english.
    detection: {
      checkWhitelist: true, // options for language detection
    },
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
  })
export default i18n