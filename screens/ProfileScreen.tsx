import { DeviceType } from 'expo-device'
import * as React from 'react'
import { StyleSheet } from 'react-native'

import { Text, View } from '../components/Themed'
import useDeviceType from '../hooks/useDeviceType'

export default function ProfileScreen(): JSX.Element {
  const [loaded, deviceType] = useDeviceType()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen!</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text>
        You are using{' '}
        {loaded && deviceType === DeviceType.PHONE ? 'mobile' : 'web'}.
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
