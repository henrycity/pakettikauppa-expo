import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import firebase from 'firebase'
import { useEffect } from 'react'
import { Platform } from 'react-native'
import { mutate } from 'swr'

import server from '../constants/config'

const serverURL = server()

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

export default function useLogin(): object {
  WebBrowser.maybeCompleteAuthSession()

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      '516972920334-28iectrmi5aksd36clssbfirlu2hmtp8.apps.googleusercontent.com',
  })

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params
      if (Platform.OS === 'web') {
        handleWebToken(id_token).then(() => mutate('/user'))
        // We need to tell swr to revalidate the user / login status after saving then token
        //.then(() => mutate('/user'))
      } else {
        handleIOSAndroidToken(id_token).then(() => mutate('/user'))
        // We need to tell swr to revalidate the user / login status after saving then token
        //.then(() => mutate('/user'))
      }
    }
  }, [response])

  return { login: promptAsync, disabled: !request }
}

function handleWebToken(idToken: string): Promise<object> {
  // fetch request to /login etc
  return fetch(`${server}/login`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ idToken }),
  }).then((response) => response.json())
}

export function handleIOSAndroidToken(idToken: string): Promise<void> {
  try {
    return AsyncStorage.setItem('token', idToken)
  } catch (e) {
    throw new Error(e)
  }
}
