import React from 'react'
import { FlatList, StyleSheet, Platform } from 'react-native'
import useSWR, { mutate } from 'swr'

import { Text, View } from '../../../common/Themed'
import Loading from '../../../common/components/Loading'
import { Shipment } from '../../../types'

export default function ListView(): JSX.Element {
  const { data, error, isValidating } = useSWR<Shipment[]>('/shipments')
  const isLoading = !error && !data
  const refreshing = (data && isValidating) || false

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          contentContainerStyle={
            Platform.OS == 'web' ? styles.containerWeb : styles.containerNative
          }
          keyExtractor={({ id }) => String(id)}
          ListHeaderComponent={ShipmentsHeaderComponent}
          ListFooterComponent={ShipmentsFooterComponent}
          renderItem={({ item }) => <ShipmentListItem shipment={item} />}
          refreshing={refreshing}
          onRefresh={() => mutate('/shipments')}
        />
      )}
    </>
  )
}

interface ShipmentListItemProps {
  shipment: Shipment
}

function ShipmentListItem({ shipment }: ShipmentListItemProps) {
  return (
    <View style={styles.shipmentContainer}>
      <View style={styles.itemLeft}>
        <Text style={styles.recipientName}>{shipment.receiverName}</Text>
        <Text style={styles.defaultField}>{shipment.status}</Text>
        <Text style={styles.defaultField}>{shipment.postCode}</Text>
        <Text style={styles.defaultField}>{shipment.deliveryCompany}</Text>
      </View>
      <View style={styles.itemRight}>
        <Text style={styles.defaultField}>{shipment.createdOn}</Text>
      </View>
    </View>
  )
}

function ShipmentsHeaderComponent() {
  return <Text style={styles.header}>Example header</Text>
}

function ShipmentsFooterComponent() {
  return <Text style={styles.header}>Example footer</Text>
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
    backgroundColor: '#F7F1EF',
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  itemLeft: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'stretch',
    backgroundColor: '#F7F1EF',
  },
  itemRight: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    backgroundColor: '#F7F1EF',
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  header: {
    alignSelf: 'center',
    fontSize: 28,
    margin: 30,
  },
  footer: {
    alignSelf: 'center',
    fontSize: 28,
    margin: 30,
  },
  recipientName: {
    fontFamily: 'Rubik',
    fontWeight: 'bold',
    fontSize: 17,
    color: '#223285',
  },
  defaultField: {
    fontFamily: 'Rubik',
    fontSize: 10,
    color: '#223285',
  },
})
