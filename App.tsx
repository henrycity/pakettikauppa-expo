import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { ActiveScreenContextProvider } from './hooks/useActiveScreen'
import ConfigSWR from './components/ConfigSWR'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import { DeviceTypeContextProvider } from './hooks/useDeviceType'
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
          <DeviceTypeContextProvider>
            <ActiveScreenContextProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </ActiveScreenContextProvider>
          </DeviceTypeContextProvider>
        </ConfigSWR>
      </SafeAreaProvider>
    )
  }
}
