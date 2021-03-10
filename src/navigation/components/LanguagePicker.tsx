import { Feather } from '@expo/vector-icons'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import Styles from '../../common/Styles'
import { useThemedColors } from '../../common/Themed'
import { languages } from '../../localization'

interface LanguagePickerProps {
  navigation: DrawerNavigationHelpers
}

const LanguagePicker = ({ navigation }: LanguagePickerProps): JSX.Element => {
  const { i18n } = useTranslation()
  const themed = useThemedColors()

  const [visible, setVisible] = useState(false)

  const onValueChange = (value: string) => {
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
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Text style={[Styles.drawerLabelDefault, styles.mainLabel]}>
            {t('language')}
          </Text>
        </TouchableOpacity>
        {visible && (
          <View>
            {languages.map((lang) => (
              <View key={lang.code}>
                <TouchableOpacity onPress={() => onValueChange(lang.code)}>
                  <Text style={[Styles.drawerLabelCustom, styles.smallLabel]}>
                    {lang.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainLabel: {
    color: '#233385',
  },
  smallLabel: {
    color: '#233385',
    marginTop: 9,
    paddingVertical: 3,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 10,
  },
  languagePicker: {
    alignItems: 'flex-start',
    padding: 10,
    paddingHorizontal: 27,
  },
})

export default LanguagePicker
