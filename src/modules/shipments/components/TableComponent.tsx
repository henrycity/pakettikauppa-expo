import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, FlatList, Platform } from 'react-native'
import { Hoverable } from 'react-native-web-hover'
import { mutate } from 'swr'

import { Text, View, useThemedColors } from '../../../common/Themed'
import Checkbox from 'expo-checkbox'
import { Shipment } from '../../../types'
import { shipmentHeaders, cellData } from '../constants/tableHeaders'

interface HeaderProps {
  fields: typeof shipmentHeaders
}

function Header({ fields }: HeaderProps) {
  const { t } = useTranslation('shipments')
  return (
    <View style={styles.header}>
      <Text>       </Text>
      {fields.map((field: string) => (
        <View key={field} style={[styles.cell, { flex: cellData[field].flex }]}>
          <Text
            numberOfLines={t(field).split(' ').length}
            style={styles.headerText}
          >
            {t(field)}
          </Text>
        </View>
      ))}
    </View>
  )
}

interface RowProps {
  headers: typeof shipmentHeaders
  shipment: Shipment
  hovered: boolean
}



let tempSave = []

function Row({ headers, shipment, hovered }: RowProps) {
  const themed = useThemedColors()
  const backgroundColor = hovered ? '#d4d4d4' : themed.drawerBackground
  const [checked, setChecked] = useState(false)
  return (
    <View style={[styles.row, { backgroundColor }]}>
      <Checkbox
        disabled={false}
        value={checked}
        onChange={() => {
          setChecked(!checked)
          checked 
          ? tempSave = tempSave.filter((id) => id !== shipment.id) 
          : tempSave.push(shipment.id);
          console.log(tempSave)
          }
        }
        style={{
          marginLeft: 12,
        }}
      />
      {headers.map((field) => (
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
  const headers = shipmentHeaders.filter((field) => field !== 'id')

  return (
    <FlatList
      contentContainerStyle={
        Platform.OS === 'web' ? styles.tableWeb : styles.tableNative
      }
      data={data}
      renderItem={({ item }) => (
        <Hoverable>
          {({ hovered }) => (
            <Row headers={headers} shipment={item} hovered={hovered} />
          )}
        </Hoverable>
      )}
      ListHeaderComponent={<Header fields={headers} />}
      stickyHeaderIndices={[0]}
      initialNumToRender={10}
      removeClippedSubviews
      keyExtractor={(shipment) => String(shipment.id)}
      onRefresh={() => mutate('/shipments')}
      refreshing={refreshing}
      ListEmptyComponent={<Text>Nothing in the list</Text>}
      testID="Table Component"
    />
  )
}

const styles = StyleSheet.create({
  tableWeb: {
    height: 0,
    flexGrow: 1,
    paddingHorizontal: 25,
    overflow: 'scroll',
  },
  tableNative: {
    flexGrow: 1,
    paddingHorizontal: 25,
  },
  row: {
    paddingVertical: 6,
    marginVertical: 2,
    flexDirection: 'row',
  },
  header: {
    paddingVertical: 15,
    flexDirection: 'row',
  },
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 6,
  },
  text: {
    fontFamily: 'Muli',
    fontSize: 14,
    textAlign: 'center',
  },
  headerText: {
    fontFamily: 'Muli-SemiBold',
    fontSize: 14,
    textAlign: 'center',
  },
})
