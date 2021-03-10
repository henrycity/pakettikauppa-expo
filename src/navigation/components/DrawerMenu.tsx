import { Feather } from '@expo/vector-icons'
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'
import React from 'react'
import { useTranslation } from 'react-i18next'

import Styles from '../../common/Styles'
import { useThemedColors } from '../../common/Themed'
import useActiveScreen from '../../common/hooks/useActiveScreen'
import useDeviceType from '../../common/hooks/useDeviceType'
import useLogout from '../../modules/login/hooks/useLogout'
import useUser from '../../modules/login/hooks/useUser'
import { ScreenName } from '../../types'
import ScreenNames from '../ScreenNames'
import LanguagePicker from './LanguagePicker'

const DrawerMenu = (props: DrawerContentComponentProps): JSX.Element => {
  const { navigation } = props

  const { isDesktop } = useDeviceType()
  const { activeScreen, setActiveScreen } = useActiveScreen()
  const { isAuthorized } = useUser()
  const themed = useThemedColors()
  const logout = useLogout()

  const handleLinkPress = (
    screenName: ScreenName,
    navOptions?: { screen: string }
  ) => {
    setActiveScreen(screenName)
    navigation.navigate(screenName, navOptions)
  }

  const { t } = useTranslation()
  return (
    <DrawerContentScrollView {...props}>
      {isDesktop ? (
        <>
          <DrawerItem
            label={t('profile')}
            labelStyle={Styles.drawerLabelDefault}
            focused={activeScreen === ScreenNames.Profile}
            onPress={() => handleLinkPress(ScreenNames.Profile)}
            activeTintColor={themed.activeIcon}
            activeBackgroundColor={themed.activeBackground}
            inactiveTintColor={themed.inactiveIcon}
            icon={({ color }) => (
              <Feather name="user" size={24} color={color} />
            )}
          />

          {isAuthorized(ScreenNames.Shipments) ? (
            <DrawerItem
              label={t('shipments')}
              labelStyle={Styles.drawerLabelDefault}
              activeTintColor={themed.activeIcon}
              activeBackgroundColor={themed.activeBackground}
              inactiveTintColor={themed.inactiveIcon}
              focused={activeScreen === ScreenNames.Shipments}
              onPress={() =>
                handleLinkPress(ScreenNames.Shipments, {
                  screen: 'ShipmentsScreen',
                })
              }
              icon={({ color }) => (
                <Feather name="truck" size={24} color={color} />
              )}
            />
          ) : null}
          {isAuthorized(ScreenNames.Reports) ? (
            <DrawerItem
              label={t('reports')}
              labelStyle={Styles.drawerLabelDefault}
              activeTintColor={themed.activeIcon}
              activeBackgroundColor={themed.activeBackground}
              inactiveTintColor={themed.inactiveIcon}
              focused={activeScreen === ScreenNames.Reports}
              onPress={() => handleLinkPress(ScreenNames.Reports)}
              icon={({ color }) => (
                <Feather name="book-open" size={24} color={color} />
              )}
            />
          ) : null}
          {isAuthorized(ScreenNames.Statistics) ? (
            <DrawerItem
              label={t('statistics')}
              labelStyle={Styles.drawerLabelDefault}
              activeTintColor={themed.activeIcon}
              activeBackgroundColor={themed.activeBackground}
              inactiveTintColor={themed.inactiveIcon}
              focused={activeScreen === ScreenNames.Statistics}
              onPress={() => handleLinkPress(ScreenNames.Statistics)}
              icon={({ color }) => (
                <Feather name="activity" size={24} color={color} />
              )}
            />
          ) : null}
        </>
      ) : null}
      <LanguagePicker navigation={navigation} />

      <DrawerItem
        label={t('logout')}
        labelStyle={Styles.drawerLabelDefault}
        activeTintColor={themed.activeIcon}
        activeBackgroundColor={themed.activeBackground}
        inactiveTintColor={themed.inactiveIcon}
        onPress={() => logout()}
        icon={({ color }) => <Feather name="log-out" size={24} color={color} />}
      />
    </DrawerContentScrollView>
  )
}

export default DrawerMenu
