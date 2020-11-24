import React from 'react'
import { SWRConfig } from 'swr'

const serverUrl = 'http://localhost:3000'

const webFetcherOptions = {
  credentials: 'include' as const,
}

const webFetcher = (url: string) =>
  fetch(serverUrl + url, webFetcherOptions).then((res) => res.json())

export default function ConfigSWRWeb({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) {
  return (
    <SWRConfig
      value={{
        fetcher: webFetcher,
      }}
    >
      {children}
    </SWRConfig>
  )
}