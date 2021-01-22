import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { useColorScheme } from 'react-native'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
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

  const paperTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      color: 'white',
    },
  }

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={paperTheme}>
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
        </PaperProvider>
      </SafeAreaProvider>
    )
  }
}

registerRootComponent(App)
