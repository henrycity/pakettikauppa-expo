import { Feather } from '@expo/vector-icons'
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet } from 'react-native'

import ScreenNames from '../constants/ScreenNames'
import useActiveScreen from '../hooks/useActiveScreen'
import useDeviceType from '../hooks/useDeviceType'
import { ScreenName } from '../types'
import { View, useThemedColors } from './Themed'

const DrawerMenu = (props: DrawerContentComponentProps): JSX.Element => {
  const { navigation } = props

  const { isDesktop } = useDeviceType()
  const { activeScreen, setActiveScreen } = useActiveScreen()

  const themed = useThemedColors()

  const handleLinkPress = (screenName: ScreenName) => {
    setActiveScreen(screenName)
    navigation.navigate(screenName)
  }

  return (
    <DrawerContentScrollView {...props}>
      {isDesktop ? (
        <DrawerItem
          label={ScreenNames.Profile}
          focused={activeScreen === ScreenNames.Profile}
          onPress={() => handleLinkPress(ScreenNames.Profile)}
          icon={({ color }) => <Feather name="user" size={24} color={color} />}
        />
      ) : null}

      {isDesktop ? (
        <DrawerItem
          label={ScreenNames.Shipments}
          focused={activeScreen === ScreenNames.Shipments}
          onPress={() => handleLinkPress(ScreenNames.Shipments)}
          icon={({ color }) => (
            <Feather name="package" size={24} color={color} />
          )}
        />
      ) : null}

      {isDesktop ? (
        <View
          style={[styles.container, { backgroundColor: themed.background }]}
        >
          <View
            style={styles.separator}
            lightColor={themed.tabIconDefault}
            darkColor={themed.tabIconDefault}
          />
        </View>
      ) : null}

      <DrawerItem
        label={ScreenNames.Settings}
        focused={activeScreen === ScreenNames.Settings}
        onPress={() => handleLinkPress(ScreenNames.Settings)}
        icon={({ color }) => (
          <Feather name="settings" size={24} color={color} />
        )}
      />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default DrawerMenu
