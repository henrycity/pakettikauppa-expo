import { DeviceType, getDeviceTypeAsync } from 'expo-device'
import { useEffect, useState } from 'react'

export default function useDeviceType(): [boolean, DeviceType | null] {
  const [loaded, setLoaded] = useState(false)
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null)

  useEffect(() => {
    try {
      getDeviceTypeAsync().then((type) => {
        setDeviceType(type)
        setLoaded(true)
      })
    } catch (error) {
      console.log('error', error)
    }
  }, [])

  return [loaded, deviceType]
}
