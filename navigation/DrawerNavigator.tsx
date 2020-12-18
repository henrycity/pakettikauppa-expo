import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet } from 'react-native'

import DrawerMenu from '../components/DrawerMenu'
import useAuthorization from '../hooks/useAuthorization'
import { useDrawerType } from '../hooks/useDrawer'
import { DrawerParamList } from '../types'
import {
  ScreenNavigators,
  RestrictedScreenNavigators,
} from './ScreenNavigators'

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
      {ScreenNavigators.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.navigator}
        />
      ))}

      {RestrictedScreenNavigators.map((screen) =>
        isAuthorized(screen.name) ? (
          <Drawer.Screen
            key={screen.name}
            name={screen.name}
            component={screen.navigator}
          />
        ) : null
      )}
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  drawer: {
    width: 250,
  },
})
