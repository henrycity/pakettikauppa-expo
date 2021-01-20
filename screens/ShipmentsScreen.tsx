import * as React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import BottomTabLayout from '../components/BottomTabLayout'
import ListView from '../components/ListView'
import { Text, View } from '../components/Themed'
import useDeviceType from '../hooks/useDeviceType'

export default function ShipmentsScreen(): JSX.Element {
  const { isMobile } = useDeviceType()

  return (
    <BottomTabLayout>
      {isMobile ? <Text> TABLE HERE </Text> : <ListView />}
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
