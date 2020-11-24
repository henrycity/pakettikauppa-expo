import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

import Colors from '../constants/Colors'
import useActiveScreen from '../hooks/useActiveScreen'
import useColorScheme from '../hooks/useColorScheme'
import { View, Text } from './Themed'

export default function BottomTabBar(): JSX.Element {
  const navigation = useNavigation()

  const { activeScreen, setActiveScreen } = useActiveScreen()

  return (
    <TabBar>
      <TabBarItem
        text="Profile"
        active={activeScreen === 'profile'}
        onPress={() => {
          setActiveScreen('profile')
          navigation.navigate('Profile')
        }}
      />
      <TabBarItem
        text="Shipments"
        active={activeScreen === 'shipments'}
        onPress={() => {
          setActiveScreen('shipments')
          navigation.navigate('Shipments')
        }}
      />
    </TabBar>
  )
}

interface TabBarProps {
  children: JSX.Element | JSX.Element[]
}

export function TabBar({ children }: TabBarProps): JSX.Element {
  const colorScheme = useColorScheme()
  const barStyle = {
    flex: 1,
    flexDirection: 'row' as const,
    alignContent: 'stretch' as const,
    justifyContent: 'space-evenly' as const,
    backgroundColor: Colors[colorScheme].background,
    maxHeight: 50,
  }
  return <View style={barStyle}>{children}</View>
}

interface TabBarItemProps {
  text: string
  onPress: () => void
  active: boolean
}

export function TabBarItem({
  text,
  onPress,
  active,
}: TabBarItemProps): JSX.Element {
  const colorScheme = useColorScheme()

  const textStyle = {
    color: active ? '#3b79ff' : Colors[colorScheme].tabIconDefault,
  }

  return (
    <TouchableOpacity style={{ height: 40 }} onPress={onPress}>
      <Text
        accessible
        accessibilityLabel={`Tab bar link to ${text}`}
        style={textStyle}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}
