import React from 'react'

import MenuButton from './MenuButton'
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types'

const headerOptions: StackHeaderOptions = {
  headerLeft: () => <MenuButton />,
}

export default headerOptions
