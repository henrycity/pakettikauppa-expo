import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { SWRConfig } from 'swr'

import server from '../../constants/config'
import options from './options'

const serverUrl = server()

const nativeFetcherOptions = (token: string | null) => {
  if (token) {
    return {
      credentials: 'include' as const,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  } else {
    return {
      credentials: 'include' as const,
    }
  }
}

const nativeFetcher = async (url: string) => {
  const token = await AsyncStorage.getItem('token')
  const res = await fetch(serverUrl + url, nativeFetcherOptions(token))
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

export default function ConfigSWRNative({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}): JSX.Element {
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
