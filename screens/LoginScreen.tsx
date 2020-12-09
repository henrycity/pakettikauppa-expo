import * as Google from 'expo-auth-session/providers/google'
import * as SecureStore from 'expo-secure-store'
import * as WebBrowser from 'expo-web-browser'
import * as React from 'react'
import { StyleSheet, Button, Platform } from 'react-native'

import { Text, View } from '../components/Themed'
import useLogin from '../hooks/useLogin'

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen(): JSX.Element {
  const { login, disabled } = useLogin()

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
        title="Login"
        onPress={() => {
          login()
        }}
      />
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
})
