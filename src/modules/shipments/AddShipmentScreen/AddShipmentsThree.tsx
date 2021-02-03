import * as React from 'react'
import { StyleSheet } from 'react-native'

import { View, Text } from '../../../common/Themed'

interface AddShipmentsThreeProps {
  SubmitButton: () => JSX.Element
  PreviousButton: () => JSX.Element
}

export default function AddShipmentsThree({
  SubmitButton,
  PreviousButton,
}: AddShipmentsThreeProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SCREEN NO. 3</Text>
      <View style={{ flexDirection: 'row' }}>
        {PreviousButton()}
        {SubmitButton()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
