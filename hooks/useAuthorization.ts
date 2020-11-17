import { useEffect, useState } from 'react'
import useSWR from 'swr'

import { ScreenName } from '../types'

interface Permission {
  screenName: ScreenName
}

interface AuthState {
  isAuthorized: (screenName: ScreenName) => boolean
  isLoading: boolean
  isError: any
}

export default function useAuthorization(): AuthState {
  const { data, error } = useSWR('/permissions')
  const [permissions, setPermissions] = useState<Permission[]>([])

  useEffect(() => {
    if (data) setPermissions(data)
  }, [data, error])

  const isAuthorized = (screenName: ScreenName) =>
    permissions.find(
      (permission: Permission) => permission.screenName === screenName
    ) != null

  return {
    isAuthorized: (screenName: ScreenName) => isAuthorized(screenName),
    isLoading: !error && !data,
    isError: error,
  }
}
