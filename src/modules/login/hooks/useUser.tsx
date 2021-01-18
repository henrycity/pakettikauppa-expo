import * as React from 'react'
import useSWR from 'swr'

import Loading from '../../../common/components/Loading'
import { User, ScreenName } from '../../../types'

type PermissionChecker = (screenName: ScreenName) => boolean | undefined

interface Permission {
  screen: ScreenName
}

export default function useUser(): {
  user: User | null
  isLoggedIn: boolean
  isAuthorized: PermissionChecker
} {
  return React.useContext(AuthenticationContext)
}

const AuthenticationContext = React.createContext<{
  user: User | null
  isLoggedIn: boolean
  isAuthorized: PermissionChecker
}>({
  user: null,
  isLoggedIn: false,
  isAuthorized: (_screenName: ScreenName) => false,
})

// Wrap <Navigation /> to <AuthProvider> in App.tsx
export function AuthenticationProvider({
  children,
}: React.PropsWithChildren<object>): JSX.Element {
  const { data, error } = useSWR('/user', {
    onErrorRetry: (error, _key, _config, revalidate, { retryCount }) => {
      if (error?.status === 403) return

      if (retryCount >= 10) return

      setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 5000)
    },
  })
  const isLoading = !error && !data
  const isLoggedIn = data && error?.status !== 401 && error?.status !== 403
  const isAuthorized = (screenName: ScreenName) =>
    data?.permissions?.some(
      (permission: Permission) => permission.screen === screenName
    )
  return isLoading ? (
    <Loading />
  ) : (
    <AuthenticationContext.Provider
      value={{ user: data, isLoggedIn, isAuthorized }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
