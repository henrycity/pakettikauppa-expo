import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AuthorizationContextProvider from './components/AuthorizationContextProvider'
import ConfigSWR from './components/ConfigSWR'
import DeviceTypeContextProvider from './components/DeviceTypeContextProvider'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'

export default function App(): null | JSX.Element {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <ConfigSWR>
          <AuthorizationContextProvider>
            <DeviceTypeContextProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </DeviceTypeContextProvider>
          </AuthorizationContextProvider>
        </ConfigSWR>
      </SafeAreaProvider>
    )
  }
}
