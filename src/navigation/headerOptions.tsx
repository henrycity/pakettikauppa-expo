import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types'
import React from 'react'
import { StyleSheet } from 'react-native'

import MenuButton from './components/MenuButton'

export const navStyles = StyleSheet.create({
  header: {
    height: 80,
  },
})

const headerOptions: StackHeaderOptions = {
  headerLeft: () => <MenuButton />,
  headerStyle: navStyles.header,
}

export default headerOptions
