import React from 'react'
import { useTable } from 'react-table'

export default function Table({ columns, data }): JSX.Element {
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
        {rows.map((row) => {
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
