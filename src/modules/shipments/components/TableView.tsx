import React from 'react'
import { StyleSheet } from 'react-native'
import useSWR from 'swr'

import { View } from '../../../common/Themed'
import Loading from '../../../common/components/Loading'
import { Shipment } from '../../../types'
import TableComponent from './TableComponent'

export default function TableView(): JSX.Element {
  const { data, error, isValidating } = useSWR<Shipment[]>('/shipments')
  console.log(data)
  const isLoading = !error && !data
  const refreshing = (data && isValidating) || false

  return (
    <View style={styles.container}>
      {!isLoading ? (
        <>
          <TableComponent refreshing={refreshing} data={data ?? []} />
        </>
      ) : (
        <Loading />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
