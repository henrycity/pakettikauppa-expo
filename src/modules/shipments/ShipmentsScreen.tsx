import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import Styles from '../../common/Styles'
import { View, Text } from '../../common/Themed'
import BottomTabWrapper from '../../common/components/BottomTabWrapper'
import useDeviceType from '../../common/hooks/useDeviceType'

export default function ShipmentsScreen(): JSX.Element {
  const { isMobile } = useDeviceType()
  const navigation = useNavigation()

  return (
    <BottomTabWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Shipments Screen!</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            accessibilityLabel="New Shipment"
            style={Styles.normalButton}
            onPress={() => {
              navigation.navigate('AddShipmentsScreen')
            }}
          >
            <Text>NEW SHIPMENT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Pickup Orders"
            style={Styles.normalButton}
          >
            <Text>PICKUP ORDERS</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            accessibilityLabel="Create Line Haul Label"
            style={Styles.normalButton}
          >
            <Text>CREATE LINE HAUL LABEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Download Multiple Labels"
            style={Styles.normalButton}
          >
            <Text>DOWNLOAD MULTIPLE LABELS</Text>
          </TouchableOpacity>
        </View>
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
