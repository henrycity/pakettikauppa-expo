import React, { useState } from 'react'
import { FlatList, StyleSheet, Platform, View } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { Hoverable } from 'react-native-web-hover'
import useSWR, { mutate } from 'swr'

import { Text, useThemedColors } from '../../../common/Themed'
import Loading from '../../../common/components/Loading'
import { Shipment } from '../../../types'

export default function ListView(): JSX.Element {
  const { data, error, isValidating } = useSWR<Shipment[]>('/shipments')
  const isLoading = !error && !data
  const refreshing = Boolean(data && isValidating)

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          />
          <FlatList
            data={data}
            contentContainerStyle={
              Platform.OS === 'web'
                ? styles.containerWeb
                : styles.containerNative
            }
            keyExtractor={({ id }) => String(id)}
            ListHeaderComponent={ShipmentsHeaderComponent}
            ListFooterComponent={ShipmentsFooterComponent}
            renderItem={({ item }) => (
              <Hoverable>
                {({ hovered }) => (
                  <ShipmentListItem shipment={item} hovered={hovered} />
                )}
              </Hoverable>
            )}
            refreshing={refreshing}
            onRefresh={() => mutate('/shipments')}
            testID="List Component"
          />
        </>
      )}
    </>
  )
}

interface ShipmentListItemProps {
  shipment: Shipment
  hovered: boolean
}

function ShipmentListItem({ shipment, hovered }: ShipmentListItemProps) {
  const themed = useThemedColors()
  const [checked, setChecked] = useState(false)
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const backgroundColor = hovered
    ? themed.activeBackground
    : themed.drawerBackground
  const color = hovered ? '#fff' : themed.text

  function addSelectedId(id: number) {
    const addId = [...selectedIds, id]
    setSelectedIds(addId)
  }

  function removeSelectedId(id: number) {
    setSelectedIds(selectedIds.filter((shipmentId) => shipmentId !== id))
  }

  return (
    <View style={[styles.shipmentContainer, { backgroundColor }]}>
      <Checkbox.Android
        status={checked ? 'checked' : 'unchecked'}
        testID={`checkbox ${shipment.id}`}
        onPress={() => {
          setChecked(!checked)
          checked ? removeSelectedId(shipment.id) : addSelectedId(shipment.id)
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
          {new Date(shipment.createdOn).toLocaleDateString()}
        </Text>
      </View>
    </View>
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
    paddingVertical: 2,
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
