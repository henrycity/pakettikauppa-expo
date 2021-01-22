import React, { useMemo } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import useSWR from 'swr'

import { Text, View } from '../../../common/Themed'
import Loading from '../../../common/components/Loading'
import { cellWidths } from '../constants/tableHeaders'
import TableComponent from './TableComponent'

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

export default function ShipmentsTable(): JSX.Element {
  // copy Shipment interface from bacend instead of object[]
  const { data, error } = useSWR<object[]>('/shipments')
  const isLoading = !error && !data

  return (
    <>
      {!isLoading ? (
        <>
          <TableComponent data={data} />
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
