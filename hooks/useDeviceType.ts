import { DeviceType, getDeviceTypeAsync } from 'expo-device'
import { useEffect, useState } from 'react'

export default function useDeviceType() {
  undefined
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
