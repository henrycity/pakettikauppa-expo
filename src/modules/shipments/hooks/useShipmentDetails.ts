import useSWR from 'swr'
import { mutateCallback } from 'swr/dist/types'

import { Shipment } from '../types'

const useShipmentDetails = (
  id: string | number | undefined,
  initialShipment?: Shipment
): {
  shipment?: Shipment
  isLoading: boolean
  error: Error
  mutate: (
    data?: Shipment | Promise<Shipment> | mutateCallback<Shipment>,
    shouldRevalidate?: boolean
  ) => Promise<Shipment | undefined>
} => {
  const { data, error, mutate } = useSWR<Shipment>(
    `/shipment/?id=${id}`,
    // If there is an initial shipment, provide initial data. The initial shipment can also be undefined or '[object Object]' (string)
    initialShipment?.id ? { initialData: initialShipment } : {}
  )

  const isLoading = !data && !error

  return { shipment: data, isLoading, error, mutate }
}

export default useShipmentDetails
