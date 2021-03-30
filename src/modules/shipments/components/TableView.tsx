import React from 'react'
import { StyleSheet } from 'react-native'

import { View } from '../../../common/Themed'
import { ShipmentListView } from '../types'
import TableComponent from './TableComponent'

export default function TableView({
  shipments,
  isRefreshing,
}: ShipmentListView): JSX.Element {
  return (
    <View style={styles.container}>
      <TableComponent
        refreshing={isRefreshing}
        data={shipments ? shipments : []}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
