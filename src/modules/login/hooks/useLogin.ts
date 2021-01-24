import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthRequestPromptOptions, AuthSessionResult } from 'expo-auth-session'
import * as Google from 'expo-auth-session/providers/google'
import { useEffect } from 'react'
import { Platform } from 'react-native'
import { mutate } from 'swr'

import server, { clientID } from '../../../config'

const serverURL = server()

export default function useLogin(): {
  login: (
    options?: AuthRequestPromptOptions | undefined
  ) => Promise<AuthSessionResult>
  disabled: boolean
} {

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: clientID,
  })

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params
      if (Platform.OS === 'web') {
        handleWebToken(id_token).then(() => mutate('/user'))
      } else {
        handleIOSAndroidToken(id_token).then(() => mutate('/user'))
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
