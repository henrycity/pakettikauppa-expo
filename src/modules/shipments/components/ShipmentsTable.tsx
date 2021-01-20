import React from 'react'
import { StyleSheet } from 'react-native'
import useSWR from 'swr'

import { Text, View } from '../../../common/Themed'
import tableHeaders from '../constants/tableHeaders'
import Table from './Table'

export default function ShipmentsTable(): JSX.Element {
  const { data, error } = useSWR<object[]>('/shipments')
  const isLoading = !error && !data

  const tableColumns = React.useMemo(() => tableHeaders, [])

  return isLoading ? (
    <View style={styles.container}>
      <Text style={styles.title}>Shipments Screen!</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {error ? <Text>Error: {error}</Text> : null}
    </View>
  ) : // placeholder fix to not break navigationtests
  data ? (
    <Table columns={tableColumns} data={data} />
  ) : (
    <Text style={styles.title}>Shipments Screen!</Text>
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
