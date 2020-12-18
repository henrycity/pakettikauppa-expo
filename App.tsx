import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import ConfigSWR from './components/ConfigSWR'
import { ActiveScreenContextProvider } from './hooks/useActiveScreen'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import { DeviceTypeContextProvider } from './hooks/useDeviceType'
import { AuthenticationProvider } from './hooks/useUser'
import Navigation from './navigation'

export default function App(): null | JSX.Element {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <DeviceTypeContextProvider>
          <ActiveScreenContextProvider>
            <ConfigSWR>
              <AuthenticationProvider>
                <Navigation colorScheme={colorScheme} />
                <StatusBar />
              </AuthenticationProvider>
            </ConfigSWR>
          </ActiveScreenContextProvider>
        </DeviceTypeContextProvider>
      </SafeAreaProvider>
    )
  }
}
