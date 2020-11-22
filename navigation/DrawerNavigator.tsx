import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet } from 'react-native'

import DrawerMenu from '../components/DrawerMenu'
import { useDrawerType } from '../hooks/useDrawer'
import Navigators from './ScreenNavigators'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
  const drawerType = useDrawerType()
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerMenu {...props} />}
      drawerType={drawerType}
      drawerStyle={{ width: 250 }}
    >
      <Drawer.Screen name="Profile" component={Navigators.Profile} />
      <Drawer.Screen name="Shipments" component={Navigators.Shipments} />
      <Drawer.Screen name="Settings" component={Navigators.Settings} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
})
