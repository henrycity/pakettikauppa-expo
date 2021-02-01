import { Feather } from '@expo/vector-icons'
import { ThemeProvider, useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

import Styles from '../../common/Styles'
import { useThemedColors } from '../../common/Themed'
import { DrawerMenuNavigationProp } from '../../types'
import { useDrawerType } from '../hooks/useDrawer'

export default function MenuButton(): JSX.Element | null {
  const navigation = useNavigation<DrawerMenuNavigationProp>()
  const drawerType = useDrawerType()
  const theme = useThemedColors()

  return drawerType !== 'permanent' ? (
    <TouchableOpacity
      style={[Styles.menuButton, { backgroundColor: theme.background }]}
      onPress={() => navigation.openDrawer()}
    >
      <Feather name="menu" size={30} color={theme.inactiveIcon} />
    </TouchableOpacity>
  ) : null
}
