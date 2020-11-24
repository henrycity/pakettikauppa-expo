import { Feather } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import { useDrawerType } from '../hooks/useDrawer'
import { useThemeColor } from './Themed'

export default function MenuButton({
  navigation,
}: {
  navigation: any
}): JSX.Element | null {
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
