import server from '../../config'

export default async function postRegistration(
  email: string,
  vat_id: string
): Promise<Response> {
  return fetch(`${server()}/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      vat_id,
    }),
  })
}
