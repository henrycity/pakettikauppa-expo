import React, { useContext, createContext } from 'react'
import useSWR from 'swr'

import Loading from '../../common/components/Loading'
import { ScreenName } from '../../types'

type PermissionChecker = (screenName: ScreenName) => boolean | undefined

type SWRUserData = Permission[] | undefined

type SWRError = Error | undefined

interface Permission {
  screen: ScreenName
}

interface AuthState {
  isAuthorized: PermissionChecker
  isLoading: boolean
  error: SWRError
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
 *   isAuthorized(ScreenNames.Profile)) && <LinkToProfile />
 * )
 * ```
 */
export default function useAuthorization(): PermissionChecker {
  return useContext(AccessContext)
}

const AccessContext = createContext<PermissionChecker>(
  (_screenName: ScreenName) => false
)

/**
 * Provider for [[`useAuthorization`]]
 */
export function AccessProvider({
  children,
}: AccessProviderProps): JSX.Element | null {
  const { isAuthorized, isLoading } = _useAuthorization()

  return isLoading ? (
    <Loading />
  ) : (
    <AccessContext.Provider value={isAuthorized}>
      {children}
    </AccessContext.Provider>
  )
}

function _useAuthorization(): AuthState {
  const { data, error } = useSWR<SWRUserData, SWRError>('/user')

  const isAuthorized = (screenName: ScreenName) => true

  return {
    isAuthorized: (screenName: ScreenName) => isAuthorized(screenName),
    isLoading: !error && !data,
    error,
  }
}
