import * as React from 'react'
import useSWR from 'swr'
import Loading from '../components/Loading'

export default function useUser(): object {
  return React.useContext(AuthenticationContext)
}

const AuthenticationContext = React.createContext<{
  user: object | null
  isLoggedIn: boolean
}>({
  user: null,
  isLoggedIn: false,
})

// Wrap <Navigation /> to <AuthProvider> in App.tsx
export function AuthenticationProvider({
  children,
}: React.PropsWithChildren<object>): JSX.Element | (() => JSX.Element) {
  const { data, error } = useSWR('/user')
  const isLoading = !error && !data
  const isLoggedIn = data && error?.status !== 401 && error?.status !== 403
  return isLoading ?  (
    <Loading/>
    ) : (
        <AuthenticationContext.Provider value={{ user: data, isLoggedIn }}>
          {children}
        </AuthenticationContext.Provider>
      )
}