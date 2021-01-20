import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text, View, FlatList} from 'react-native'
import useSWR from 'swr'


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
    <View style={{ flex:1 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => String(id)}
          renderItem={({ item }) => (
            <Text>
              {item.createdOn}, {item.receiverName}, {item.receiverEmail}
            </Text>
          )}
        />
      )}
    </View>
  )
}
