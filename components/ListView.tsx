import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native'
import useSWR from 'swr'

import Loading from './Loading'

interface Shipment {
  id: number
  createdOn: Date
  receiverName: string
  receiverEmail: string
  postCode: string
  postOffice: string
  countryCode: string
  price: number
  status: string
  reference: string
  latestEvent: string
  invoiceNumber: string
  shippingCompany: string
}

export default function ListView(): JSX.Element {
  const { data, error } = useSWR<Shipment[]>('/shipments')
  const isLoading = !error && !data

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => String(id)}
          contentContainerStyle={styles.listContentContainer}
          ListHeaderComponent={ShipmentsHeaderComponent}
          ListFooterComponent={ShipmentsFooterComponent}
          renderItem={({ item }) => <ShipmentListItem shipment={item} />}
        />
      )}
    </View>
  )
}

interface ShipmentListItemProps {
  shipment: Shipment
}

function ShipmentListItem({ shipment }: ShipmentListItemProps) {
  return (
    <View style={styles.item}>
      <Text>
        {shipment.createdOn}
     </Text>
     <Text>
       {shipment.receiverName}
     </Text>
     <Text>
       {shipment.receiverEmail}
     </Text>
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
  container: {
    flex: 1,
    height: 0,
  },
  listContentContainer: {
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    margin: 40,
    justifyContent: 'space-between'
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
})
