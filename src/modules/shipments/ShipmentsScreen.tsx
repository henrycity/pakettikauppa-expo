import * as React from 'react'
import { StyleSheet, Button } from 'react-native'

<<<<<<< HEAD:src/modules/shipments/ShipmentsScreen.tsx
import { View, Text } from '../../common/Themed'
import BottomTabWrapper from '../../common/components/BottomTabWrapper'
import useDeviceType from '../../common/hooks/useDeviceType'
=======
import BottomTabLayout from '../components/BottomTabLayout'
import ShipmentsTable from '../components/ShipmentsTable'
import { Text, View } from '../components/Themed'
import getShipmentData from '../components/utils/getShipmentData'
import useDeviceType from '../hooks/useDeviceType'
>>>>>>> PA-3-A: Working, messy version of table finished.:screens/ShipmentsScreen.tsx

export default function ShipmentsScreen(): JSX.Element {
  const { isMobile } = useDeviceType()

  return (
    <BottomTabWrapper>
      <ShipmentsTable />
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
