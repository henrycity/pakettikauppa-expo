import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity, StyleSheet } from 'react-native'

import useUser from '../../modules/login/hooks/useUser'
import ScreenNames from '../../navigation/ScreenNames'
import { ScreenName } from '../../types'
import Colors from '../Colors'
import Styles from '../Styles'
import { View, Text, useThemeColor, useThemedColors } from '../Themed'
import useActiveScreen from '../hooks/useActiveScreen'
import useColorScheme from '../hooks/useColorScheme'

export default function BottomTabBar(): JSX.Element {
  const navigation = useNavigation()

  const { activeScreen, setActiveScreen } = useActiveScreen()

  const { isAuthorized } = useUser()
  const { t } = useTranslation()

  const handleLinkPress = (
    screenName: ScreenName,
    navOptions?: { screen: string }
  ) => {
    setActiveScreen(screenName)
    navigation.navigate(screenName, navOptions)
  }

  return (
    <TabBar>
      <TabBarItem
        text={t('profile')}
        active={activeScreen === ScreenNames.Profile}
        iconName="user"
        onPress={() => handleLinkPress(ScreenNames.Profile)}
      />

      <>
        {isAuthorized(ScreenNames.Shipments) && (
          <TabBarItem
            text={t('shipments')}
            iconName="truck"
            active={activeScreen === ScreenNames.Shipments}
            onPress={() =>
              handleLinkPress(ScreenNames.Shipments, {
                screen: 'ShipmentsScreen',
              })
            }
          />
        )}
      </>
      <>
        {isAuthorized(ScreenNames.Reports) && (
          <TabBarItem
            text={t('reports')}
            iconName="book-open"
            active={activeScreen === ScreenNames.Reports}
            onPress={() => handleLinkPress(ScreenNames.Reports)}
          />
        )}
      </>
      <>
        {isAuthorized(ScreenNames.Statistics) && (
          <TabBarItem
            text={t('statistics')}
            iconName="activity"
            active={activeScreen === ScreenNames.Statistics}
            onPress={() => handleLinkPress(ScreenNames.Statistics)}
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
  const backgroundColor = useThemeColor({}, 'bottomTabBackground')

  return <View style={[styles.tabBar, { backgroundColor }]}>{children}</View>
}

interface TabBarItemProps {
  text: string
  onPress: () => void
  active: boolean
  iconName: string
}

export function TabBarItem({
  text,
  onPress,
  active,
  iconName,
}: TabBarItemProps): JSX.Element {
  const colorScheme = useColorScheme()
  const themed = useThemedColors()

  const textStyle = {
    color: active
      ? Colors[colorScheme].tabIconSelected
      : Colors[colorScheme].tabIconDefault,
  }
  const borderStyle = {
    width: active ? 2 : 0,
  }

  const iconStyle = {
    color: active ? themed.bottomIcon : themed.drawerBackground,
    backgroundColor: active ? themed.drawerBackground : themed.bottomIcon,
  }

  return (
    <TouchableOpacity
      style={[
        styles.item,
        { borderColor: themed.bottomBorderColor },
        { borderWidth: borderStyle.width },
        { backgroundColor: iconStyle.backgroundColor },
      ]}
      onPress={onPress}
    >
      <Feather
        name={iconName}
        style={styles.item}
        size={29}
        color={iconStyle.color}
      />
      <Text
        accessible
        accessibilityLabel={`Tab bar link to ${text}`}
        style={[Styles.bottomTabLabel, { color: textStyle.color }]}
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
    height: 50,
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
})
