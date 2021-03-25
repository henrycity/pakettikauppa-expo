import React from 'react'
import { StyleSheet } from 'react-native'

import { View } from '../../../common/Themed'
import Loading from '../../../common/components/Loading'
import useShipments from '../hooks/useShipments'
import { SearchProps } from '../types'
import TableComponent from './TableComponent'

export default function TableView({ search }: SearchProps): JSX.Element {
  const { shipments, isLoading, isRefreshing } = useShipments(search)

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <TableComponent refreshing={isRefreshing} data={shipments ?? []} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
