import translationEN from './locales/en.json'
import translationPL from './locales/pol.json'
import translationRU from './locales/ru.json'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'


// устанавливаем начальный язык и ресурсы
i18n
    .use(initReactI18next)
    .init({
        resources: {
            eng: { translation: translationEN },
            ru: { translation: translationRU },
            pol: { translation: translationPL },
        },
        fallbackLng: 'eng', // язык, который будет использоваться, если не найдено совпадение
        interpolation: {
            escapeValue: false, // react-i18next ожидает значения безопасными для внедрения (escapeValue: false)
        },
    })

export default i18n
