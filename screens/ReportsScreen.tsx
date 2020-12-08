import * as React from 'react'
import { StyleSheet } from 'react-native'

import BottomTabLayout from '../components/BottomTabLayout'
import { Text, View } from '../components/Themed'
import useDeviceType from '../hooks/useDeviceType'

export default function ShipmentsScreen(): JSX.Element {
  const { isMobile } = useDeviceType()

  return (
    <BottomTabLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Reports Screen!</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text>You are using {isMobile ? 'mobile' : 'desktop'}.</Text>
      </View>
    </BottomTabLayout>
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
