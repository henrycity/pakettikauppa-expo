import React, { useRef } from 'react'
import useSWR from 'swr'

import Loading from '../../../common/components/Loading'
import TableComponent from './TableComponent'

export default function ShipmentsTable(): JSX.Element {
  // copy Shipment interface from bacend instead of object[]
  const { data, error, isValidating } = useSWR<object[]>('/shipments')
  const isLoading = !error && !data
  const refreshing = data && isValidating

  return (
    <>
      {!isLoading ? (
        <>
          <TableComponent refreshing={refreshing} data={data} />
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
