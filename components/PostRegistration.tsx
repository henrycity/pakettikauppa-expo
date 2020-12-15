export default async function PostRegistration(email: string, vat_id: string) {
  return fetch('https://pk-aalto.setamies.com/register', {
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
