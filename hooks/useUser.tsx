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
  //console.log('data', data)
  //console.log('error', error)
  //  const isLoading = !error && !data
  const isLoggedIn = data && error?.status !== 401
  return (
    <AuthenticationContext.Provider value={{ user: data, isLoggedIn }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
