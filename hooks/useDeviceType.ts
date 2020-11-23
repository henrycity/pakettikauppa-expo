import { DeviceType, getDeviceTypeAsync } from 'expo-device'
import { useEffect, useState, useContext } from 'react'

import { DeviceTypeContext } from '../components/DeviceTypeContextProvider'

export interface useDeviceReturnType {
  isDesktop: boolean
  isMobile: boolean
}

export default function useDeviceType(): useDeviceReturnType {
  const deviceType = useContext(DeviceTypeContext)

  const isDesktop =
    deviceType === DeviceType.DESKTOP || deviceType === DeviceType.TV

  const isMobile =
    deviceType === DeviceType.PHONE ||
    deviceType === DeviceType.TABLET ||
    deviceType === DeviceType.UNKNOWN

  return { isDesktop, isMobile }
}

export function _useDeviceType(): [boolean, DeviceType | null] {
  const [loaded, setLoaded] = useState(false)
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null)

  useEffect(() => {
    getDeviceTypeAsync().then((type) => {
      setDeviceType(type)
      setLoaded(true)
    })
  }, [])

  return [loaded, deviceType]
}
