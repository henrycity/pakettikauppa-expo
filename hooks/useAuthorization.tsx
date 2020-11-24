import React, { useContext, createContext } from 'react'
import useSWR from 'swr'

import { ScreenName } from '../types'

type PermissionChecker = (screenName: ScreenName) => boolean

interface Permission {
  screen: ScreenName
}

interface AuthState {
  isAuthorized: (screenName: ScreenName) => boolean
  isLoading: boolean
  isError: any
}

interface AccessProviderProps {
  children: JSX.Element | JSX.Element[]
}

/**
 * @returns   Returns a function that given a ScreenName returns a boolean indicating whether user has access to the screen
 *
 * ```typescript
 * const isAuthorized = useAuthorization()
 *
 * return (
 *   isAuthorized(Screens.Profile)) && <LinkToProfile />
 * )
 * ```
 */
export default function useAuthorization(): (
  screenName: ScreenName
) => boolean {
  return useContext(AccessContext)
}

/**
 * Provider for [[`useAuthorization`]]
 */
export function AccessProvider({ children }: AccessProviderProps) {
  const { isAuthorized, isLoading, isError } = _useAuthorization()

  if (!isLoading) {
    return (
      <AccessContext.Provider value={isAuthorized}>
        {children}
      </AccessContext.Provider>
    )
  } else return null
}

function _useAuthorization(): AuthState {
  const { data, error } = useSWR('/permissions')

  const isAuthorized = (screenName: ScreenName) =>
    data?.some((permission: Permission) => permission.screen === screenName)

  return {
    isAuthorized: (screenName: ScreenName) => isAuthorized(screenName),
    isLoading: !error && !data,
    isError: error,
  }
}

const AccessContext = createContext<PermissionChecker>(
  (_screenName: ScreenName) => false
)
