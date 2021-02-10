import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import { useThemeColor } from '../../common/Themed'
import useUser from '../../modules/login/hooks/useUser'
import { DrawerParamList } from '../../types'
import {
  ScreenNavigators,
  RestrictedScreenNavigators,
} from '../ScreenNavigators'
import { useDrawerType } from '../hooks/useDrawer'
import DrawerMenu from './DrawerMenu'

const Drawer = createDrawerNavigator<DrawerParamList>()

export default function DrawerNavigator(): JSX.Element {
  const drawerType = useDrawerType()
  const { isAuthorized } = useUser()

  const backgroundColor = useThemeColor({}, 'drawerBackground')

  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerMenu {...props} />}
      drawerType={drawerType}
      drawerStyle={[{ width: 250 }, { backgroundColor }]}
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
