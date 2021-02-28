import { Feather } from '@expo/vector-icons'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import Styles from '../../common/Styles'
import { useThemedColors } from '../../common/Themed'
import { useSelectedLanguage, languages } from '../../localization'

interface LanguagePickerProps {
  navigation: DrawerNavigationHelpers
}

const LanguagePicker = ({ navigation }: LanguagePickerProps): JSX.Element => {
  const { i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useSelectedLanguage()
  const themed = useThemedColors()

  const [visible, setVisible] = useState(false)

  const onValueChange = (value: string) => {
    setSelectedLanguage(value)
    i18n.changeLanguage(value)
    navigation.closeDrawer()
  }

  const { t } = useTranslation()

  return (
    <View
      style={[styles.container, { backgroundColor: themed.drawerBackground }]}
    >
      <Feather
        name="globe"
        size={24}
        color={themed.inactiveIcon}
        style={Styles.icon}
      />
      <View style={styles.languagePicker}>
        {selectedLanguage ? (
          <>
            <TouchableOpacity onPress={() => setVisible(!visible)}>
              <Text>{t('language')}</Text>
            </TouchableOpacity>
            {visible && (
              <View>
                {languages.map((lang) => (
                  <TouchableOpacity onPress={() => onValueChange(lang)}>
                    <Text>{lang}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </>
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
    width: '30%',
    alignItems: 'center',
    padding: 10,
  },
})

export default LanguagePicker
