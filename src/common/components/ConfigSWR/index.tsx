import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { Platform } from 'react-native'
import { SWRConfig } from 'swr'

import server from '../../../config'
import options from './options'

const serverUrl = server()

interface Props {
  children: JSX.Element | JSX.Element[]
}

const fetcherOptions = (token: string | null): RequestInit => {
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

const fetcher = async (url: string): Promise<JSON> => {
  const isWeb = Platform.OS === 'web'
  // Get auth token from AsyncStorage if on mobile
  let token: string | null = null
  if (!isWeb) {
    token = await AsyncStorage.getItem('token')
  }
  const res = await fetch(serverUrl + url, fetcherOptions(token))
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

export default function ({ children }: Props): JSX.Element {
  return (
    <SWRConfig
      value={{
        fetcher,
        ...options,
      }}
    >
      {children}
    </SWRConfig>
  )
}
