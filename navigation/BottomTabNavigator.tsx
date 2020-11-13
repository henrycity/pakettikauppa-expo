import { Ionicons, Entypo, Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { DeviceType } from 'expo-device'
import * as React from 'react'

import HeaderLinks from '../components/HeaderLinks'
import Colors from '../constants/Colors'
import useAuthorization from '../hooks/useAuthorization'
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

export default function BottomTabNavigator({ navigation }): JSX.Element {
  const colorScheme = useColorScheme()
  const [diviceTypeLoaded, deviceType] = useDeviceType()
  const { authLoaded, isAuthorized } = useAuthorization()
  if (deviceType !== DeviceType.PHONE) {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        navigationOptions={{ headerLeft: null }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ ...HeaderOptions(navigation) }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ ...HeaderOptions(navigation) }}
        />
        <Stack.Screen
          name="Shipments"
          component={ShipmentScreen}
          options={{ ...HeaderOptions(navigation) }}
        />
      </Stack.Navigator>
    )
  } else {
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
}

const HomeStack = createStackNavigator<HomeParamList>()

function HomeNavigator({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ ...HeaderOptions(navigation) }}
      />
    </HomeStack.Navigator>
  )
}

const ShipmentStack = createStackNavigator<ShipmentParamList>()

function ShipmentNavigator({ navigation }) {
  return (
    <ShipmentStack.Navigator>
      <ShipmentStack.Screen
        name="ShipmentScreen"
        component={ShipmentScreen}
        options={{ ...HeaderOptions(navigation) }}
      />
    </ShipmentStack.Navigator>
  )
}

const ProfileStack = createStackNavigator<ProfileParamList>()

function ProfileNavigator({ navigation }) {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ ...HeaderOptions(navigation) }}
      />
    </ProfileStack.Navigator>
  )
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

function HeaderOptions(navigation) {
  const [loaded, deviceType] = useDeviceType()
  return {
    headerTitle: 'Pakettikauppa',
    headerRight: () =>
      deviceType != DeviceType.PHONE ? (
        <HeaderLinks navigation={navigation} />
      ) : null,
    headerLeft: null,
  }
}
