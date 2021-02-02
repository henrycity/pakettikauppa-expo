import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity, StyleSheet } from 'react-native'

import useUser from '../../modules/login/hooks/useUser'
import ScreenNames from '../../navigation/ScreenNames'
import { ScreenName } from '../../types'
import Colors from '../Colors'
import { View, Text, useThemeColor } from '../Themed'
import useActiveScreen from '../hooks/useActiveScreen'
import useColorScheme from '../hooks/useColorScheme'

export default function BottomTabBar(): JSX.Element {
  const navigation = useNavigation()

  const { activeScreen, setActiveScreen } = useActiveScreen()

  const { isAuthorized } = useUser()
  const { t } = useTranslation()

  const handleLinkPress = (screenName: ScreenName) => {
    setActiveScreen(screenName)
    navigation.navigate(screenName)
  }

  return (
    <TabBar>
      <TabBarItem
        text={t('profile')}
        active={activeScreen === ScreenNames.Profile}
        onPress={() => handleLinkPress(ScreenNames.Profile)}
      />

      <>
        {isAuthorized(ScreenNames.Shipments) && (
          <TabBarItem
            text={t('shipments')}
            active={activeScreen === ScreenNames.Shipments}
            onPress={() => handleLinkPress(ScreenNames.Shipments)}
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
    <TouchableOpacity onPress={onPress}>
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
  },
  itemContainer: {},
})
