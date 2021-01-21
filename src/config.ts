import { Platform } from 'react-native'
//console.log(EXPO_LOCAL_ADDRESS)
export default function server(): string {
  if (__DEV__) {
    if (Platform.OS === 'web') {
      return 'http://localhost:3000'
    } else {
      return (
        process.env.EXPO_DEV_SERVER_MOBILE ?? 'https://pk-aalto.setamies.com'
      )
    }
  } else {
    return 'https://pk-aalto.setamies.com'
  }
}

export const clientID =
  '516972920334-28iectrmi5aksd36clssbfirlu2hmtp8.apps.googleusercontent.com'
