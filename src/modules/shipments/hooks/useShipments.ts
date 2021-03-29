/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import queryString from 'query-string'
import useSWR from 'swr'

import { Shipment } from '../types'

interface UseShipmentsReturnType {
  shipments: Shipment[] | undefined
  isLoading: boolean
  isRefreshing: boolean
}

const useShipments = (search: string): UseShipmentsReturnType => {
  const { data, error, isValidating } = useSWR<Shipment[]>(
    `/shipments${search && '?' + queryString.stringify({ search })}`
  )
  const isLoading = !error && !data
  const isRefreshing = Boolean(data && isValidating)

  return { shipments: data, isLoading, isRefreshing }
}

export default useShipments
