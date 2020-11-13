import { useEffect, useState } from 'react'

import { ScreenName } from '../types'

interface Permission {
  screenName: ScreenName
}

interface AuthState {
  authHasLoaded: boolean
  isAuthorized: (screenName: ScreenName) => boolean
}

export default function useAuthorization(): AuthState {
  // TODO: Replace following useState and useEffect hooks with SWR implementation
  const [permissions, setPermissions] = useState<Permission[]>([])
  const [isLoaded, setLoaded] = useState(false)
  useEffect(() => {
    setPermissions([{ screenName: 'Profile' }, { screenName: 'Shipments' }])
    setLoaded(true)
  }, [])

  const isAuthorized = (screenName: ScreenName) =>
    permissions.find((permission) => permission.screenName === screenName) !=
    null

  return {
    authHasLoaded: isLoaded,
    isAuthorized: (screenName: ScreenName) => isAuthorized(screenName),
  }
}
