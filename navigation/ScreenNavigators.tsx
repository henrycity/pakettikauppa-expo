import { Feather } from '@expo/vector-icons'
import { useFocusEffect } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { DeviceType } from 'expo-device'
import React, { useContext, useCallback } from 'react'

import { ActiveScreenContext } from '../components/ActiveScreenContextProvider'
import { DeviceTypeContext } from '../components/DeviceTypeContextProvider'
import Colors from '../constants/Colors'
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
  const deviceType = useContext(DeviceTypeContext)

  const { setActiveScreen } = useContext(ActiveScreenContext)

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
          ...headerOptions(navigation, deviceType),
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
  const deviceType = useContext(DeviceTypeContext)

  const { setActiveScreen } = useContext(ActiveScreenContext)

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
          ...headerOptions(navigation, deviceType),
          headerTitle: 'Shipments',
        }}
      />
    </ShipmentStack.Navigator>
  )
}

function SettingsNavigator({
  navigation,
}: SettingsNavigatorProps): JSX.Element {
  const deviceType = useContext(DeviceTypeContext)

  const { setActiveScreen } = useContext(ActiveScreenContext)

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
          ...headerOptions(navigation, deviceType),
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
      backgroundColor={Colors[colorScheme].background}
      style={{ paddingLeft: 20 }}
      onPress={() => navigation.openDrawer()}
    />
  ) : null
}

function headerOptions(navigation: any, _deviceType: DeviceType | null) {
  return {
    headerTitle: 'Pakettikauppa',
    headerLeft: () => <MenuButton navigation={navigation} />,
  }
}
