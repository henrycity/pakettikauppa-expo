import React from 'react'
import { Platform } from 'react-native'

import ConfigSWRNative from './ConfigSWRNative'
import ConfigSWRWeb from './ConfigSWRWeb'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function ({ children }: Props) {
  const isWeb = Platform.OS === 'web'
  return isWeb ? (
    <ConfigSWRWeb>{children}</ConfigSWRWeb>
  ) : (
    <ConfigSWRNative>{children}</ConfigSWRNative>
  )
}