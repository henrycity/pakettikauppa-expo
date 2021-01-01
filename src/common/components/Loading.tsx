import React from 'react'
import { ActivityIndicator, StyleSheet, Text } from 'react-native'

import { View } from '../Themed'

export default function Loading(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
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
