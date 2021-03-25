import useSWR from 'swr'

import { Shipment } from '../types'

interface UseShipments {
  shipments: Shipment[] | undefined
  isLoading: boolean
  isRefreshing: boolean
}

const useShipments = (): UseShipments => {
  const { data, error, isValidating } = useSWR<Shipment[]>('/shipments')
  const isLoading = !error && !data
  const isRefreshing = Boolean(data && isValidating)

  return { shipments: data, isLoading, isRefreshing }
}

export default useShipments
