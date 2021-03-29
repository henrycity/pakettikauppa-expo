import { Feather } from '@expo/vector-icons'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Hoverable } from 'react-native-web-hover'

import Styles from '../../common/Styles'
import { useThemedColors, Text } from '../../common/Themed'
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
    setVisible(false)
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
        <Hoverable>
          {({ hovered }) => (
            <TouchableOpacity onPress={() => setVisible(!visible)}>
              <Text
                style={[
                  Styles.drawerLabelDefault,
                  { textDecorationLine: hovered ? 'underline' : 'none' },
                ]}
              >
                {t('language')}
              </Text>
            </TouchableOpacity>
          )}
        </Hoverable>

        {visible && (
          <View>
            {languages.map((lang) => (
              <Hoverable key={lang.code}>
                {({ hovered }) => (
                  <TouchableOpacity
                    key={lang.code}
                    onPress={() => onValueChange(lang.code)}
                  >
                    <Text
                      style={[
                        Styles.drawerLabelCustom,
                        styles.smallLabel,
                        { textDecorationLine: hovered ? 'underline' : 'none' },
                      ]}
                    >
                      {lang.name}
                    </Text>
                  </TouchableOpacity>
                )}
              </Hoverable>
            ))}
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  smallLabel: {
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
