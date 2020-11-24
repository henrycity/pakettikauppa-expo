import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import Colors from '../constants/Colors'
import ScreenNames from '../constants/ScreenNames'
import useActiveScreen from '../hooks/useActiveScreen'
import useColorScheme from '../hooks/useColorScheme'
import { ScreenName } from '../types'
import { View, Text, useThemeColor } from './Themed'

export default function BottomTabBar(): JSX.Element {
  const navigation = useNavigation()

  const { activeScreen, setActiveScreen } = useActiveScreen()

  const handleLinkPress = (screenName: ScreenName) => {
    setActiveScreen(screenName)
    navigation.navigate(screenName)
  }

  return (
    <TabBar>
      <TabBarItem
        text={ScreenNames.Profile}
        active={activeScreen === ScreenNames.Profile}
        onPress={() => handleLinkPress(ScreenNames.Profile)}
      />
      <TabBarItem
        text={ScreenNames.Shipments}
        active={activeScreen === ScreenNames.Shipments}
        onPress={() => {
          setActiveScreen(ScreenNames.Shipments)
          navigation.navigate(ScreenNames.Shipments)
        }}
      />
    </TabBar>
  )
}

interface TabBarProps {
  children: JSX.Element | JSX.Element[]
}

export function TabBar({ children }: TabBarProps): JSX.Element {
  const backgroundColor = useThemeColor({}, 'background')

  return <View style={[styles.tabBar, { backgroundColor }]}>{children}</View>
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
    color: active
      ? Colors[colorScheme].tabIconSelected
      : Colors[colorScheme].tabIconDefault,
  }

  return (
    <TouchableOpacity style={{ height: 40 }} onPress={onPress}>
      <Text
        accessible
        accessibilityLabel={`Tab bar link to ${text}`}
        style={[styles.itemContainer, textStyle]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    flexDirection: 'row' as const,
    alignContent: 'stretch' as const,
    justifyContent: 'space-evenly' as const,
    maxHeight: 50,
  },
  itemContainer: {},
})
