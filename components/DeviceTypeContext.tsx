import { DeviceType } from 'expo-device'
import React, { createContext } from 'react'

import { _useDeviceType } from '../hooks/useDeviceType'

const DeviceTypeContext = createContext<DeviceType | null>(null)

export default DeviceTypeContext

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function DeviceTypeContextProvider({
  children,
}: Props): JSX.Element | null {
  const deviceType = _useDeviceType()

  return deviceType ? (
    <DeviceTypeContext.Provider value={deviceType}>
      {children}
    </DeviceTypeContext.Provider>
  ) : null
}
