import { Feather } from '@expo/vector-icons'
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Hoverable } from 'react-native-web-hover'

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
  const { isAuthorized } = useUser()
  const themed = useThemedColors()
  const logout = useLogout()
  const { t } = useTranslation()

  return (
    <DrawerContentScrollView {...props}>
      {isDesktop ? (
        <>
          <DrawerMenuItem
            screenName={ScreenNames.Profile}
            icon={({ color }) => (
              <Feather name="user" size={24} color={color} />
            )}
            navigation={navigation}
          />

          {isAuthorized(ScreenNames.Shipments) ? (
            <DrawerMenuItem
              screenName={ScreenNames.Shipments}
              icon={({ color }) => (
                <Feather name="truck" size={24} color={color} />
              )}
              navigation={navigation}
            />
          ) : null}

          {isAuthorized(ScreenNames.Reports) ? (
            <DrawerMenuItem
              screenName={ScreenNames.Reports}
              icon={({ color }) => (
                <Feather name="book-open" size={24} color={color} />
              )}
              navigation={navigation}
            />
          ) : null}

          {isAuthorized(ScreenNames.Statistics) ? (
            <DrawerMenuItem
              screenName={ScreenNames.Statistics}
              icon={({ color }) => (
                <Feather name="activity" size={24} color={color} />
              )}
              navigation={navigation}
            />
          ) : null}
        </>
      ) : null}

      <LanguagePicker navigation={navigation} />

      <Hoverable>
        {({ hovered }) => (
          <DrawerItem
            label={t('logout')}
            labelStyle={[
              Styles.drawerLabelDefault,
              { textDecorationLine: hovered ? 'underline' : 'none' },
            ]}
            activeTintColor={themed.activeIcon}
            activeBackgroundColor={themed.activeBackground}
            inactiveTintColor={themed.inactiveIcon}
            onPress={() => logout()}
            icon={({ color }) => (
              <Feather name="log-out" size={24} color={color} />
            )}
          />
        )}
      </Hoverable>
    </DrawerContentScrollView>
  )
}

export default DrawerMenu

interface DrawerMenuItemProps {
  screenName: ScreenName
  icon?: (props: {
    focused: boolean
    size: number
    color: string
  }) => React.ReactNode
  navigation: DrawerNavigationHelpers
}

const DrawerMenuItem = ({
  screenName,
  icon,
  navigation,
}: DrawerMenuItemProps) => {
  const { activeScreen, setActiveScreen } = useActiveScreen()
  const themed = useThemedColors()
  const { t } = useTranslation()

  const handleLinkPress = (screenName: ScreenName) => {
    setActiveScreen(screenName)
    navigation.navigate(screenName)
  }

  return (
    <Hoverable>
      {({ hovered }) => (
        <DrawerItem
          label={t(screenName.toLowerCase())}
          labelStyle={[
            Styles.drawerLabelDefault,
            { textDecorationLine: hovered ? 'underline' : 'none' },
          ]}
          focused={activeScreen === screenName}
          onPress={() => handleLinkPress(screenName)}
          activeTintColor={themed.activeIcon}
          activeBackgroundColor={themed.activeBackground}
          inactiveTintColor={themed.inactiveIcon}
          icon={icon}
        />
      )}
    </Hoverable>
  )
}
