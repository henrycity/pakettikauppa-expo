import { DeviceType } from 'expo-device'
import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'

import { DeviceTypeContext } from '../components/DeviceTypeContextProvider'
import { Text, View } from '../components/Themed'

export default function ProfileScreen(): JSX.Element {
  const deviceType = useContext(DeviceTypeContext)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen!</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text>
        You are using {deviceType !== DeviceType.PHONE ? 'web' : 'mobile'}.
      </Text>
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
