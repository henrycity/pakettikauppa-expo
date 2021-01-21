import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types'
import React from 'react'

import MenuButton from './components/MenuButton'

const headerOptions: StackHeaderOptions = {
  headerLeft: () => <MenuButton />,
  headerTintColor: '#233385',
}

export default headerOptions
