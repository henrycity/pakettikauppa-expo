import { DeviceType, getDeviceTypeAsync } from 'expo-device'
import React, { useEffect, useState, useContext, createContext } from 'react'

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

const DeviceTypeContext = createContext<DeviceType | null>(null)

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function DeviceTypeContextProvider({
  children,
}: Props): JSX.Element | null {
  const deviceType = useGetDeviceType()

  return deviceType ? (
    <DeviceTypeContext.Provider value={deviceType}>
      {children}
    </DeviceTypeContext.Provider>
  ) : null
}

function useGetDeviceType(): DeviceType | null {
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
