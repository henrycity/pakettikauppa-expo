import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import ConfigSWR from './ConfigSWR'
import { AuthenticationProvider } from './authentication/useUser'
import { AccessProvider } from './authorization/useAuthorization'
import Navigation from './navigation'
import { ActiveScreenContextProvider } from './tabBar/useActiveScreen'
import useCachedResources from './utils/useCachedResources'
import { DeviceTypeContextProvider } from './utils/useDeviceType'

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
            <AccessProvider>
              <ActiveScreenContextProvider>
                <AuthenticationProvider>
                  <Navigation colorScheme={colorScheme} />
                  <StatusBar />
                </AuthenticationProvider>
              </ActiveScreenContextProvider>
            </AccessProvider>
          </DeviceTypeContextProvider>
        </ConfigSWR>
      </SafeAreaProvider>
    )
  }
}

registerRootComponent(App);
