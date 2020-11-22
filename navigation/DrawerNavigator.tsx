import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import DrawerMenu from '../components/DrawerMenu'
import { useDrawerType } from '../hooks/useDrawer'
import { DrawerParamList } from '../types'
import Navigators from './ScreenNavigators'

const Drawer = createDrawerNavigator<DrawerParamList>()

export default function DrawerNavigator(): JSX.Element {
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
