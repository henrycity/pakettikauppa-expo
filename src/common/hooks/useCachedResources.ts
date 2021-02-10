import { Feather, MaterialIcons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react'

import { initializeLocalization } from '../../localization'

export default function useCachedResources(): boolean {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()

        // Load fonts
        await Font.loadAsync({
          ...Feather.font,
          ...MaterialIcons.font,
          Rubik: require('../../assets/fonts/Rubik-Regular.ttf'),
          'Rubik-Bold': require('../../assets/fonts/Rubik-Bold.ttf'),
          'Rubik-Medium': require('../../assets/fonts/Rubik-Medium.ttf'),
          Muli: require('../../assets/fonts/Muli.ttf'),
          'Muli-Bold': require('../../assets/fonts/Muli-Bold.ttf'),
          'Muli-SemiBold': require('../../assets/fonts/Muli-SemiBold.ttf'),
        })

        initializeLocalization()
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
