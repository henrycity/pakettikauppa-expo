import { DeviceType } from 'expo-device'

import { useDeviceReturnType } from '../useDeviceType'

export default function useDeviceType(): useDeviceReturnType {
  const env = process.env.TEST_ENV
  if (env == 'mobile') return { isDesktop: false, isMobile: true }
  else return { isDesktop: true, isMobile: false }
}

export function _useDeviceType(): [boolean, DeviceType | null] {
  let deviceType: DeviceType
  switch (process.env.TEST_ENV) {
    case 'app':
      deviceType = DeviceType.PHONE
      break
    case 'web':
      deviceType = DeviceType.DESKTOP
      break
    default:
      deviceType = DeviceType.DESKTOP
      break
  }

  return [true, deviceType]
}
