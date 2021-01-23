import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'

import LoginScreen from '../modules/login/LoginScreen'
import useUser from '../modules/login/hooks/useUser'
import { RootStackParamList } from '../types'
import LinkingConfiguration from './LinkingConfiguration'
import NotFoundScreen from './NotFoundScreen'
import DrawerNavigator from './components/DrawerNavigator'

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName
}): JSX.Element {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
  const { isLoggedIn } = useUser()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {true ? (
        <>
          <Stack.Screen name="Root" component={DrawerNavigator} />
          <Stack.Screen name="NotFound" component={NotFoundScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="login" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}
