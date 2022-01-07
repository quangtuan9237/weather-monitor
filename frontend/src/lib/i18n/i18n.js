/* eslint-disable no-unused-vars */
import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { LANGUAGE } from '@/utils/language';

i18next
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: [LANGUAGE.vi, LANGUAGE.en],
    fallbackLng: LANGUAGE.vi,
    debug: false,
    // saveMissing: true,
    useDataAttrOptions: true,
    // missingKeyHandler: function (lngs, ns, key, fallbackValue, updateMissing, options) {},

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export const i18n = i18next;
