// Work in progress

import { render, fireEvent, cleanup } from '@testing-library/react-native'
import React from 'react'
import { debug } from 'react-native-reanimated'

import Navigation from '../../navigation/index'

// import Navigation from '../../navigation/index'
// import RootNavigator from '../../navigation/index'
import LoginScreen from '../../screens/LoginScreen'
import useUser from '../useUser'

describe('Testing mobile authorization', () => {
  afterEach(cleanup)

  const comp = <Test />

  jest.mock('../useUser')
  jest.mock('../useLogin')

  it('login page should open when isLoggedIn is false', async () => {
    process.env.TEST_ENV = 'mobile'
    const { getByText, debug } = render(comp)
    const { isLoggedIn } = useUser()
    // console.log(isLoggedIn)
    expect(isLoggedIn).toEqual(false)
    // const loginText = await getByText('Login or register with a Google account')
    // console.log(loginText)
    // expect(loginText).toBeTruthy()
  })

  /**it('login page should come when isLoggedIn is false', async () => {
    process.env.TEST_ENV = 'mobile'
    const { getByText } = render(comp)
    const { isLoggedIn } = useUser()
    expect(isLoggedIn).toEqual(true)
    const loginText = await getByText('Profile Screen!')
    console.log(loginText)
    expect(loginText).toBeTruthy()
  })*/
})

function Test() {
  return <Navigation colorScheme="light" />
}

// yarn test hooks/__tests__/Login-mobile.test.tsx
