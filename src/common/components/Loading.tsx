import React from 'react'
import { ActivityIndicator, Text } from 'react-native'

import Styles from '../Styles'
import { View } from '../Themed'

export default function Loading(): JSX.Element {
  return (
    <View style={Styles.container}>
      <Text>Loading...</Text>
      <ActivityIndicator />
    </View>
  )
}
