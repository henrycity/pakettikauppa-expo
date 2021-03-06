import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import Colors from '../constants/Colors'
import Screens from '../constants/Screens'
import useActiveScreen from '../hooks/useActiveScreen'
import useAuthorization from '../hooks/useAuthorization'
import useColorScheme from '../hooks/useColorScheme'
import { ScreenName } from '../types'
import { View, Text, useThemeColor } from './Themed'

export default function BottomTabBar(): JSX.Element {
  const navigation = useNavigation()

  const { activeScreen, setActiveScreen } = useActiveScreen()

  const isAuthorized = useAuthorization()

  const handleLinkPress = (screenName: ScreenName) => {
    setActiveScreen(screenName)
    navigation.navigate(screenName)
  }

  return (
    <TabBar>
      <TabBarItem
        text={Screens.Profile}
        active={activeScreen === Screens.Profile}
        onPress={() => handleLinkPress(Screens.Profile)}
      />

      <>
        {isAuthorized(Screens.Shipments) && (
          <TabBarItem
            text={Screens.Shipments}
            active={activeScreen === Screens.Shipments}
            onPress={() => handleLinkPress(Screens.Shipments)}
          />
        )}
      </>
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
    flexDirection: 'row',
    alignContent: 'stretch',
    justifyContent: 'space-evenly',
    maxHeight: 50,
  },
  itemContainer: {},
})
