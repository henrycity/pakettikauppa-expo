// Work in progress

import { render, fireEvent, cleanup } from '@testing-library/react-native'
import { app } from 'firebase'
import React from 'react'
import { AsyncStorage, StyleSheet, Button, Platform } from 'react-native'
import { mutate } from 'swr'

import App from '../../App'
import ConfigSWRNative from '../../components/ConfigSWR/ConfigSWRNative'
import { DeviceTypeContextProvider } from '../../components/DeviceTypeContext'
import RootNavigator from '../../navigation/index'
import useColorScheme from '../useColorScheme'
import { handleIOSAndroidToken } from '../useLogin'
import useUser, { AuthenticationProvider } from '../useUser'

describe('Testing mobile authorization', () => {
  afterEach(cleanup)

  const comp = <Test />

  /**it('login status should be true when token is set', async () => {
        process.env.TEST_ENV = 'mobile'
        render(comp)
        handleIOSAndroidToken('tokeni').then(() => mutate('/user'))
        const { isLoggedIn } = useUser()

        expect(isLoggedIn).toEqual(true)
      })*/

  it('asyncstorage should work', async () => {
    process.env.TEST_ENV = 'mobile'
    handleIOSAndroidToken('tokeni').then(() => {
      const testedToken = AsyncStorage.getItem('token')
      expect(testedToken).toEqual('tokeni')
    })
  })
})

function Test() {
  const colorScheme = useColorScheme()
  return (
    <ConfigSWRNative>
      <AuthenticationProvider>
        <RootNavigator colorScheme={colorScheme} />
      </AuthenticationProvider>
    </ConfigSWRNative>
  )
}
