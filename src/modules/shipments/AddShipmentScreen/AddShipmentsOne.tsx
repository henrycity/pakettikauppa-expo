import * as React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import Styles from '../../../common/Styles'
import { View, Text } from '../../../common/Themed'
import BottomTabWrapper from '../../../common/components/BottomTabWrapper'
import useDeviceType from '../../../common/hooks/useDeviceType'

interface AddShipmentsOneProps {
  NextButton: () => JSX.Element
  BackButton: () => JSX.Element
}

export default function AddShipmentsOne({
  NextButton,
  BackButton,
}: AddShipmentsOneProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SCREEN NO. 1</Text>
      <View style={{ flexDirection: 'row' }}>
        {BackButton()}
        {NextButton()}
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
