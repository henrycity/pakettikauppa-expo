import React, { createContext, useContext } from 'react'

import useAuthorization from '../hooks/useAuthorization'
import { ScreenName } from '../types'

type PermissionChecker = (screenName: ScreenName) => boolean

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const AuthorizationContext = createContext<PermissionChecker>(
  (screenName: ScreenName) => false
)

export default function AuthorizationContextProvider({ children }: Props) {
  const { isAuthorized, isLoading, isError } = useAuthorization()

  if (!isLoading) {
    return (
      <AuthorizationContext.Provider value={isAuthorized}>
        {children}
      </AuthorizationContext.Provider>
    )
  } else return null
}
