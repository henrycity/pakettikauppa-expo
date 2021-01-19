import server from '../../constants/config'

export default async function getShipmentData() {
  let res
  const response = await fetch(`${server()}/shipments`)
    .then((response) => response.json())
    .then((data) => (res = data))
  return res
}
