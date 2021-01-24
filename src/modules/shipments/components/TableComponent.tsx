import React from 'react'
import { StyleSheet, FlatList, Platform } from 'react-native'
import { Hoverable, Pressable, } from 'react-native-web-hover'

import { Text, View, useThemedColors } from '../../../common/Themed'
import { shipmentHeaders, cellData } from '../constants/tableHeaders'
import { mutate } from 'swr'
import { useTranslation } from 'react-i18next'
import { Shipment } from '../../../types'

function Header({ fields }: any) {
  const { t } = useTranslation('shipments')
  return (
    <View style={[styles.row, styles.header]}>
      {fields.map((field: string) => (
        // Header text should be localized: t(header) (delete this comment)
        <View key={field} style={[styles.cell, { flex: cellData[field].flex }]}>
          <Text numberOfLines={cellData[field].headerRows} style={styles.text}>
            {t(field)}
          </Text>
        </View>
      ))}
    </View>
  )
}

function Row({ headers, shipment, hovered }: any) {
  const themed = useThemedColors()
  const backgroundColor = hovered ? '#d4d4d4' : themed.background
  return (
    <View style={[styles.row, {backgroundColor}]}>
      {headers.map((field: string) => (
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
  const headers = shipmentHeaders.filter((field) => field != 'id')

  return (
    <FlatList
      contentContainerStyle={styles.table}
      onLayout={(event) => console.log(event.nativeEvent.layout)}
      data={data}
      renderItem={({ item }) => (
        <>
          <Hoverable>
            {({ hovered }) => (
              <Row headers={headers} shipment={item} hovered={hovered} />
            )}
          </Hoverable>
        </>
      )}
      ListHeaderComponent={<Header fields={headers} />}
      ItemSeparatorComponent={() => (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View style={styles.separator} />
        </View>
      )}
      stickyHeaderIndices={[0]}
      keyExtractor={(shipment) => String(shipment.id)}
      onRefresh={() => mutate('/shipments')}
      refreshing={refreshing}
    />
  )
}

const styles = StyleSheet.create({
  table: {
    flex: 1,
    marginHorizontal: 25,
  },
  row: {
    paddingVertical: 15,
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    paddingVertical: 15,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: 6,
  },
  separator: {
    height: 1,
    width: '93%',
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 12,
    height: 16,
  },
})
