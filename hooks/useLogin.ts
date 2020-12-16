import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Google from 'expo-auth-session/providers/google'
import { useEffect } from 'react'
import { Platform } from 'react-native'
import { mutate } from 'swr'

import server from '../constants/config'

const serverURL = server()

export default function useLogin(): object {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: process.env.EXPO_FIREBASE_CLIENT_ID,
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
  return fetch(`${serverURL}/login`, {
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
