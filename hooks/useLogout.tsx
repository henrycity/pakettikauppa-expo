import { AsyncStorage, Platform } from 'react-native'
import { mutate } from 'swr'

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
  return fetch('http://localhost:3000/logout', {
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
