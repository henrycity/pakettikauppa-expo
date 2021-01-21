import { createDrawerNavigator } from '@react-navigation/drawer'
import * as React from 'react'

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ShipmentScreen from '../screens/ShipmentScreen'

const Drawer = createDrawerNavigator()

export default function DrawerNavigation(): JSX.Element {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Shipment" component={ShipmentScreen} />
    </Drawer.Navigator>
  )
}
