import React from 'react'
import { TouchableOpacity } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { View, Text } from './Themed'

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
    color: active ? 'blue' : Colors[colorScheme].tabIconDefault,
  }

  return (
    <TouchableOpacity style={{ height: 40 }} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}
