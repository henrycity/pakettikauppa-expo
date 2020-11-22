import { DeviceType } from 'expo-device'
import React, { createContext } from 'react'

import useDeviceType from '../hooks/useDeviceType'

export const DeviceTypeContext = createContext<DeviceType | null>(null)

interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function DeviceTypeContextProvider({
  children,
}: Props): JSX.Element {
  const [loaded, deviceType] = useDeviceType()
  return loaded ? (
    <DeviceTypeContext.Provider value={deviceType}>
      {children}
    </DeviceTypeContext.Provider>
  ) : null
}
