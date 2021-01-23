import React from 'react'
import { StyleSheet, FlatList } from 'react-native'

import { Text, View } from '../../../common/Themed'
import { cellFlex, shipmentHeaders } from '../constants/tableHeaders'
import { mutate } from 'swr'
import { useTranslation } from 'react-i18next'
import { Shipment } from '../../../types'

function Header({ fields }: any) {
  const { t } = useTranslation('shipments')
  return (
    <View style={styles.header}>
      {fields.map((field: string) => (
        // Header text should be localized: t(header) (delete this comment)
        <View key={field} style={[styles.cell, { flex: cellFlex[field] }]}>
          <Text numberOfLines={1}>{t(field)}</Text>
        </View>
      ))}
    </View>
  )
}

function Row({ headers, shipment }: any) {
  return (
    <View style={styles.row}>
      {headers.map((field: string) => (
        <View
          key={field + shipment.id}
          style={[styles.cell, { flex: cellFlex[field] }]}
        >
          <Text numberOfLines={1}>{shipment[field]}</Text>
        </View>
      ))}
    </View>
  )
}

interface ShipmentTableProps {
  data: Shipment[]
  refreshing: boolean
}

export default function TableComponent({
  data,
  refreshing,
}: ShipmentTableProps): JSX.Element {
  const headers = shipmentHeaders.filter((field) => field != 'id')

  return (
    <FlatList
      onLayout={(event) => console.log(event.nativeEvent.layout)}
      data={data}
      renderItem={({ item }) => <Row headers={headers} shipment={item} />}
      ListHeaderComponent={<Header fields={headers} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      stickyHeaderIndices={[0]}
      contentContainerStyle={styles.table}
      keyExtractor={(shipment) => String(shipment.id)}
      onRefresh={() => mutate('/shipments')}
      refreshing={refreshing}
    />
  )
}

const styles = StyleSheet.create({
  table: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 40,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 40,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 8,
    height: 1,
    backgroundColor: 'gray',
    alignSelf: 'center',
    width: '90%',
  },
})
