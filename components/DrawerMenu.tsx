import { Ionicons, Feather } from '@expo/vector-icons'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { DeviceType } from 'expo-device'
import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import useDeviceType from '../hooks/useDeviceType'
import {
  ShipmentDrawerNavigatorProps,
  SettingsDrawerNavigatorProps,
  ProfileDrawerNavigatorProps,
} from '../types'
import { ActiveScreenContext } from './ActiveScreenContextProvider'
import { View } from './Themed'

const DrawerMenu = (props: any): JSX.Element => {
  const {
    navigation,
  }:
    | ProfileDrawerNavigatorProps
    | ShipmentDrawerNavigatorProps
    | SettingsDrawerNavigatorProps = props

  const { isDesktop } = useDeviceType()

  const { activeScreen, setActiveScreen } = useContext(ActiveScreenContext)
  const colorScheme = useColorScheme()
  const backgroundColor = Colors[colorScheme].background
  const containerStyle = {
    flex: 1,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    backgroundColor,
  }

  return (
    <DrawerContentScrollView {...props}>
      {isDesktop ? (
        <DrawerItem
          label="Profile"
          focused={activeScreen === 'profile'}
          onPress={() => {
            setActiveScreen('profile')
            navigation.navigate('Profile')
          }}
          icon={({ color }) => (
            <Ionicons name="md-person" size={24} color={color} />
          )}
        />
      ) : null}

      {isDesktop ? (
        <DrawerItem
          label="Shipments"
          focused={activeScreen === 'shipments'}
          onPress={() => {
            setActiveScreen('shipments')
            navigation.navigate('Shipments')
          }}
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
        label="Settings"
        focused={activeScreen === 'settings'}
        onPress={() => {
          setActiveScreen('settings')
          navigation.navigate('Settings')
        }}
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
