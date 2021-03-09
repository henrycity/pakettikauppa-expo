import React from 'react'
import { StyleSheet } from 'react-native'

import { View } from '../../../common/Themed'
import Loading from '../../../common/components/Loading'
import useShipments from '../hooks/useShipments'
import TableComponent from './TableComponent'

export default function TableView(): JSX.Element {
  const { shipments, isLoading, isRefreshing } = useShipments()

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
