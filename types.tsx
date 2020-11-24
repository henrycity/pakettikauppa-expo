import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import ScreenNames from './constants/ScreenNames'

export type RootStackParamList = {
  Root: undefined
  NotFound: undefined
}

// Drawer navigator props
export type DrawerParamList = {
  Profile: undefined
  Shipments: undefined
  Settings: undefined
}
export type ProfileDrawerNavigationProp = DrawerNavigationProp<
  DrawerParamList,
  'Profile'
>
export type ProfileDrawerNavigatorProps = {
  navigation: ProfileDrawerNavigationProp
}
export type ShipmentDrawerNavigationProp = DrawerNavigationProp<
  DrawerParamList,
  'Profile'
>
export type ShipmentDrawerNavigatorProps = {
  navigation: ShipmentDrawerNavigationProp
}
export type SettingsDrawerNavigationProp = DrawerNavigationProp<
  DrawerParamList,
  'Profile'
>
export type SettingsDrawerNavigatorProps = {
  navigation: SettingsDrawerNavigationProp
}

// Profile stack navigator props
export type ProfileParamList = {
  ProfileScreen: undefined
}
export type ProfileScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ProfileParamList, 'ProfileScreen'>,
  ProfileDrawerNavigationProp
>
export type ProfileNavigatorProps = {
  navigation: ProfileScreenNavigationProp
}

// Shipment stack navigator props
export type ShipmentParamList = {
  ShipmentScreen: undefined
}
export type ShipmentScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ShipmentParamList, 'ShipmentScreen'>,
  ShipmentDrawerNavigationProp
>
export type ShipmentNavigatorProps = {
  navigation: ShipmentScreenNavigationProp
}

// Settings stack navigator props
export type SettingsParamList = {
  SettingsScreen: undefined
}
export type SettingsScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<SettingsParamList, 'SettingsScreen'>,
  SettingsDrawerNavigationProp
>
export type SettingsNavigatorProps = {
  navigation: SettingsNavigatorProps
}

export type ScreenName = keyof typeof ScreenNames
