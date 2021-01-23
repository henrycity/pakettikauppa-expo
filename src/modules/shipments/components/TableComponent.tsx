import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { DataTable } from 'react-native-paper'

import { Text, View } from '../../../common/Themed'
import { cellWidths } from '../constants/tableHeaders'

function Header({ fields }: any) {
  return (
    <View style={styles.row}>
      {fields.map((field: keyof typeof cellWidths) => (
        // Header text should be localized: t(header) (delete this comment)
        <Text key={field} style={{ flexShrink: 0, width: cellWidths[field] }}>
          {field}
        </Text>
      ))}
    </View>
  )
}

function Row({ headers, shipment }: any) {
  return (
    <View style={styles.row}>
      {headers.map((field) => (
        <Text
          key={field + shipment.id}
          style={{ flexShrink: 0, width: cellWidths[field] }}
        >
          {shipment[field] as string}
        </Text>
      ))}
    </View>
  )
}

const mockShipments = [
  {
    id: 1,
    createdOn: '2021-01-03T22:00:00.000Z',
    receiverName: 'Henry',
    receiverEmail: 'henry@posti.fi',
    postCode: '02150',
    postOffice: 'Espoo',
    countryCode: 'FI',
    price: 42,
    status: '',
    reference: '',
    latestEvent: '',
    invoiceNumber: '',
  },
  {
    id: 2,
    createdOn: '2020-12-24T22:00:00.000Z',
    receiverName: 'Joose',
    receiverEmail: 'joose@posti.fi',
    postCode: '01530',
    postOffice: 'Vantaa',
    countryCode: 'FI',
    price: 25,
    status: '',
    reference: '',
    latestEvent: '',
    invoiceNumber: '',
  },
]

// shipment headers shouldn't be depended on back-end
const shipmentHeaders = [
  'createdOn',
  'receiverName',
  'receiverEmail',
  'postCode',
  'postOffice',
  'countryCode',
  'price',
  'status',
  'reference',
  'latestEvent',
  'invoiceNumber',
]

export default function TableComponent({ data }): JSX.Element {
  const shipmentFields = mockShipments.map(({ id, ...displayedFields }) => ({
    ...displayedFields,
  }))
  console.log('shipmentFields', shipmentFields)

  return (
    <DataTable style={{ backgroundColor: 'red' }}>
      <DataTable.Header>
        {shipmentHeaders.map((header) => (
          <DataTable.Title key={header}>{header}</DataTable.Title>
        ))}
      </DataTable.Header>

      {/*
        The backend might return lots of fields and we don't want to display all of them
      */}
      {shipmentFields.map((shipment) => (
        <DataTable.Row>
          <DataTable.Cell>{shipment.createdOn}</DataTable.Cell>
          <DataTable.Cell>{shipment.receiverName}</DataTable.Cell>
          <DataTable.Cell>{shipment.receiverEmail}</DataTable.Cell>
          <DataTable.Cell>{shipment.postCode}</DataTable.Cell>
          <DataTable.Cell>{shipment.postOffice}</DataTable.Cell>
          <DataTable.Cell>{shipment.countryCode}</DataTable.Cell>
          <DataTable.Cell>{shipment.price}</DataTable.Cell>
          <DataTable.Cell>{shipment.status}</DataTable.Cell>
          <DataTable.Cell>{shipment.reference}</DataTable.Cell>
          <DataTable.Cell>{shipment.latestEvent}</DataTable.Cell>
          <DataTable.Cell>{shipment.invoiceNumber}</DataTable.Cell>
        </DataTable.Row>
      ))}
      <DataTable.Pagination
        page={1}
        numberOfPages={3}
        onPageChange={(page) => {
          console.log(page)
        }}
        label="1-2 of 6"
      />
    </DataTable>
  )
}

const styles = StyleSheet.create({
  table: {
    flex: 1,
    overflow: 'scroll',
    margin: 30,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    minHeight: 40,
  },
})
