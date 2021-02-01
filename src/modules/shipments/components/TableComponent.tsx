import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, FlatList } from 'react-native'
import { Hoverable } from 'react-native-web-hover'
import { mutate } from 'swr'

import { Text, View, useThemedColors } from '../../../common/Themed'
import { Shipment } from '../../../types'
import { shipmentHeaders, cellData } from '../constants/tableHeaders'

interface HeaderProps {
  fields: typeof shipmentHeaders
}

function Header({ fields }: HeaderProps) {
  const { t } = useTranslation('shipments')
  return (
    <View style={[styles.row, styles.header]}>
      {fields.map((field: string) => (
        <View key={field} style={[styles.cell, { flex: cellData[field].flex }]}>
          <Text numberOfLines={cellData[field].headerRows} style={styles.text}>
            {t(field)}
          </Text>
        </View>
      ))}
    </View>
  )
}

interface RowProps {
  headers: typeof shipmentHeaders
  shipment: Shipment
  hovered: boolean
}

function Row({ headers, shipment, hovered }: RowProps) {
  const themed = useThemedColors()
  const backgroundColor = hovered ? '#d4d4d4' : themed.pink
  return (
    <View style={[styles.row, { backgroundColor }]}>
      {headers.map((field) => (
        <View
          key={field + shipment.id}
          style={[styles.cell, { flex: cellData[field].flex, backgroundColor }]}
        >
          <Text numberOfLines={1} style={styles.text}>
            {shipment[field]}
          </Text>
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
  const headers = shipmentHeaders.filter((field) => field !== 'id')

  return (
    <FlatList
      contentContainerStyle={styles.table}
      data={data}
      renderItem={({ item }) => (
        <Hoverable>
          {({ hovered }) => (
            <Row headers={headers} shipment={item} hovered={hovered} />
          )}
        </Hoverable>
      )}
      ListHeaderComponent={<Header fields={headers} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      stickyHeaderIndices={[0]}
      initialNumToRender={10}
      removeClippedSubviews
      keyExtractor={(shipment) => String(shipment.id)}
      onRefresh={() => mutate('/shipments')}
      refreshing={refreshing}
      ListEmptyComponent={<Text>Nothing in the list</Text>}
      testID="Table Component"
    />
  )
}

const styles = StyleSheet.create({
  table: {
    flex: 1,
    paddingHorizontal: 25,
    maxHeight: 900,
    // Needed for sticky header
    overflow: 'scroll',
  },
  row: {
    paddingVertical: '0.35rem',
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    paddingVertical: 15,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 6,
  },
  separator: {
    height: '0.2rem',
    width: '93%',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 12,
    height: 16,
  },
})
