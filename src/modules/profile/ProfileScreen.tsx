import React from 'react'

import Styles from '../../common/Styles'
import { TitleText, Text, View } from '../../common/Themed'
import BottomTabWrapper from '../../common/components/BottomTabWrapper'
import useDeviceType from '../../common/hooks/useDeviceType'

export default function ProfileScreen(): JSX.Element {
  const { isMobile } = useDeviceType()

  return (
    <BottomTabWrapper>
      <View style={Styles.container}>
        <TitleText>Profile Screen!</TitleText>
        <View
          style={Styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text>You are using {isMobile ? 'mobile' : 'desktop'}.</Text>
      </View>
    </BottomTabWrapper>
  )
}
