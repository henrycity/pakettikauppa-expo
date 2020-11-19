import { Ionicons, Entypo, Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerActions } from '@react-navigation/drawer'
import { Button } from 'react-native'
import { DeviceType } from 'expo-device'
import React, { useContext } from 'react'

import { DeviceTypeContext } from '../components/DeviceTypeContextProvider'
import HeaderLinks from '../components/HeaderLinks'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ShipmentScreen from '../screens/ShipmentScreen'

import {
  BottomTabParamList,
  HomeParamList,
  ProfileParamList,
  ShipmentParamList,
} from '../types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export default function BottomTabNavigator({ navigation }): JSX.Element {
  const colorScheme = useColorScheme()
  const deviceType = useContext(DeviceTypeContext)
  if (deviceType !== DeviceType.PHONE) {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="Profile" component={ProfileNavigator} />
        <Drawer.Screen name="Shipments" component={ShipmentNavigator} />
      </Drawer.Navigator>
    )
  } else {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Settings" component={ProfileNavigator} />
      </Drawer.Navigator>
    )
  }
}

function TabNavigator({ navigation }) {
  const colorScheme = useColorScheme()
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-person" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Shipments"
        component={ShipmentNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="package" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

const HomeStack = createStackNavigator<HomeParamList>()

function HomeNavigator({ navigation }) {
  const deviceType = useContext(DeviceTypeContext)

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ ...headerOptions(navigation, deviceType) }}
      />
    </HomeStack.Navigator>
  )
}

const ShipmentStack = createStackNavigator<ShipmentParamList>()

function ShipmentNavigator({ navigation }) {
  const deviceType = useContext(DeviceTypeContext)

  return (
    <ShipmentStack.Navigator>
      <ShipmentStack.Screen
        name="Shipments"
        component={ShipmentScreen}
        options={{ ...headerOptions(navigation, deviceType) }}
      />
    </ShipmentStack.Navigator>
  )
}

const ProfileStack = createStackNavigator<ProfileParamList>()

function ProfileNavigator({ navigation }) {
  const deviceType = useContext(DeviceTypeContext)

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ ...headerOptions(navigation, deviceType) }}
      />
    </ProfileStack.Navigator>
  )
}

function headerOptions(navigation: any, deviceType: DeviceType) {
  return {
    headerTitle: 'Pakettikauppa',
    headerLeft: () => (
      <Feather.Button
        name="menu"
        color="black"
        backgroundColor="white"
        onPress={() => navigation.openDrawer()}
      />
    ),
    headerRight: () =>
      deviceType !== DeviceType.PHONE ? (
        <HeaderLinks navigation={navigation} />
      ) : null,
  }
}
