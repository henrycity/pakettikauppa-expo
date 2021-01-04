import * as React from 'react'
import useSWR from 'swr'

import { User } from '../types'
import Loading from '../utils/Loading'

export default function useUser(): {
  user: User | null
  isLoggedIn: boolean
} {
  return React.useContext(AuthenticationContext)
}

const AuthenticationContext = React.createContext<{
  user: User | null
  isLoggedIn: boolean
}>({
  user: null,
  isLoggedIn: false,
})

// Wrap <Navigation /> to <AuthProvider> in App.tsx
export function AuthenticationProvider({
  children,
}: React.PropsWithChildren<object>): JSX.Element {
  const { data, error } = useSWR('/user')
  const isLoading = !error && !data
  const isLoggedIn = data && error?.status !== 401 && error?.status !== 403
  return isLoading ? (
    <Loading />
  ) : (
    <AuthenticationContext.Provider value={{ user: data, isLoggedIn }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
