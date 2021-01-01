import React from 'react'
import { StyleSheet } from 'react-native'

import { Text, View } from '../../common/Themed'
import BottomTabWrapper from '../../common/components/BottomTabWrapper'
import useDeviceType from '../../common/hooks/useDeviceType'

export default function ProfileScreen(): JSX.Element {
  const { isMobile } = useDeviceType()

  return (
    <BottomTabWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Profile Screen!</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text>You are using {isMobile ? 'mobile' : 'desktop'}.</Text>
      </View>
    </BottomTabWrapper>
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
