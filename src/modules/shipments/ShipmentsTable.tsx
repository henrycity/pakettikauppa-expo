import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useTable } from 'react-table'

import { Text, View } from '../../common/Themed'
import server from '../../config'
//import getShipmentData from './getShipmentData'

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    initialState: {
      hiddenColumns: ['id'],
    },
  })

  // Style has to be an object and cannot be imported through stylesheets
  return (
    <table
      {...getTableProps()}
      style={{
        borderSpacing: '0 0.3rem',
        padding: '2rem',
        maxWidth: '90rem',
      }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  background: 'white',
                  color: '#233385',
                  fontWeight: 'lighter',
                  textAlign: 'center',
                  paddingBottom: '0.7rem',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '0.3rem',
                      background: '#eeeeee',
                      color: '#233385',
                      textAlign: 'center',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default function ShipmentsTable(): JSX.Element {
  const [shipmentData, setShipmentData] = useState<object[]>([])

  const columns: { Header: string; accessor: string }[] = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Invoice Number',
        accessor: 'invoiceNumber',
      },
      {
        Header: 'Receiver Name',
        accessor: 'receiverName',
      },
      {
        Header: 'Post Code',
        accessor: 'postCode',
      },
      {
        Header: 'Post Office',
        accessor: 'postOffice',
      },
      {
        Header: 'Country Code',
        accessor: 'countryCode',
      },
      {
        Header: 'Receiver Email',
        accessor: 'receiverEmail',
      },
      {
        Header: 'Reference',
        accessor: 'reference',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Latest Event',
        accessor: 'latestEvent',
      },
      {
        Header: 'Created On',
        accessor: 'createdOn',
      },
    ],
    []
  )

  useEffect(() => {
    async function fetchShipmentData() {
      let responseData: object[] = [{}]
      await fetch(`${server()}/shipments`)
        .then((response) => response.json())
        .then((data) => (responseData = data))
      setShipmentData(responseData)
    }
    if (shipmentData.length) {
      return
    }
    fetchShipmentData()
  })

  return !shipmentData.length ? (
    <View style={styles.container}>
      <Text style={styles.title}>Shipments Screen!</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  ) : (
    <Table columns={columns} data={shipmentData} />
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
