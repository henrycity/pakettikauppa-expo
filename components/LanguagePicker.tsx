import { MaterialIcons } from '@expo/vector-icons'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

import { languages, useSelectedLanguage } from '../localization'
import { useThemedColors } from './Themed'

interface LanguagePickerProps {
  navigation: DrawerNavigationHelpers
}

export default ({ navigation }: LanguagePickerProps) => {
  const { i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useSelectedLanguage()
  const themed = useThemedColors()

  return (
    <View style={[styles.container, { backgroundColor: themed.background }]}>
      <MaterialIcons
        name="language"
        size={26}
        color="blue"
        style={styles.icon}
      />
      <View style={styles.languagePicker}>
        {selectedLanguage ? (
          <RNPickerSelect
            value={selectedLanguage}
            placeholder={{}}
            onValueChange={(value) => {
              setSelectedLanguage(value)
              i18n.changeLanguage(value)
              navigation.closeDrawer()
            }}
            items={languages.map((lang) => ({ label: lang, value: lang }))}
            style={{
              inputWeb: {
                ...webStyle,
                backgroundColor: themed.background,
                color: themed.text,
              },
              inputIOS: {
                backgroundColor: themed.background,
                color: themed.text,
              },
              inputAndroid: {
                backgroundColor: themed.background,
                color: themed.text,
              },
            }}
          />
        ) : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  languagePicker: {
    marginLeft: 23,
    width: '30%',
  },
  icon: {
    padding: 7,
  },
})

const webStyle = {
  height: '20px',
}