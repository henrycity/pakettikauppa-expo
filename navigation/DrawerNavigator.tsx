import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet } from 'react-native'

import DrawerMenu from '../components/DrawerMenu'
import Screens from '../constants/Screens'
import useAuthorization from '../hooks/useAuthorization'
import { useDrawerType } from '../hooks/useDrawer'
import { DrawerParamList } from '../types'
import Navigators from './ScreenNavigators'

const Drawer = createDrawerNavigator<DrawerParamList>()

export default function DrawerNavigator(): JSX.Element {
  const drawerType = useDrawerType()
  const isAuthorized = useAuthorization()

  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerMenu {...props} />}
      drawerType={drawerType}
      drawerStyle={styles.drawer}
    >
      <Drawer.Screen name="Profile" component={Navigators.Profile} />

      {isAuthorized(Screens.Shipments) ? (
        <Drawer.Screen name="Shipments" component={Navigators.Shipments} />
      ) : null}

      {isAuthorized(Screens.Settings) ? (
        <Drawer.Screen name="Settings" component={Navigators.Settings} />
      ) : null}
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  drawer: {
    width: 250,
  },
})
