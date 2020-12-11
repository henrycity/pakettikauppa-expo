import { isLoaded } from 'expo-font'
import * as React from 'react'
import useSWR from 'swr'

export default function useUser() {
  return React.useContext(AuthenticationContext)
}

const AuthenticationContext = React.createContext({
  user: null,
  isLoggedIn: false,
})

// Wrap <Navigation /> to <AuthProvider> in App.tsx
export function AuthenticationProvider({ children }) {
  const { data, error } = useSWR('/user')
  const isLoading = !error && !data
  const isLoggedIn = data && error?.status !== 401
  return isLoading ? null : (
    <AuthenticationContext.Provider value={{ user: data, isLoggedIn }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
