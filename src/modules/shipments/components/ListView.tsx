import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  FlatList,
  StyleSheet,
  Platform,
  View,
  TouchableOpacity,
} from 'react-native'
import { Hoverable } from 'react-native-web-hover'
import useSWR, { mutate } from 'swr'

import { Text, useThemedColors } from '../../../common/Themed'
import Loading from '../../../common/components/Loading'
import { Shipment } from '../../../types'

export default function ListView(): JSX.Element {
  const { data, error, isValidating } = useSWR<Shipment[]>('/shipments')
  const isLoading = !error && !data
  const refreshing = Boolean(data && isValidating)

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          contentContainerStyle={
            Platform.OS === 'web' ? styles.containerWeb : styles.containerNative
          }
          keyExtractor={({ id }) => String(id)}
          ListHeaderComponent={ShipmentsHeaderComponent}
          ListFooterComponent={ShipmentsFooterComponent}
          renderItem={({ item }) => (
            <Hoverable>
              {({ hovered }) => (
                <ShipmentListItem shipment={item} hovered={hovered} />
              )}
            </Hoverable>
          )}
          refreshing={refreshing}
          onRefresh={() => mutate('/shipments')}
          testID="List Component"
        />
      )}
    </>
  )
}

interface ShipmentListItemProps {
  shipment: Shipment
  hovered: boolean
}

function ShipmentListItem({ shipment, hovered }: ShipmentListItemProps) {
  const navigation = useNavigation()
  const themed = useThemedColors()
  const { i18n } = useTranslation()

  const backgroundColor = hovered ? '#8cb1b7' : themed.drawerBackground
  const color = hovered ? '#fff' : themed.text

  return (
    <TouchableOpacity
      style={[styles.shipmentContainer, { backgroundColor }]}
      onPress={() =>
        navigation.navigate('DetailsScreen', {
          id: shipment.id,
          shipment,
        })
      }
    >
      <View style={styles.itemLeft}>
        <Text style={[styles.recipientName, { color }]}>
          {shipment.receiverName}
        </Text>
        <Text style={[styles.defaultField, { color }]}>{shipment.status}</Text>
        <Text style={[styles.defaultField, { color }]}>
          {shipment.receiverPostCode}
        </Text>
        <Text style={[styles.defaultField, { color }]}>
          {shipment.deliveryCompany}: {shipment.shippingMethod}
        </Text>
      </View>
      <View style={styles.itemRight}>
        <Text style={[styles.defaultField, { color }]}>
          {new Date(shipment.createdOn).toLocaleDateString(i18n.language)}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

function ShipmentsHeaderComponent() {
  return null
}

function ShipmentsFooterComponent() {
  return <View style={styles.footer} />
}

const styles = StyleSheet.create({
  containerWeb: {
    height: 0,
    flexGrow: 1,
  },
  containerNative: {
    flexGrow: 1,
  },
  shipmentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2,
    paddingHorizontal: 30,
    paddingVertical: 2,
  },
  itemLeft: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'stretch',
  },
  itemRight: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  footer: {
    height: 60,
  },
  recipientName: {
    fontFamily: 'Rubik-Bold',
    fontSize: 17,
  },
  defaultField: {
    fontFamily: 'Muli',
    fontSize: 10,
  },
})
