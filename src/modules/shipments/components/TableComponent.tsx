import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import { Text, View } from '../../../common/Themed'
import { cellWidths } from '../constants/tableHeaders'

function Header({ fields }: any) {
  return (
    <View style={styles.row}>
      {fields.map((field: keyof typeof cellWidths) => (
        // Header text should be localized: t(header) (delete this comment)
        <Text key={field} style={{ flexShrink: 0, width: cellWidths[field] }}>
          {field}
        </Text>
      ))}
    </View>
  )
}

function Row({ headers, shipment }: any) {
  return (
    <View style={styles.row}>
      {headers.map((field) => (
        <Text
          key={field + shipment.id}
          style={{ flexShrink: 0, width: cellWidths[field] }}
        >
          {shipment[field] as string}
        </Text>
      ))}
    </View>
  )
}

export default function TableComponent({ data }): JSX.Element {
  const headers = Object.keys(data[0]).filter((field) => field != 'id')

  return (
    <ScrollView stickyHeaderIndices={[0]} contentContainerStyle={styles.table}>
      <Header fields={headers} />
      {data.map((shipment) => (
        <Row headers={headers} shipment={shipment} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  table: {
    flex: 1,
    overflow: 'scroll',
    margin: 30,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    minHeight: 40,
  },
})
