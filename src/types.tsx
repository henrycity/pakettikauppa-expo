import {
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer'
import { StackNavigationProp } from '@react-navigation/stack'

import ScreenNames from './navigation/ScreenNames'

export interface Shipment {
  // Metadata
  id: number
  createdOn: Date
  // Shipping Address
  receiverName: string
  receiverEmail: string
  postCode: string // This could be a number but this seems more consistent
  postOffice: string
  countryCode: string
  // Other
  price: number
  deliveryCompany: string
  status: string
  reference: string
  latestEvent: string
  invoiceNumber: string
}

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
  login: undefined
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

export type ScreenName = keyof typeof ScreenNames
