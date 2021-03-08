import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import { useTranslation } from 'react-i18next'

import Styles from '../../common/Styles'
import { View, Text } from '../../common/Themed'
import Button from '../../common/components/Button'
import RegistrationModal from './components/RegistrationModal'
import useLogin from './hooks/useLogin'

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen(): JSX.Element {
  const { login } = useLogin()
  const { t } = useTranslation()
  const clickHandler = () => {
    login()
  }

  return (
    <View style={Styles.container}>
      <Text style={[Styles.title, { textAlign: 'center' }]}>
        {t('loginText')}
      </Text>
      <View
        style={Styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Button
        onPress={clickHandler}
        text={t('login')}
        accessibilityLabel="Login button"
      />

      <View style={Styles.gap} />

      <RegistrationModal />
    </View>
  )
}
