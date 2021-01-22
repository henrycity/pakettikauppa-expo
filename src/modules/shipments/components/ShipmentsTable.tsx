import React from 'react'
import useSWR from 'swr'

import Loading from '../../../common/components/Loading'
import TableComponent from './TableComponent'

export default function ShipmentsTable(): JSX.Element {
  // copy Shipment interface from bacend instead of object[]
  const { data, error } = useSWR<object[]>('/shipments')
  const isLoading = !error && !data

  return (
    <>
      {!isLoading ? (
        <>
          <TableComponent data={data} />
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
