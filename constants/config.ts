import { Platform } from 'react-native'

export default function server(): string {
  if (__DEV__) {
    if (Platform.OS === 'web') {
      return process.env.EXPO_LOCAL_ADDRESS ?? ''
    } else {
      return process.env.EXPO_LOCAL_IP ?? ''
    }
  } else {
    return process.env.EXPO_SERVER ?? ''
  }
}
