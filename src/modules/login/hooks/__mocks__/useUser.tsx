/**export default function useUser() {
  return { user: 'aa', isLoggedIn: true }
}*/
import { ScreenName } from '../../../../types'

export default (): useUserReturnType => () => ({
  user: 'aa',
  isLoggedIn: true,
  isAuthorized: (_screenName: ScreenName) => true,
})

type useUserReturnType = () => { user: string | null; isLoggedIn: boolean }
