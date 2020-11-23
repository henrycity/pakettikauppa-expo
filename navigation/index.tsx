import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { DeviceType } from 'expo-device'
import * as SecureStore from 'expo-secure-store'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'

import useDeviceType from '../hooks/useDeviceType'
import LoginScreen from '../screens/LoginScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import { RootStackParamList } from '../types'
import BottomTabNavigator from './BottomTabNavigator'
import LinkingConfiguration from './LinkingConfiguration'

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName
}): JSX.Element {
  const [loaded, deviceType] = useDeviceType()
  const [token, setToken] = React.useState<string | null>(null)
  const [isSignedIn, setSignIn] = React.useState<boolean>(false)
  async function getToken() {
    try {
      await SecureStore.getItemAsync('token').then((token) => {
        setToken(token)
        setSignIn(true)
      })
    } catch (e) {
      throw new Error('Oops! There was an error.')
    }
  }
  React.useEffect(() => {
    if (deviceType === DeviceType.PHONE) {
      getToken()
    } else {
      // start web login from here
    }
  }, [])
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {token !== null ? <RootNavigator /> : <Login />}
    </NavigationContainer>
  )
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  )
}

function Login() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={LoginScreen} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  )
}
