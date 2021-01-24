import React from 'react'
import useSWR from 'swr'
import { StyleSheet } from 'react-native'

import Loading from '../../../common/components/Loading'
import { Shipment } from '../../../types'
import TableComponent from './TableComponent'
import { View } from '../../../common/Themed'

export default function TableView(): JSX.Element {
  const { data, error, isValidating } = useSWR<Shipment[]>('/shipments')
  const isLoading = !error && !data
  const refreshing = (data && isValidating) || false

  return (
    <View style={styles.container}>
      {!isLoading ? (
        <>
          <TableComponent refreshing={refreshing} data={data ? data : []} />
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
