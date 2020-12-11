import React, { useState, useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import { SWRConfig } from 'swr'

import options from './options'

const serverUrl = 'http://192.168.1.5:3000'

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
  return fetch(serverUrl + url, nativeFetcherOptions(token)).then((res) =>
    res.json()
  )
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
