import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, FlatList, Platform, TouchableOpacity } from 'react-native'
import { Hoverable } from 'react-native-web-hover'
import { mutate } from 'swr'

import { Text, View, useThemedColors } from '../../../common/Themed'
import { useSelectedLanguage } from '../../../localization'
import { Shipment } from '../../../types'
import { shipmentHeaders, cellData } from '../constants/tableHeaders'

interface HeaderProps {
  fields: typeof shipmentHeaders
}

function Header({ fields }: HeaderProps) {
  const { t } = useTranslation('shipments')
  return (
    <View style={styles.header}>
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
  locale: string
}

function Row({ headers, shipment, hovered, locale }: RowProps) {
  const navigation = useNavigation()
  const themed = useThemedColors()

  const backgroundColor = hovered ? '#8cb1b7' : themed.drawerBackground
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
      {headers.map((field) => {
        let content = ''
        if (field === 'createdOn') {
          content = new Date(shipment[field]).toLocaleDateString(locale)
        } else {
          content = shipment[field]?.toString()
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
              style={[styles.text, { color: hovered ? '#fff' : themed.text }]}
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
