import { render, cleanup, waitFor } from '@testing-library/react-native'
import React from 'react'

import { initializeLocalization } from '../../../localization'
import Navigation from '../../../navigation'
import useUser from '../hooks/useUser'

jest.mock('../hooks/useUser', () => {
  return () => ({ user: 'aa', isLoggedIn: false })
})
jest.mock('../hooks/useLogin')
describe('Testing mobile authorization', () => {
  beforeAll(() => {
    initializeLocalization()
  })

  afterEach(cleanup)

  const comp = <Test />

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
