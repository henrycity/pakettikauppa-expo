import { Feather } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { useDrawerType } from '../hooks/useDrawer'

export default function MenuButton({ navigation }: { navigation: any }) {
  const colorScheme = useColorScheme()
  const drawerType = useDrawerType()
  return drawerType !== 'permanent' ? (
    <TouchableOpacity
      style={{
        paddingLeft: 20,
        backgroundColor: Colors[colorScheme].background,
      }}
      onPress={() => navigation.openDrawer()}
    >
      <Feather name="menu" size={24} color={Colors[colorScheme].tint} />
    </TouchableOpacity>
  ) : null
}
