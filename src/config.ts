import {
  EXPO_DEV_SERVER_WEB,
  EXPO_DEV_SERVER_MOBILE,
  EXPO_PROD_SERVER,
} from '@env'
import { Platform } from 'react-native'

export default function server(): string {
  if (__DEV__) {
    if (Platform.OS === 'web') {
      return EXPO_DEV_SERVER_WEB
    } else {
      return EXPO_DEV_SERVER_MOBILE
    }
  } else {
    return EXPO_PROD_SERVER
  }
}
