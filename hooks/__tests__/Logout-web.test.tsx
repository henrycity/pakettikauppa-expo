import { render, cleanup, waitFor } from '@testing-library/react-native'
import React from 'react'

import Navigation from '../../navigation/index'
import useUser from '../useUser'

jest.mock('../useUser', () => jest.fn())

describe('Log out button', () => {
  afterEach(cleanup)

  it('should not be visible when not logged in', async () => {
    useUser.mockImplementation(() => ({ user: 'test', isLoggedIn: false }))
    process.env.TEST_ENV = 'web'
    const { queryByText } = render(<Navigation colorScheme="light" />)
    const { isLoggedIn } = useUser()
    expect(isLoggedIn).toEqual(false)
    await waitFor(() => {
      expect(queryByText('Log out')).toBeFalsy()
    })
  })

  it('should be visible when logged in', async () => {
    useUser.mockImplementation(() => ({ user: 'test', isLoggedIn: true }))
    process.env.TEST_ENV = 'web'
    const { getByText } = render(<Navigation colorScheme="light" />)
    const { isLoggedIn } = useUser()
    expect(isLoggedIn).toEqual(true)
    await waitFor(() => {
      expect(getByText('Log out')).toBeTruthy()
    })
  })
})
