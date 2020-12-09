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
import useDeviceType from '../hooks/useDeviceType'
import { ScreenName } from '../types'
import LanguagePicker from './LanguagePicker'
import { View, useThemedColors } from './Themed'

const DrawerMenu = (props: DrawerContentComponentProps): JSX.Element => {
  const { navigation } = props

  const { isDesktop } = useDeviceType()
  const { activeScreen, setActiveScreen } = useActiveScreen()

  const themed = useThemedColors()

  const pressDrawerLink = (screenName: ScreenName) => {
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
          onPress={() => pressDrawerLink(Screens.Profile)}
          icon={({ color }) => <Feather name="user" size={24} color={color} />}
        />
      ) : null}

      {isDesktop ? (
        <DrawerItem
          label={t('shipments')}
          focused={activeScreen === Screens.Shipments}
          onPress={() => pressDrawerLink(Screens.Shipments)}
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

      <DrawerItem
        label={t('settings')}
        focused={activeScreen === Screens.Settings}
        onPress={() => pressDrawerLink(Screens.Settings)}
        icon={({ color }) => (
          <Feather name="settings" size={24} color={color} />
        )}
      />

      <LanguagePicker navigation={navigation} />
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
