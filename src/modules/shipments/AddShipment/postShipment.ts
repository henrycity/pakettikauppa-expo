import AsyncStorage from '@react-native-async-storage/async-storage'

import server from '../../../config'
import { PostShipment, Shipment } from '../types'

const serverURL = server()

const postShipment = async (
  newShipment: PostShipment,
  isMobile: boolean
): Promise<{ success?: string; shipment?: Shipment; errors?: any }> => {
  if (isMobile) {
    const token = await AsyncStorage.getItem('token')
    return fetch(`${serverURL}/shipments`, {
      method: 'POST',
      credentials: 'include' as const,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(newShipment),
    }).then((res) => res.json())
  } else {
    return fetch(`${serverURL}/shipments`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newShipment),
    }).then((res) => res.json())
  }
}

export default postShipment
