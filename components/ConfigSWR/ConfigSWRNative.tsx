import * as SecureStore from 'expo-secure-store'
import React, { useState, useEffect } from 'react'
import { SWRConfig } from 'swr'
import options from './options'

const serverUrl = 'http://192.168.100.11:3000'

const nativeFetcherOptions = (token: string | null) => {
  if (token)
    return {
      credentials: 'include' as const,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  else
    return {
      credentials: 'include' as const,
    }
}

function getNativeFetcher(token: string | null) {
  return (url: string) =>
    fetch(serverUrl + url, nativeFetcherOptions(token)).then((res) =>
      res.json()
    )
}

export default function ConfigSWRNative({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) {
  const [token, setToken] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    SecureStore.getItemAsync('idToken').then((token) => {
      setToken(token)
      setLoaded(true)
    })
  }, [])

  return loaded ? (
    <SWRConfig
      value={{
        fetcher: getNativeFetcher(token),
        ...options
      }}
    >
      {children}
    </SWRConfig>
  ) : null
}
