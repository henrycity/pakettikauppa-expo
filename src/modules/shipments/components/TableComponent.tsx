import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, FlatList, Platform, TouchableOpacity } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { Hoverable } from 'react-native-web-hover'
import { mutate } from 'swr'

import Styles from '../../../common/Styles'
import { Text, View, useThemedColors } from '../../../common/Themed'
import { shipmentHeaders, cellData } from '../constants/tableHeaders'
import { Shipment } from '../types'
interface HeaderProps {
  fields: typeof shipmentHeaders
}

function Header({ fields }: HeaderProps) {
  const { t } = useTranslation('shipments')
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ width: 35 }} />
        {fields.map((field: string) => (
          <View
            key={field}
            style={[styles.cell, { flex: cellData[field].flex }]}
          >
            <Text
              numberOfLines={t(field).split(' ').length}
              style={[Styles.subtitle, { textAlign: 'center' }]}
            >
              {t(field)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

interface RowProps {
  headers: typeof shipmentHeaders
  shipment: Shipment
  hovered: boolean
  locale: string
  addSelectedId(id: number): void
  removeSelectedId(id: number): void
}

function Row({
  headers,
  shipment,
  hovered,
  locale,
  addSelectedId,
  removeSelectedId,
}: RowProps) {
  const navigation = useNavigation()
  const themed = useThemedColors()
  const [checked, setChecked] = useState(false)
  const backgroundColor = hovered
    ? themed.activeBackground
    : themed.drawerBackground

  useEffect(() => {
    checked ? addSelectedId(shipment.id) : removeSelectedId(shipment.id)
  }, [checked])

  return (
    <TouchableOpacity
      style={[styles.row, { backgroundColor }]}
      onPress={() =>
        navigation.navigate('DetailsScreen', {
          id: shipment.id,
          shipment,
        })
      }
    >
      <Checkbox.Android
        status={checked ? 'checked' : 'unchecked'}
        testID={`checkbox ${shipment.id}`}
        onPress={() => {
          setChecked(!checked)
        }}
      />
      {headers.map((field) => {
        let content = ''
        if (field === 'createdOn') {
          content = new Date(shipment[field]).toLocaleDateString(locale)
        } else {
          content = shipment[field]?.toString() ?? ''
        }
        return (
          <View
            key={field + shipment.id}
            style={[
              styles.cell,
              { flex: cellData[field].flex, backgroundColor },
            ]}
          >
            <Text
              numberOfLines={1}
              style={[
                Styles.body,
                {
                  fontSize: 14,
                  textAlign: 'center',
                  color: hovered ? '#fff' : themed.text,
                },
              ]}
            >
              {content}
            </Text>
          </View>
        )
      })}
    </TouchableOpacity>
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
  const { i18n } = useTranslation()
  const headers = shipmentHeaders.filter((field) => field !== 'id')
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  function addSelectedId(id: number) {
    const addId = [...selectedIds, id]
    setSelectedIds(addId)
  }

  function removeSelectedId(id: number) {
    setSelectedIds(selectedIds.filter((shipmentId) => shipmentId !== id))
  }

  return (
    <FlatList
      contentContainerStyle={
        Platform.OS === 'web' ? styles.tableWeb : styles.tableNative
      }
      data={data}
      renderItem={({ item }) => (
        <Hoverable>
          {({ hovered }) => (
            <Row
              headers={headers}
              shipment={item}
              hovered={hovered}
              locale={i18n.language}
              addSelectedId={addSelectedId}
              removeSelectedId={removeSelectedId}
            />
          )}
        </Hoverable>
      )}
      ListHeaderComponent={<Header fields={headers} />}
      stickyHeaderIndices={[0]}
      initialNumToRender={25}
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
  container: {
    flexDirection: 'column',
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
})
