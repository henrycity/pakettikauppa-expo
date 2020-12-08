import { useFocusEffect } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useCallback } from 'react'

import MenuButton from '../components/MenuButton'
import Screens from '../constants/Screens'
import useActiveScreen from '../hooks/useActiveScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ReportsScreen from '../screens/ReportsScreen'
import SettingsScreen from '../screens/SettingsScreen'
import ShipmentsScreen from '../screens/ShipmentsScreen'
import StatisticsScreen from '../screens/StatisticsScreen'
import {
  ProfileParamList,
  ShipmentsParamList,
  SettingsParamList,
  StatisticsParamList,
  ReportsParamList,
} from '../types'

export default {
  Profile: ProfileNavigator,
  Reports: ReportsNavigator,
  Settings: SettingsNavigator,
  Shipments: ShipmentNavigator,
  Statistics: StatisticsNavigator,
}

const headerOptions = {
  headerLeft: () => <MenuButton />,
}

const ProfileStack = createStackNavigator<ProfileParamList>()

function ProfileNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()

  useFocusEffect(
    useCallback(() => {
      setActiveScreen(Screens.Profile)
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

const ReportsStack = createStackNavigator<ReportsParamList>()

function ReportsNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()

  useFocusEffect(
    useCallback(() => {
      setActiveScreen(Screens.Reports)
    }, [])
  )

  return (
    <ReportsStack.Navigator>
      <ReportsStack.Screen
        name="ReportsScreen"
        component={ReportsScreen}
        options={{
          ...headerOptions,
          headerTitle: 'Reports',
        }}
      />
    </ReportsStack.Navigator>
  )
}

const SettingsStack = createStackNavigator<SettingsParamList>()

function SettingsNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()

  useFocusEffect(
    useCallback(() => {
      setActiveScreen(Screens.Settings)
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

const ShipmentStack = createStackNavigator<ShipmentsParamList>()

function ShipmentNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()

  useFocusEffect(
    useCallback(() => {
      setActiveScreen(Screens.Shipments)
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

const StatisticsStack = createStackNavigator<StatisticsParamList>()

function StatisticsNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()

  useFocusEffect(
    useCallback(() => {
      setActiveScreen(Screens.Statistics)
    }, [])
  )

  return (
    <StatisticsStack.Navigator>
      <StatisticsStack.Screen
        name="StatisticsScreen"
        component={StatisticsScreen}
        options={{
          ...headerOptions,
          headerTitle: 'Statistics',
        }}
      />
    </StatisticsStack.Navigator>
  )
}
