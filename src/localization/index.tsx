import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Localization from 'expo-localization'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import resources from './resources'

export { languages } from './resources'
export { default as useSelectedLanguage } from './hooks/useSelectedLanguage'

export async function initializeLocalization(): Promise<void> {
  const language = await AsyncStorage.getItem('lng')

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: language ?? Localization.locale,
      fallbackLng: 'en',

      keySeparator: false,

      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    })

  setLanguageChangedEventListener()
}

function setLanguageChangedEventListener(): void {
  i18n.on('languageChanged', (lng) => {
    if (lng) {
      // Split because Localization.locale format is "en-EN" instead of "en"
      storeLanguage(lng.split('-')[0])
    }
  })
}

function storeLanguage(language: string): Promise<void> {
  return AsyncStorage.setItem('lng', language)
}
