import { ResponseType } from 'expo-auth-session'
import * as Google from 'expo-auth-session/providers/google'
import { DeviceType } from 'expo-device'
import * as WebBrowser from 'expo-web-browser'
import firebase from 'firebase'
import * as React from 'react'
import { StyleSheet, Button } from 'react-native'

import { Text, View } from '../components/Themed'
import useDeviceType from '../hooks/useDeviceType'

//Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDlh_7nZYR03vpRjcZvEgi_fTmb4oqjzKs',
    authDomain: 'pakettikauppa-295108.firebaseapp.com',
    databaseURL: 'https://pakettikauppa-295108.firebaseio.com',
    projectId: 'pakettikauppa-295108',
    storageBucket: 'pakettikauppa-295108.appspot.com',
    messagingSenderId: '516972920334',
    appId: '1:516972920334:web:d44aa3ad6d31c94dce865f',
    measurementId: 'G-3FE3EL3FE7',
  })
}

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen(): JSX.Element {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      '516972920334-28iectrmi5aksd36clssbfirlu2hmtp8.apps.googleusercontent.com',
  })

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params
      //     const credential = firebase.auth.GoogleAuthProvider.credential(id_token)
      //     firebase.auth().signInWithCredential(credential)
    }
  }, [response])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login or register with a Google account</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync()
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
