import {
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer'
import { StackNavigationProp } from '@react-navigation/stack'

import ScreenNames from './constants/ScreenNames'

// Data

export type User = {
  id: number
  username: string
  merchants: Merchant[]
  roles: Role[]
}

export type Merchant = {
  users: User[]
  roles: Role[]
}

export type Role = {
  roleName: string
  permissions: Permission[]
}

export interface Permission {
  screen: Screen
}

// React

export type RootStackParamList = {
  Root: undefined
  NotFound: undefined
  Login: undefined
}

export type DrawerParamList = {
  Profile: undefined
  Shipments: undefined
  Settings: undefined
}

export type DrawerMenuProps = DrawerScreenProps<DrawerParamList>

export type DrawerMenuNavigationProp = DrawerNavigationProp<DrawerParamList>

export type ScreenParamList = {
  ProfileScreen: undefined
  ShipmentsScreen: undefined
  SettingsScreen: undefined
}

export type ProfileParamList = {
  ProfileScreen: undefined
}
export type ProfileNavigationProp = StackNavigationProp<
  ProfileParamList,
  'ProfileScreen'
>
export type ProfileNavigatorProps = {
  navigation: ProfileNavigationProp
}

export type ShipmentsParamList = {
  ShipmentsScreen: undefined
}
export type ShipmentsNavigationProp = StackNavigationProp<
  ShipmentsParamList,
  'ShipmentsScreen'
>
export type ShipmentsNavigatorProps = {
  navigation: ShipmentsNavigationProp
}

export type SettingsParamList = {
  SettingsScreen: undefined
}

export type SettingsNavigationProp = StackNavigationProp<
  SettingsParamList,
  'SettingsScreen'
>

export type SettingsNavigatorProps = {
  navigation: SettingsNavigationProp
}

export type ScreenStackNavigationProp =
  | ProfileNavigationProp
  | ShipmentsNavigationProp
  | SettingsNavigationProp

export type ScreenStackNavigatorProps = {
  navigation: ScreenStackNavigationProp
}

export type ScreenName = keyof typeof ScreenNames
