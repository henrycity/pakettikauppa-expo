import { Ionicons, Entypo } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import HeaderLinks from '../components/HeaderLinks'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import HomeTab from '../screens/HomeTab'
import ProfileTab from '../screens/ProfileTab'
import { osName } from 'react-device-detect'
import {
  BottomTabParamList,
  HomeTabParamList,
  ProfileTabParamList,
  TabOneParamList,
  TabTwoParamList,
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
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-person" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
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

const HomeTabStack = createStackNavigator<HomeTabParamList>()

function HomeTabNavigator({ navigation }) {
  osName == 'Linux' || osName == 'Windows'
    ? navigation.setOptions({ tabBarVisible: false })
    : 1
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{ ...headerOptions(navigation) }}
      />
    </HomeTabStack.Navigator>
  )
}

const ProfileTabStack = createStackNavigator<ProfileTabParamList>()

function ProfileTabNavigator({ navigation }) {
  osName == 'Linux' || osName == 'Windows'
    ? navigation.setOptions({ tabBarVisible: false })
    : 1
  return (
    <ProfileTabStack.Navigator>
      <ProfileTabStack.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{ ...headerOptions(navigation) }}
      />
    </ProfileTabStack.Navigator>
  )
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>()

function TabOneNavigator({ navigation }) {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ ...headerOptions(navigation) }}
      />
    </TabOneStack.Navigator>
  )
}

const TabTwoStack = createStackNavigator<TabTwoParamList>()

function TabTwoNavigator({ navigation }) {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ ...headerOptions(navigation) }}
      />
    </TabTwoStack.Navigator>
  )
}

function headerOptions(navigation) {
  return {
    headerTitle: 'Pakettikauppa',
    headerRight: () =>
      osName == 'Windows' || osName == 'Linux' ? (
        <HeaderLinks navigation={navigation} />
      ) : null,
  }
}
