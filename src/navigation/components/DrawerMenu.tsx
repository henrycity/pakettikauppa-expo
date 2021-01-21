import { Feather } from '@expo/vector-icons'
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet } from 'react-native'

import { useThemedColors, View } from '../../common/Themed'
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

  const handleLinkPress = (screenName: ScreenName) => {
    setActiveScreen(screenName)
    navigation.navigate(screenName)
  }

  const { t } = useTranslation()
  return (
    <DrawerContentScrollView {...props}>
      {isDesktop ? (
        <>
          <DrawerItem
            label={t('profile')}
            focused={activeScreen === ScreenNames.Profile}
            onPress={() => handleLinkPress(ScreenNames.Profile)}
            activeTintColor={themed.white}
            activeBackgroundColor={themed.gray}
            inactiveTintColor={themed.text}
            icon={({ color }) => (
              <Feather name="user" size={24} color={color} />
            )}
          />

          {isAuthorized(ScreenNames.Shipments) ? (
            <DrawerItem
              label={t('shipments')}
              activeTintColor={themed.white}
              activeBackgroundColor={themed.gray}
              inactiveTintColor={themed.text}
              focused={activeScreen === ScreenNames.Shipments}
              onPress={() => handleLinkPress(ScreenNames.Shipments)}
              icon={({ color }) => (
                <Feather name="truck" size={24} color={color} />
              )}
            />
          ) : null}

          {isDesktop ? (
            <View
              style={[styles.container, { backgroundColor: themed.background }]}
            >
              <View
                style={[
                  styles.container,
                  { backgroundColor: themed.drawerBackground },
                ]}
                lightColor={themed.tabIconDefault}
                darkColor={themed.tabIconDefault}
              />
            </View>
          ) : null}
        </>
      ) : null}

      {isAuthorized(ScreenNames.Reports) ? (
        <DrawerItem
          label={t('reports')}
          activeTintColor={themed.white}
          activeBackgroundColor={themed.gray}
          inactiveTintColor={themed.text}
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
          activeTintColor={themed.white}
          activeBackgroundColor={themed.gray}
          inactiveTintColor={themed.text}
          focused={activeScreen === ScreenNames.Statistics}
          onPress={() => handleLinkPress(ScreenNames.Statistics)}
          icon={({ color }) => (
            <Feather name="activity" size={24} color={color} />
          )}
        />
      ) : null}

      <LanguagePicker navigation={navigation} />

      <DrawerItem
        label={t('logout')}
        activeTintColor={themed.white}
        activeBackgroundColor={themed.gray}
        inactiveTintColor={themed.text}
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
