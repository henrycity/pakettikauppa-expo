import { useFocusEffect } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet } from 'react-native'

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
  ScreenName,
} from '../types'

interface ScreenNavigator {
  navigator: () => JSX.Element
  name: ScreenName
}

export const ScreenNavigators: ScreenNavigator[] = [
  {
    navigator: ProfileNavigator,
    name: Screens.Profile,
  },
]

export const RestrictedScreenNavigators: ScreenNavigator[] = [
  {
    navigator: ReportsNavigator,
    name: Screens.Reports,
  },
  {
    navigator: SettingsNavigator,
    name: Screens.Settings,
  },
  {
    navigator: ShipmentNavigator,
    name: Screens.Shipments,
  },
  {
    navigator: StatisticsNavigator,
    name: Screens.Statistics,
  },
]

const ProfileStack = createStackNavigator<ProfileParamList>()

function ProfileNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()
  const { t } = useTranslation()

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
          headerTitle: t('profile'),
        }}
      />
    </ProfileStack.Navigator>
  )
}

const ReportsStack = createStackNavigator<ReportsParamList>()

function ReportsNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()
  const { t } = useTranslation()

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
          headerTitle: t('reports'),
        }}
      />
    </ReportsStack.Navigator>
  )
}

const SettingsStack = createStackNavigator<SettingsParamList>()

function SettingsNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()
  const { t } = useTranslation()

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
          headerTitle: t('settings'),
        }}
      />
    </SettingsStack.Navigator>
  )
}

const ShipmentStack = createStackNavigator<ShipmentsParamList>()

function ShipmentNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()
  const { t } = useTranslation()

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
          headerTitle: t('shipments'),
        }}
      />
    </ShipmentStack.Navigator>
  )
}

const StatisticsStack = createStackNavigator<StatisticsParamList>()

function StatisticsNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()
  const { t } = useTranslation()

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
          headerTitle: t('statistics'),
        }}
      />
    </StatisticsStack.Navigator>
  )
}

export const navStyles = StyleSheet.create({
  header: {
    height: 80,
  },
})

const headerOptions = {
  headerLeft: () => <MenuButton />,
  headerStyle: navStyles.header,
}
