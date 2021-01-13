import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View, ScrollView } from 'react-native'
import useSWR from 'swr'

import server from '../constants/config'

export default function ListView(): JSX.Element {
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
  }

  const { data, error } = useSWR<Shipment[]>('/shipments')
  const isLoading = !error && !data
  
 // console.log('data', data)

  return (
    <ScrollView>
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => String(id)}
          renderItem={({ item }) => (
            <Text>
              {item.createdOn}, {item.receiverName}, {item.receiverEmail}
            </Text>
          )}
        />
      )}
    </View>
    </ScrollView>
  )
}
