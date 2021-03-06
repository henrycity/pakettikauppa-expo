import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import { useDrawerType } from '../hooks/useDrawer'
import { DrawerMenuNavigationProp } from '../types'
import { useThemeColor } from './Themed'

export default function MenuButton(): JSX.Element | null {
  const navigation = useNavigation<DrawerMenuNavigationProp>()
  const drawerType = useDrawerType()
  const backgroundColor = useThemeColor({}, 'background')
  const iconColor = useThemeColor({}, 'tint')

  return drawerType !== 'permanent' ? (
    <TouchableOpacity
      style={[styles.menuButton, { backgroundColor }]}
      onPress={() => navigation.openDrawer()}
    >
      <Feather name="menu" size={24} color={iconColor} />
    </TouchableOpacity>
  ) : null
}

const styles = StyleSheet.create({
  menuButton: {
    paddingLeft: 20,
  },
})
