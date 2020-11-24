import { Feather } from '@expo/vector-icons'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet } from 'react-native'

import Colors from '../constants/Colors'
import ScreenNames from '../constants/ScreenNames'
import useActiveScreen from '../hooks/useActiveScreen'
import useColorScheme from '../hooks/useColorScheme'
import useDeviceType from '../hooks/useDeviceType'
import { ScreenName, DrawerMenuProps } from '../types'
import { View } from './Themed'

const DrawerMenu = (props: DrawerMenuProps): JSX.Element => {
  const { navigation } = props

  const { isDesktop } = useDeviceType()

  const { activeScreen, setActiveScreen } = useActiveScreen()
  const colorScheme = useColorScheme()
  const backgroundColor = Colors[colorScheme].background
  const containerStyle = {
    flex: 1,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    backgroundColor,
  }

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
        <View style={containerStyle}>
          <View
            style={styles.separator}
            lightColor={Colors[colorScheme].tabIconDefault}
            darkColor={Colors[colorScheme].tabIconDefault}
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
})

export default DrawerMenu
