import { EXPO_LOCAL_ADDRESS, EXPO_LOCAL_IP, EXPO_SERVER } from '@env'
import { Platform } from 'react-native'

export default function server(): string {
  if (__DEV__) {
    if (Platform.OS === 'web') {
      return EXPO_LOCAL_ADDRESS || 'http://localhost:3000'
    } else {
      return EXPO_LOCAL_IP || 'http://localhost:3000'
    }
  } else {
    return EXPO_SERVER
  }
}
