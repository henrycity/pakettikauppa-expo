import { Feather } from '@expo/vector-icons'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

import { useThemedColors } from '../../common/Themed'
import { useSelectedLanguage, languages } from '../../localization'

interface LanguagePickerProps {
  navigation: DrawerNavigationHelpers
}

const LanguagePicker = ({ navigation }: LanguagePickerProps): JSX.Element => {
  const { i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useSelectedLanguage()
  const themed = useThemedColors()

  const onValueChange = (value: string) => {
    setSelectedLanguage(value)
    i18n.changeLanguage(value)
    navigation.closeDrawer()
  }

  return (
    <View
      style={[styles.container, { backgroundColor: themed.drawerBackground }]}
    >
      <Feather name="globe" size={24} color={themed.blue} style={styles.icon} />
      <View style={styles.languagePicker}>
        {selectedLanguage ? (
          <RNPickerSelect
            value={selectedLanguage}
            placeholder={{}}
            onValueChange={onValueChange}
            items={languages.map((lang) => ({ label: lang, value: lang }))}
            style={{
              inputWeb: {
                ...webStyle,
                backgroundColor: themed.drawerBackground,
                color: themed.text,
              },
              inputIOS: {
                backgroundColor: themed.drawerBackground,
                color: themed.text,
              },
              inputAndroid: {
                backgroundColor: themed.drawerBackground,
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
    //color: '#233385',
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

export default LanguagePicker
