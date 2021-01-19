import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useTable } from 'react-table'

import server from '../constants/config'
import { Text, View } from './Themed'

//import getShipmentData from './utils/getShipmentData'

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

/*const fetchShipmentData = async () => {
  let res
  const response = await fetch(`${server()}/shipments`)
          .then(response => response.json())
          .then(data => res = data)
  return res
}*/

export default function ShipmentsTable(): JSX.Element {
  const [shipmentData, setShipmentData] = useState([])

  const columns = React.useMemo(
    () => [
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
        Header: 'ID',
        accessor: 'id',
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
      let res
      const response = await fetch(`${server()}/shipments`)
        .then((response) => response.json())
        .then((data) => (res = data))
      setShipmentData(res)
    }
    if (shipmentData.length) {
      return
    }
    fetchShipmentData()
  })

  return !shipmentData.length ? (
    <View />
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  text: {
    margin: 6,
  },
})
