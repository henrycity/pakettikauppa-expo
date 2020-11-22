import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { View, Text } from './Themed'

export function TabBar({ children }) {
  const colorScheme = useColorScheme()
  const barStyle = {
    flex: 1,
    flexDirection: 'row' as const,
    alignContent: 'stretch' as const,
    justifyContent: 'space-evenly' as const,
    backgroundColor: Colors[colorScheme].drawerBackground,
    maxHeight: 50,
  }
  return <View style={barStyle}>{children}</View>
}

export function TabBarItem({ text, onPress, active }) {
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
