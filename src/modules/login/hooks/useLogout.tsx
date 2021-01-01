import AsyncStorage from '@react-native-async-storage/async-storage'
import { Platform } from 'react-native'
import { mutate } from 'swr'

import server from '../../../config'

const serverURL = server()

export default function useLogout(): Function {
  function logout() {
    if (Platform.OS === 'web') {
      handleWebLogout().then(() => mutate('/user'))
    } else {
      handleMobileLogout().then(() => mutate('/user'))
    }
  }
  return logout
}

function handleWebLogout() {
  return fetch(`${serverURL}/logout`, {
    credentials: 'include',
    method: 'POST',
  }).then((response) => response.json())
}

function handleMobileLogout() {
  try {
    return AsyncStorage.removeItem('token')
  } catch (e) {
    throw new Error(e)
  }
}
