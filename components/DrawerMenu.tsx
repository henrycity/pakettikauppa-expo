import { Feather } from '@expo/vector-icons'
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet } from 'react-native'

import Screens from '../constants/Screens'
import useActiveScreen from '../hooks/useActiveScreen'
import useAuthorization from '../hooks/useAuthorization'
import useDeviceType from '../hooks/useDeviceType'
import useLogout from '../hooks/useLogout'
import { ScreenName } from '../types'
import LanguagePicker from './LanguagePicker'
import { View, useThemedColors } from './Themed'

const DrawerMenu = (props: DrawerContentComponentProps): JSX.Element => {
  const { navigation } = props

  const { isDesktop } = useDeviceType()
  const { activeScreen, setActiveScreen } = useActiveScreen()
  const isAuthorized = useAuthorization()
  const themed = useThemedColors()
  const logout = useLogout()

  const handleLinkPress = (screenName: ScreenName) => {
    setActiveScreen(screenName)
    navigation.navigate(screenName)
  }

  const { t } = useTranslation()

  return (
    <DrawerContentScrollView {...props}>
      {isDesktop ? (
        <DrawerItem
          label={t('profile')}
          focused={activeScreen === Screens.Profile}
          onPress={() => handleLinkPress(Screens.Profile)}
          icon={({ color }) => <Feather name="user" size={24} color={color} />}
        />
      ) : null}

      {isDesktop && isAuthorized(Screens.Shipments) ? (
        <DrawerItem
          label={t('shipments')}
          focused={activeScreen === Screens.Shipments}
          onPress={() => handleLinkPress(Screens.Shipments)}
          icon={({ color }) => (
            <Feather name="package" size={24} color={color} />
          )}
        />
      ) : null}

      {isDesktop ? (
        <View
          style={[styles.container, { backgroundColor: themed.background }]}
        >
          <View
            style={styles.separator}
            lightColor={themed.tabIconDefault}
            darkColor={themed.tabIconDefault}
          />
        </View>
      ) : null}

      {isAuthorized(Screens.Reports) ? (
        <DrawerItem
          label={t('reports')}
          focused={activeScreen === Screens.Reports}
          onPress={() => handleLinkPress(Screens.Reports)}
          icon={({ color }) => (
            <Feather name="layers" size={24} color={color} />
          )}
        />
      ) : null}

      {isAuthorized(Screens.Statistics) ? (
        <DrawerItem
          label={t('statistics')}
          focused={activeScreen === Screens.Statistics}
          onPress={() => handleLinkPress(Screens.Statistics)}
          icon={({ color }) => (
            <Feather name="activity" size={24} color={color} />
          )}
        />
      ) : null}

      {isAuthorized(Screens.Settings) ? (
        <DrawerItem
          label={t('settings')}
          focused={activeScreen === Screens.Settings}
          onPress={() => handleLinkPress(Screens.Settings)}
          icon={({ color }) => (
            <Feather name="settings" size={24} color={color} />
          )}
        />
      ) : null}

      <LanguagePicker navigation={navigation} />

      <DrawerItem
        label={t('logout')}
        onPress={() => logout()}
        icon={({ color }) => <Feather name="log-out" size={24} color={color} />}
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default DrawerMenu
