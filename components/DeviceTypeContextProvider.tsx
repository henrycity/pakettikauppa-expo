import { DeviceType } from 'expo-device'
import React, { createContext } from 'react'

import { _useDeviceType } from '../hooks/useDeviceType'

export const DeviceTypeContext = createContext<DeviceType | null>(null)

interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function DeviceTypeContextProvider({
  children,
}: Props): JSX.Element | null {
  const [loaded, deviceType] = _useDeviceType()
  return loaded ? (
    <DeviceTypeContext.Provider value={deviceType}>
      {children}
    </DeviceTypeContext.Provider>
  ) : null
}
