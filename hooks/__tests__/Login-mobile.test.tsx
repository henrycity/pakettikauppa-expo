import { render, cleanup, waitFor } from '@testing-library/react-native'
import React from 'react'
import { debug, exp } from 'react-native-reanimated'

import Navigation from '../../navigation/index'
// import LoginScreen from '../../screens/LoginScreen'
import useUser from '../useUser'

describe('Testing mobile authorization', () => {
  afterEach(cleanup)

  const comp = <Test />

  jest.mock('../useUser')
  jest.mock('../useLogin')
  it('login page should open when isLoggedIn is false', async () => {
    process.env.TEST_ENV = 'mobile'
    jest.mock('../useUser', () => ({ user: 'aa', isLoggedIn: false }))
    const { isLoggedIn } = useUser()
    expect(isLoggedIn).toEqual(false)
    const { getByText } = render(comp)
    await waitFor(() => {
      const LoginScreen = getByText('Login or register with a Google account')
      expect(LoginScreen).toBeTruthy()
    })
  })

  /** 
  jest.mock('../useUser')
    jest.mock('../useLogin')
  it('Profile page should open when isLoggedIn is true', async () => {
    process.env.TEST_ENV = 'mobile'
    const { isLoggedIn } = useUser()
    expect(isLoggedIn).toEqual(true)
    const { getByText } = render(comp)
    await waitFor(() => {
      const ProfileScreen = getByText('Profile Screen!')
      expect(ProfileScreen).toBeTruthy()
    })
  })*/
})

function Test() {
  return <Navigation colorScheme="light" />
}

// yarn test hooks/__tests__/Login-mobile.test.tsx
