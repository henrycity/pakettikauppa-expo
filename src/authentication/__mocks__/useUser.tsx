/**export default function useUser() {
  return { user: 'aa', isLoggedIn: true }
}*/

export default (): useUserReturnType => () => ({
  user: 'aa',
  isLoggedIn: true,
})

type useUserReturnType = () => { user: string | null; isLoggedIn: boolean }
