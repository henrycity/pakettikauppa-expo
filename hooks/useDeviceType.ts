import { DeviceType, getDeviceTypeAsync } from 'expo-device'
import { useEffect, useState, useContext } from 'react'

import DeviceTypeContext from '../components/DeviceTypeContext'

export interface useDeviceReturnType {
  isDesktop: boolean
  isMobile: boolean
}

export default function useDeviceType(): useDeviceReturnType {
  const deviceType = useContext(DeviceTypeContext)

  const isDesktop = deviceIsDesktop(deviceType)
  const isMobile = !isDesktop

  return { isDesktop, isMobile }
}

// Used by DeviceTypeContextProvider.tsx
export function _useDeviceType(): DeviceType | null {
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null)

  useEffect(() => {
    getDeviceTypeAsync().then((type) => {
      setDeviceType(type)
    })
  }, [])

  return deviceType
}

function deviceIsDesktop(deviceType: DeviceType | null) {
  return deviceType === DeviceType.DESKTOP || deviceType === DeviceType.TV
}
