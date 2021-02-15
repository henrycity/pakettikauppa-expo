import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Styles from '../common/Styles'
import { useThemedColors } from '../common/Themed'
import { RootStackParamList } from '../types'

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>): JSX.Element {
  const themed = useThemedColors()
  return (
    <View style={styles.container}>
      <Text style={[Styles.title, { color: themed.text }]}>
        This screen doesn't exist.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.replace('Root')}
        style={Styles.link}
      >
        <Text style={[Styles.linkText, { color: themed.linkTextColor }]}>
          Go to home screen!
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
})
