import { Ionicons, Entypo, Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { DeviceType } from 'expo-device'
import React, { useContext } from 'react'

import { AuthorizationContext } from '../components/AuthorizationContextProvider'
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

export default function BottomTabNavigator({ navigation }): JSX.Element {
  const colorScheme = useColorScheme()
  const isAuthorized = useContext(AuthorizationContext)
  const deviceType = useContext(DeviceTypeContext)
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

        {isAuthorized('Profile') ? (
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ ...HeaderOptions(navigation) }}
          />
        ) : null}

        {isAuthorized('Shipments') ? (
          <Stack.Screen
            name="Shipments"
            component={ShipmentScreen}
            options={{ ...HeaderOptions(navigation) }}
          />
        ) : null}
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

        {isAuthorized('Profile') ? (
          <BottomTab.Screen
            name="Profile"
            component={ProfileNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="md-person" size={24} color={color} />
              ),
            }}
          />
        ) : null}

        {isAuthorized('Shipments') ? (
          <BottomTab.Screen
            name="Shipments"
            component={ShipmentNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <Feather name="package" size={24} color={color} />
              ),
            }}
          />
        ) : null}
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
  const deviceType = useContext(DeviceTypeContext)
  return {
    headerTitle: 'Pakettikauppa',
    headerRight: () =>
      deviceType !== DeviceType.PHONE ? (
        <HeaderLinks navigation={navigation} />
      ) : null,
    headerLeft: null,
  }
}
