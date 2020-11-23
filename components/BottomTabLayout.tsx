import { useNavigation } from '@react-navigation/native'
import { DeviceType } from 'expo-device'
import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'

import { DeviceTypeContext } from '../components/DeviceTypeContextProvider'
import { ActiveScreenContext } from './ActiveScreenContextProvider'
import { TabBar, TabBarItem } from './TabBar'
import { View } from './Themed'

interface BottomTabLayoutProps {
  children: JSX.Element | JSX.Element[]
}

export default function BottomTabLayout({
  children,
}: BottomTabLayoutProps): JSX.Element {
  const navigation = useNavigation()

  const { activeScreen, setActiveScreen } = useContext(ActiveScreenContext)
  const deviceType = React.useContext(DeviceTypeContext)

  return (
    <View style={styles.tabBarContainer}>
      {children}

      {deviceType === DeviceType.PHONE || deviceType === DeviceType.TABLET ? (
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
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
})
