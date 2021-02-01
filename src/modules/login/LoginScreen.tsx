import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity } from 'react-native'

import Styles from '../../common/Styles'
import { useThemedColors, View, Text } from '../../common/Themed'
import RegistrationModal from './components/RegistrationModal'
import useLogin from './hooks/useLogin'

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen(): JSX.Element {
  const { login } = useLogin()
  const { t } = useTranslation()
  const clickHandler = () => {
    login()
  }

  const theme = useThemedColors()
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Login or register with a Google account</Text>
      <View
        style={Styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TouchableOpacity
        onPress={clickHandler}
        style={[Styles.normalButton, { backgroundColor: theme.buttonColor }]}
        accessibilityLabel="Login button"
      >
        <Text style={[Styles.buttonLabel, { color: theme.buttonTextColor }]}>
          {t('LOGIN')}
        </Text>
      </TouchableOpacity>
      <View style={Styles.gap} />

      <RegistrationModal />
    </View>
  )
}
