import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import DeviceTypeContextProvider from './components/DeviceTypeContextProvider'

export default function App(): null | JSX.Element {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <DeviceTypeContextProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </DeviceTypeContextProvider>
      </SafeAreaProvider>
    )
  }
}
