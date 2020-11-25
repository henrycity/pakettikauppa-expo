import { useFocusEffect } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useCallback } from 'react'

import MenuButton from '../components/MenuButton'
import ScreenNames from '../constants/ScreenNames'
import useActiveScreen from '../hooks/useActiveScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SettingsScreen from '../screens/SettingsScreen'
import ShipmentsScreen from '../screens/ShipmentsScreen'
import {
  ProfileParamList,
  ShipmentsParamList,
  SettingsParamList,
} from '../types'

export default {
  Profile: ProfileNavigator,
  Shipments: ShipmentNavigator,
  Settings: SettingsNavigator,
}

const headerOptions = {
  headerLeft: () => <MenuButton />,
}

const ProfileStack = createStackNavigator<ProfileParamList>()

function ProfileNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()

  useFocusEffect(
    useCallback(() => {
      setActiveScreen(ScreenNames.Profile)
    }, [])
  )

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          ...headerOptions,
          headerTitle: 'Profile',
        }}
      />
    </ProfileStack.Navigator>
  )
}

const ShipmentStack = createStackNavigator<ShipmentsParamList>()

function ShipmentNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()

  useFocusEffect(
    useCallback(() => {
      setActiveScreen(ScreenNames.Shipments)
    }, [])
  )

  return (
    <ShipmentStack.Navigator>
      <ShipmentStack.Screen
        name="ShipmentsScreen"
        component={ShipmentsScreen}
        options={{
          ...headerOptions,
          headerTitle: 'Shipments',
        }}
      />
    </ShipmentStack.Navigator>
  )
}

const SettingsStack = createStackNavigator<SettingsParamList>()

function SettingsNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()

  useFocusEffect(
    useCallback(() => {
      setActiveScreen(ScreenNames.Settings)
    }, [])
  )

  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          ...headerOptions,
          headerTitle: 'Settings',
        }}
      />
    </SettingsStack.Navigator>
  )
}
