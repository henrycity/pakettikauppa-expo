import React from 'react'
import { ActivityIndicator } from 'react-native'

import Styles from '../Styles'
import { View } from '../Themed'

export default function Loading(): JSX.Element {
  return (
    <View style={Styles.container}>
      <ActivityIndicator />
    </View>
  )
}
