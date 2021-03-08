import React from 'react'
import { StyleSheet } from 'react-native'
import useSWR from 'swr'

import { View } from '../../../common/Themed'
import Loading from '../../../common/components/Loading'
import { Shipment } from '../types'
import TableComponent from './TableComponent'

export default function TableView(): JSX.Element {
  const { data, error, isValidating } = useSWR<Shipment[]>('/shipments')
  const isLoading = !error && !data
  const refreshing = Boolean(data && isValidating)

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <TableComponent refreshing={refreshing} data={data ?? []} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
