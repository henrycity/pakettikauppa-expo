import useSWR from 'swr'

import { Shipment } from '../types'

const useShipments = () => {
  const { data, error, isValidating } = useSWR<Shipment[]>('/shipments')
  const isLoading = !error && !data
  const isRefreshing = Boolean(data && isValidating)

  return { shipments: data, isLoading, isRefreshing }
}

export default useShipments
