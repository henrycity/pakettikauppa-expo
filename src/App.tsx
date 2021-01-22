import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AccessProvider } from './authorization/hooks/useAuthorization'
import ConfigSWR from './common/components/ConfigSWR'
import { ActiveScreenContextProvider } from './common/hooks/useActiveScreen'
import useCachedResources from './common/hooks/useCachedResources'
import { DeviceTypeContextProvider } from './common/hooks/useDeviceType'
import { AuthenticationProvider } from './modules/login/hooks/useUser'
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

registerRootComponent(App)
