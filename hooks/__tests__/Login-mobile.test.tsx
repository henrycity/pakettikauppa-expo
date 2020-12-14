import { render, cleanup, waitFor } from '@testing-library/react-native'
import React from 'react'
import { debug, exp } from 'react-native-reanimated'

import Navigation from '../../navigation/index'
// import LoginScreen from '../../screens/LoginScreen'
import useUser from '../useUser'

jest.mock('../useUser', () => {
  return () => ({ user: 'aa', isLoggedIn: false })
})

describe('Testing mobile authorization', () => {
  afterEach(cleanup)

  const comp = <Test />

  jest.mock('../useLogin')
  it('login page should open when isLoggedIn is false', async () => {
    process.env.TEST_ENV = 'mobile'
    const { getByText } = render(comp)
    const { isLoggedIn } = useUser()
    expect(isLoggedIn).toEqual(false)
    await waitFor(() => {
      const LoginScreen = getByText('Login or register with a Google account')
      expect(LoginScreen).toBeTruthy()
    })
  })
})

function Test() {
  return <Navigation colorScheme="light" />
}

// yarn test hooks/__tests__/Login-mobile.test.tsx
