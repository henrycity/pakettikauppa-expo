import { DeviceType } from 'expo-device'

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
