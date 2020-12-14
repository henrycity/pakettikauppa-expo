import * as React from 'react'
import useSWR from 'swr'

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

const authFetcher = (
  url: string
): Promise<object & { ok: boolean; user: object }> =>
  // TODO: change the hardcoded path here and elsewhere
  fetch('http://localhost:3000' + url, { credentials: 'include' }).then(
    (res) => {
      return { ok: res.ok, user: res.json() }
    }
  )

// Wrap <Navigation /> to <AuthProvider> in App.tsx
export function AuthenticationProvider({
  children,
}: React.PropsWithChildren<object>): JSX.Element | null {
  const { data, error } = useSWR('/user', authFetcher)
  const isLoading = !error && !data
  const isLoggedIn = data ? data.ok : false
  const user = data ? data.user : null
  return isLoading && !user ? null : (
    <AuthenticationContext.Provider value={{ user, isLoggedIn }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
