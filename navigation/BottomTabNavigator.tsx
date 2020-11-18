import { Ionicons, Entypo, Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerActions } from '@react-navigation/drawer'
import { Button } from 'react-native'
import { DeviceType } from 'expo-device'
import * as React from 'react'

import HeaderLinks from '../components/HeaderLinks'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import useDeviceType from '../hooks/useDeviceType'
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
  const [loaded, deviceType] = useDeviceType()
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
  const [loaded, deviceType] = useDeviceType()

  // Don't touch! Makes headerlinks not flash on mobile :)
  let headerData = loaded
    ? deviceType !== DeviceType.PHONE
      ? {
          ...headerOptions(navigation),
          headerRight: () => <HeaderLinks navigation={navigation} />,
        }
      : { ...headerOptions(navigation) }
    : { ...headerOptions(navigation) }

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={headerData}
      />
    </HomeStack.Navigator>
  )
}

const ShipmentStack = createStackNavigator<ShipmentParamList>()

function ShipmentNavigator({ navigation }) {
  const [loaded, deviceType] = useDeviceType()

  // Don't touch! Makes headerlinks not flash on mobile :)
  let headerData = loaded
    ? deviceType !== DeviceType.PHONE
      ? {
          ...headerOptions(navigation),
          headerRight: () => <HeaderLinks navigation={navigation} />,
        }
      : { ...headerOptions(navigation) }
    : { ...headerOptions(navigation) }

  return (
    <ShipmentStack.Navigator>
      <ShipmentStack.Screen
        name="Shipments"
        component={ShipmentScreen}
        options={headerData}
      />
    </ShipmentStack.Navigator>
  )
}

const ProfileStack = createStackNavigator<ProfileParamList>()

function ProfileNavigator({ navigation }) {
  const [loaded, deviceType] = useDeviceType()

  // Don't touch! Makes headerlinks not flash on mobile :)
  let headerData = loaded
    ? deviceType !== DeviceType.PHONE
      ? {
          ...headerOptions(navigation),
          headerRight: () => <HeaderLinks navigation={navigation} />,
        }
      : { ...headerOptions(navigation) }
    : { ...headerOptions(navigation) }

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={headerData}
      />
    </ProfileStack.Navigator>
  )
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

function headerOptions(navigation) {
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
  }
}
