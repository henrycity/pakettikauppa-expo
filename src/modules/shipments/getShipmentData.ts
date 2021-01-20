import server from '../../config'

export default async function getShipmentData(): Promise<object[]> {
  let res: object[] = [{}]
  await fetch(`${server()}/shipments`)
    .then((response) => response.json())
    .then((data) => (res = data))
  return res
}
