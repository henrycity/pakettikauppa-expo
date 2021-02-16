import {
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer'
import { RouteProp, CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import ScreenNames from './navigation/ScreenNames'

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

export interface Shipment {
  // Metadata
  id: number
  createdOn: string
  // Shipping Address
  receiverName: string
  receiverEmail: string
  receiverPostCode: string // This could be a number but this seems more consistent
  receiverCity: string
  receiverCountry: string
  // Other
  price: number
  deliveryCompany: string
  status: string
  reference: string
  latestEvent: string
  invoiceNumber: string
  shippingMethod: string
}

export interface FullShipment {
  // metadata
  createdOn: string
  id: number
  // sender
  businessID: string
  senderName: string
  senderAddress: string
  senderCountry: string
  senderPostCode: string
  senderCity: string
  senderPhoneNumber: string
  senderEmail: string
  // receiver
  receiverAddress: string
  receiverCity: string
  receiverCountry: string
  receiverEmail: string
  receiverName: string
  receiverPhoneNumber: string
  receiverPostCode: string
  //other
  description: string
  invoiceNumber: string
  reference: string
  deliveryCompany: string
  shippingMethod: string
  weight: string
  latestEvent: string
  status: string
  price: string
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
  DetailsScreen: { id?: string | number; shipment?: Shipment }
  AddShipmentsScreen: undefined
}

export type ShipmentsNavigationProp = StackNavigationProp<
  ShipmentsParamList,
  'ShipmentsScreen'
>

export type DetailsNavigationProp = StackNavigationProp<
  ShipmentsParamList,
  'DetailsScreen'
>

export type ShipmentDetailsRouteProp = RouteProp<
  ShipmentsParamList,
  'DetailsScreen'
>

export type ShipmentsNavigatorProps = {
  navigation: CompositeNavigationProp<
    ShipmentsNavigationProp,
    DetailsNavigationProp
  >
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
