import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en'
import ar from './locales/ar'

i18next.use(initReactI18next).use(LanguageDetector).init({
  fallbackLng: 'en',
  resources: { en, ar }
})
