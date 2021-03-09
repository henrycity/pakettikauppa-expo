import useSWR from 'swr'

import { Shipment } from '../types'

const useShipmentDetails = (
  id: string | number | undefined,
  initialShipment?: any
) => {
  const { data, error, mutate } = useSWR<Shipment>(
    `/shipment/?id=${id}`,
    // If there is an initial shipment, provide initial data. The initial shipment can also be undefined or '[object Object]' (string)
    initialShipment?.id ? { initialData: initialShipment } : {}
  )

  const isLoading = !data && !error

  return { shipment: data, isLoading, error, mutate }
}

export default useShipmentDetails
