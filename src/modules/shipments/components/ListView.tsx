import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import useSWR from 'swr'

import { Text, View } from '../../../common/Themed'
import Loading from '../../../common/components/Loading'
import { Shipment } from '../../../types'

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
    <View style={styles.container}>
      <View style={styles.itemLeft}>
        <Text style={styles.name}>{shipment.receiverName}</Text>
        <Text style={styles.other}>{shipment.status}</Text>
        <Text style={styles.other}>{shipment.postCode}</Text>
        <Text style={styles.other}>{shipment.deliveryCompany}</Text>
      </View>
      <View style={styles.itemRight}>
        <Text style={styles.other}>{shipment.createdOn}</Text>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  itemLeft: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#F7F1EF',
    alignContent: 'stretch',
  },
  itemRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',

    justifyContent: 'space-around',
    backgroundColor: '#F7F1EF',
    alignContent: 'stretch',
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
  name: {
    fontFamily: 'Rubik',
    fontWeight: 'bold',
    fontSize: 17,
    color: '#223285',
  },
  other: {
    fontFamily: 'Rubik',
    fontSize: 10,
    color: '#223285',
  },
})
