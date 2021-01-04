import server from '../../constants/config'

export default async function getShipmentData(): Promise<Response> {
  return fetch(`${server()}/shipments`)
    .then((response) => response.json())
    .then((data) => data)
}
