import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { ColorSchemeName, Image } from 'react-native'

import Colors from '../common/Colors'
import { useThemeColor } from '../common/Themed'
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

function LogoTitle() {
  return (
    <Image
      style={{ width: 250, height: 50 }}
      source={require('../assets/images/logo-white.png')}
    />
  )
}
// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
  const { isLoggedIn } = useUser()
  const backgroundColor = useThemeColor(
    {
      light: Colors.light.headerBackground,
      dark: Colors.dark.headerBackground,
    },
    'headerBackground'
  )
  const options = {
    headerTitle: () => <LogoTitle />,
    headerStyle: {
      backgroundColor,
    },
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="Root"
            component={DrawerNavigator}
            options={options}
          />
          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={options}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={options}
          />
        </>
      )}
    </Stack.Navigator>
  )
}
