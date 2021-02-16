import React from 'react'
import { View } from 'react-native'

import { TitleText } from '../../../common/Themed'

export default function Success(): JSX.Element {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TitleText>Shipment added!</TitleText>
    </View>
  )
}
