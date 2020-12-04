import { useState, useEffect, Dispatch, SetStateAction } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as Localization from "expo-localization"
import { languages } from './resources'

type useSelectedLanguageReturnType = [string, Dispatch<SetStateAction<string>>]

export default function useSelectedLanguage(): useSelectedLanguageReturnType {
  const [selected, setSelected] = useState('')
  useEffect(() => {
    getSelectedLanguage()
      .then(lng => setSelected(lng))
  }, [])

  return [selected, setSelected]
}

async function getSelectedLanguage() {
  let selected = await getStoredLanguage()
  if (!selected) {
    const locale = Localization.locale
    if (languages.includes(locale))
      selected = locale
    else
      selected = 'en'
  }
  return selected
}

async function getStoredLanguage(): Promise<string | null> {
  return AsyncStorage.getItem('lng')
}
