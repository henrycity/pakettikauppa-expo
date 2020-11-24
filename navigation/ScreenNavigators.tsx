import { Feather } from '@expo/vector-icons'
import { useFocusEffect } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useCallback } from 'react'

import Colors from '../constants/Colors'
import useActiveScreen from '../hooks/useActiveScreen'
import useColorScheme from '../hooks/useColorScheme'
import { useDrawerType } from '../hooks/useDrawer'
import ProfileScreen from '../screens/ProfileScreen'
import SettingsScreen from '../screens/SettingsScreen'
import ShipmentScreen from '../screens/ShipmentScreen'
import {
  ProfileParamList,
  ShipmentParamList,
  SettingsParamList,
  ProfileNavigatorProps,
  ShipmentNavigatorProps,
  SettingsNavigatorProps,
} from '../types'

const SettingsStack = createStackNavigator<SettingsParamList>()

export default {
  Profile: ProfileNavigator,
  Shipments: ShipmentNavigator,
  Settings: SettingsNavigator,
}

const ProfileStack = createStackNavigator<ProfileParamList>()

function ProfileNavigator({ navigation }: ProfileNavigatorProps): JSX.Element {
  const { setActiveScreen } = useActiveScreen()

  useFocusEffect(
    useCallback(() => {
      setActiveScreen('profile')
    }, [])
  )

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          ...headerOptions(navigation),
          headerTitle: 'Profile',
        }}
      />
    </ProfileStack.Navigator>
  )
}

const ShipmentStack = createStackNavigator<ShipmentParamList>()

function ShipmentNavigator({
  navigation,
}: ShipmentNavigatorProps): JSX.Element {
  const { setActiveScreen } = useActiveScreen()

  useFocusEffect(
    useCallback(() => {
      setActiveScreen('shipments')
    }, [])
  )

  return (
    <ShipmentStack.Navigator>
      <ShipmentStack.Screen
        name="ShipmentScreen"
        component={ShipmentScreen}
        options={{
          ...headerOptions(navigation),
          headerTitle: 'Shipments',
        }}
      />
    </ShipmentStack.Navigator>
  )
}

function SettingsNavigator({
  navigation,
}: SettingsNavigatorProps): JSX.Element {
  const { setActiveScreen } = useActiveScreen()

  useFocusEffect(
    useCallback(() => {
      setActiveScreen('settings')
    }, [])
  )

  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          ...headerOptions(navigation),
          headerTitle: 'Settings',
        }}
      />
    </SettingsStack.Navigator>
  )
}

function MenuButton({ navigation }: { navigation: any }) {
  const colorScheme = useColorScheme()
  const drawerType = useDrawerType()
  return drawerType !== 'permanent' ? (
    <Feather.Button
      name="menu"
      color={Colors[colorScheme].tint}
      style={{
        paddingLeft: 20,
        backgroundColor: Colors[colorScheme].background,
      }}
      onPress={() => navigation.openDrawer()}
    />
  ) : null
}

function headerOptions(navigation: any) {
  return {
    headerTitle: 'Pakettikauppa',
    headerLeft: () => <MenuButton navigation={navigation} />,
  }
}
