import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { useColorScheme } from 'react-native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { useThemedColors } from './common/Themed'
import ConfigSWR from './common/components/ConfigSWR'
import { ActiveScreenContextProvider } from './common/hooks/useActiveScreen'
import useCachedResources from './common/hooks/useCachedResources'
import { DeviceTypeContextProvider } from './common/hooks/useDeviceType'
import { AuthenticationProvider } from './modules/login/hooks/useUser'
import Navigation from './navigation'

export default function App(): null | JSX.Element {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()
  const themed = useThemedColors()

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: themed.text,
      surface: themed.background,
    },
  }

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <ConfigSWR>
          <DeviceTypeContextProvider>
            <ActiveScreenContextProvider>
              <AuthenticationProvider>
                <PaperProvider theme={theme}>
                  <Navigation colorScheme={colorScheme} />
                  <StatusBar />
                </PaperProvider>
              </AuthenticationProvider>
            </ActiveScreenContextProvider>
          </DeviceTypeContextProvider>
        </ConfigSWR>
      </SafeAreaProvider>
    )
  }
}

registerRootComponent(App)
