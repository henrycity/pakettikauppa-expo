import { Ionicons, Entypo, Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import HeaderLinks from '../components/HeaderLinks'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ShipmentScreen from '../screens/ShipmentScreen'
import { osName } from 'react-device-detect'
import {
  BottomTabParamList,
  HomeParamList,
  ProfileParamList,
  ShipmentParamList,
} from '../types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator(): JSX.Element {
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

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}

const HomeStack = createStackNavigator<HomeParamList>()

function HomeNavigator({ navigation }) {
  osName == 'Linux' || osName == 'Windows'
    ? navigation.setOptions({ tabBarVisible: false })
    : navigation.setOptions({ tabBarVisible: true })
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ ...headerOptions(navigation) }}
      />
    </HomeStack.Navigator>
  )
}

const ShipmentStack = createStackNavigator<ShipmentParamList>()

function ShipmentNavigator({ navigation }) {
  osName == 'Linux' || osName == 'Windows'
    ? navigation.setOptions({ tabBarVisible: true })
    : navigation.setOptions({ tabBarVisible: true })
  return (
    <ShipmentStack.Navigator>
      <ShipmentStack.Screen
        name="ShipmentScreen"
        component={ShipmentScreen}
        options={{ ...headerOptions(navigation) }}
      />
    </ShipmentStack.Navigator>
  )
}

const ProfileStack = createStackNavigator<ProfileParamList>()

function ProfileNavigator({ navigation }) {
  osName == 'Linux' || osName == 'Windows'
    ? navigation.setOptions({ tabBarVisible: false })
    : navigation.setOptions({ tabBarVisible: true })
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ ...headerOptions(navigation) }}
      />
    </ProfileStack.Navigator>
  )
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

function headerOptions(navigation) {
  return {
    headerTitle: 'Pakettikauppa',
    headerRight: () =>
      osName == 'Windows' || osName == 'Linux' ? (
        <HeaderLinks navigation={navigation} />
      ) : null,
  }
}
