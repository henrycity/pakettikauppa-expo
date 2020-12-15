import { Platform } from 'react-native'

export default function server(): string {
  if (__DEV__) {
    if (Platform.OS === 'web') {
      return 'http://localhost:3000'
    } else {
      //your expo ip address here
      return 'http://192.168.1.7:3000'
    }
  } else {
    return 'https://pk-aalto.setamies.com'
  }
}
