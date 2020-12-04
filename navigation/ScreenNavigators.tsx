import { useFocusEffect } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import MenuButton from '../components/MenuButton'
import Screens from '../constants/Screens'
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
