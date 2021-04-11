import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import resources from '../resources'

export { languages } from '../resources'

// export const useSelectedLanguage = () => ['en', (_selected: string) => {}]

export async function initializeLocalization(): Promise<void> {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: 'en',
      fallbackLng: 'en',

      keySeparator: false,

      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    })
}
