import {
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer'
import { StackNavigationProp } from '@react-navigation/stack'

import Screens from './constants/Screens'

export type RootStackParamList = {
  Root: undefined
  NotFound: undefined
}

export type DrawerParamList = {
  Profile: undefined
  Reports: undefined
  Settings: undefined
  Shipments: undefined
  Statistics: undefined
}

export type DrawerMenuProps = DrawerScreenProps<DrawerParamList>

export type DrawerMenuNavigationProp = DrawerNavigationProp<DrawerParamList>

export type ScreenParamList = {
  ProfileScreen: undefined
  ReportsScreen: undefined
  SettingsScreen: undefined
  ShipmentsScreen: undefined
  StatisticsScreen: undefined
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

export type ReportsParamList = {
  ReportsScreen: undefined
}
export type ReportsNavigationProp = StackNavigationProp<
  ReportsParamList,
  'ReportsScreen'
>
export type ReportsNavigatorProps = {
  navigation: ReportsNavigationProp
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

export type StatisticsParamList = {
  StatisticsScreen: undefined
}
export type StatisticsNavigationProp = StackNavigationProp<
  StatisticsParamList,
  'StatisticsScreen'
>
export type StatisticsNavigatorProps = {
  navigation: ShipmentsNavigationProp
}

export type ScreenName = keyof typeof Screens
