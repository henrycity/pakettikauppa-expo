import Constants from 'expo-constants'
import React from 'react'
import { SWRConfig } from 'swr'

import server from '../../constants/config'
import options from './options'

const serverUrl = server()

const webFetcherOptions: RequestInit = {
  credentials: 'include' as const,
}

const webFetcher = async (url: string): Promise<JSON> => {
  const res = await fetch(serverUrl + url, webFetcherOptions)
  if (!res.ok) {
    const error = new Error(
      'An error occurred while fetching the data'
    ) as Error & { info: object | string; status: number }
    const body = await res.text()
    try {
      error.info = JSON.parse(body)
    } catch (e) {
      error.info = body
    }
    error.status = res.status
    throw error
  }
  return res.json()
}

export default function ConfigSWRWeb({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}): JSX.Element {
  return (
    <SWRConfig
      value={{
        fetcher: webFetcher,
        ...options,
      }}
    >
      {children}
    </SWRConfig>
  )
}
