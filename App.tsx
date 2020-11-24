import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import DeviceTypeContextProvider from './components/DeviceTypeContextProvider'
import { ActiveScreenContextProvider } from './hooks/useActiveScreen'
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
        <DeviceTypeContextProvider>
          <ActiveScreenContextProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </ActiveScreenContextProvider>
        </DeviceTypeContextProvider>
      </SafeAreaProvider>
    )
  }
}
