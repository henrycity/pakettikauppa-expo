import { render, cleanup, waitFor } from '@testing-library/react-native'
import React from 'react'

import Navigation from '../../navigation/index'
import useUser from '../useUser'

jest.mock('../useUser', () => {
  return () => ({ user: 'aa', isLoggedIn: true })
})
jest.mock('../useLogin')

describe('Testing mobile authorization when isLoggedIn === true', () => {
  afterEach(cleanup)

  const comp = <Test />

  it('Profile page should open when isLoggedIn is true', async () => {
    process.env.TEST_ENV = 'mobile'
    const { isLoggedIn } = useUser()
    expect(isLoggedIn).toEqual(true)
    const { getByText } = render(comp)
    await waitFor(() => {
      const ProfileScreen = getByText('Profile Screen!')
      expect(ProfileScreen).toBeTruthy()
    })
  })
})

function Test() {
  return <Navigation colorScheme="light" />
}

// yarn test hooks/__tests__/Login-mobile-true.test.tsx
