import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

import { View } from '../style/Themed'

export default function Loading(): JSX.Element {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
