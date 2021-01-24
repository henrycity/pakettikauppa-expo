import React from 'react'
import useSWR from 'swr'

import Loading from '../../../common/components/Loading'
import TableComponent from './TableComponent'
import { Shipment } from '../../../types'

export default function TableView(): JSX.Element {
  const { data, error, isValidating } = useSWR<Shipment[]>('/shipments')
  const isLoading = !error && !data
  const refreshing = (data && isValidating) || false

  return (
    <>
      {!isLoading ? (
        <>
          <TableComponent refreshing={refreshing} data={data ? data : []} />
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}