import Constants from 'expo-constants'
import React from 'react'
import { SWRConfig } from 'swr'

import options from './options'

const serverUrl = Constants.manifest.extra.server

const nativeFetcherOptions = {
  credentials: 'include' as const,
}

async function nativeFetcher(url: string): Promise<any> {
  return fetch(serverUrl + url, nativeFetcherOptions).then((res) => res.json())
}

export default function ConfigSWRNative({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) {
  return (
    <SWRConfig
      value={{
        fetcher: nativeFetcher,
        ...options,
      }}
    >
      {children}
    </SWRConfig>
  )
}
