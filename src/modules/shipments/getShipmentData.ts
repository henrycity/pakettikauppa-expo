import server from '../../config'

export default async function getShipmentData(): object[] {
  let res
  await fetch(`${server()}/shipments`)
    .then((response) => response.json())
    .then((data) => (res = data))
  return res
}
