import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  FlatList,
  StyleSheet,
  Platform,
  View,
  TouchableOpacity,
} from 'react-native'
import { Checkbox } from 'react-native-paper'
import { Hoverable } from 'react-native-web-hover'
import { mutate } from 'swr'

import { Text, useThemedColors } from '../../../common/Themed'
import Loading from '../../../common/components/Loading'
import useShipments from '../hooks/useShipments'
import { Shipment } from '../types'

export default function ListView(): JSX.Element {
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const { shipments, isLoading, isRefreshing } = useShipments()

  function addSelectedId(id: number) {
    const addId = [...selectedIds, id]
    setSelectedIds(addId)
  }

  function removeSelectedId(id: number) {
    setSelectedIds(selectedIds.filter((shipmentId) => shipmentId !== id))
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={shipments}
          contentContainerStyle={
            Platform.OS === 'web' ? styles.containerWeb : styles.containerNative
          }
          keyExtractor={({ id }) => String(id)}
          ListHeaderComponent={ShipmentsHeaderComponent}
          ListFooterComponent={ShipmentsFooterComponent}
          renderItem={({ item }) => (
            <Hoverable>
              {({ hovered }) => (
                <ShipmentListItem
                  shipment={item}
                  hovered={hovered}
                  addSelectedId={addSelectedId}
                  removeSelectedId={removeSelectedId}
                />
              )}
            </Hoverable>
          )}
          refreshing={isRefreshing}
          onRefresh={() => mutate('/shipments')}
          testID="List Component"
        />
      )}
    </>
  )
}

interface ShipmentListItemProps {
  shipment: Shipment
  hovered: boolean
  addSelectedId(id: number): void
  removeSelectedId(id: number): void
}

function ShipmentListItem({
  shipment,
  hovered,
  addSelectedId,
  removeSelectedId,
}: ShipmentListItemProps) {
  const navigation = useNavigation()
  const themed = useThemedColors()
  const [checked, setChecked] = useState(false)
  const { i18n } = useTranslation()
  const backgroundColor = hovered
    ? themed.activeBackground
    : themed.drawerBackground

  const color = hovered ? '#fff' : themed.text

  useEffect(() => {
    checked ? addSelectedId(shipment.id) : removeSelectedId(shipment.id)
  }, [checked])

  return (
    <TouchableOpacity
      style={[styles.shipmentContainer, { backgroundColor }]}
      onPress={() =>
        navigation.navigate('DetailsScreen', {
          id: shipment.id,
          shipment,
        })
      }
      testID={`item-${shipment.id}`}
    >
      <Checkbox.Android
        status={checked ? 'checked' : 'unchecked'}
        testID={`checkbox ${shipment.id}`}
        onPress={() => {
          setChecked(!checked)
        }}
      />
      <View style={styles.itemLeft}>
        <Text style={[styles.recipientName, { color }]}>
          {shipment.receiverName}
        </Text>
        <Text style={[styles.defaultField, { color }]}>{shipment.status}</Text>
        <Text style={[styles.defaultField, { color }]}>
          {shipment.receiverPostCode}
        </Text>
        <Text style={[styles.defaultField, { color }]}>
          {shipment.deliveryCompany}: {shipment.shippingMethod}
        </Text>
      </View>
      <View style={styles.itemRight}>
        <Text style={[styles.defaultField, { color }]}>
          {new Date(shipment.createdOn).toLocaleDateString(i18n.language)}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

function ShipmentsHeaderComponent() {
  return null
}

function ShipmentsFooterComponent() {
  return <View style={styles.footer} />
}

const styles = StyleSheet.create({
  containerWeb: {
    height: 0,
    flexGrow: 1,
  },
  containerNative: {
    flexGrow: 1,
  },
  shipmentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 2,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    borderRadius: 2,
  },
  itemLeft: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'stretch',
  },
  itemRight: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  footer: {
    height: 60,
  },
  recipientName: {
    fontFamily: 'Rubik-Bold',
    fontSize: 17,
  },
  defaultField: {
    fontFamily: 'Muli',
    fontSize: 10,
  },
})
