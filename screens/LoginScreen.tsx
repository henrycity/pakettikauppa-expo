import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Button } from 'react-native'

import RegistrationModal from '../components/RegistrationModal'
import { Text, View } from '../components/Themed'
import useLogin from '../hooks/useLogin'

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen(): JSX.Element {
  const { login, disabled } = useLogin()
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login or register with a Google account</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Button
        disabled={disabled}
        accessibilityLabel="Login button"
        title={t('login')}
        onPress={() => {
          login()
        }}
      />

      <View style={styles.gap} />

      <RegistrationModal />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  gap: {
    height: 10,
  },
})
