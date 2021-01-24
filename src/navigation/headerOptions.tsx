import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types'
import React from 'react'

import Colors from '../common/Colors'
import MenuButton from './components/MenuButton'

const headerOptions: StackHeaderOptions = {
  headerLeft: () => <MenuButton />,
  headerTintColor: Colors.light.text,
}

export default headerOptions
