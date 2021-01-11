import { EXPO_LOCAL_ADDRESS, EXPO_LOCAL_IP, EXPO_SERVER } from '@env'
import { Platform } from 'react-native'

export default function server(): string {
  if (__DEV__) {
    if (Platform.OS === 'web') {
      return EXPO_LOCAL_ADDRESS
    } else {
      return EXPO_LOCAL_IP
    }
  } else {
    return EXPO_SERVER
  }
}
