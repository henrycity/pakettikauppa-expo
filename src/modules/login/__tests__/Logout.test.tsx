import {
  render,
  cleanup,
  waitFor,
  fireEvent,
  act,
} from '@testing-library/react-native'
import React from 'react'

import { initializeLocalization } from '../../../localization'
import Navigation from '../../../navigation'
import useLogout from '../hooks/useLogout'
import useUser from '../hooks/useUser'

const mockedUseLogout = useLogout as jest.Mock
const mockedUseUser = useUser as jest.Mock

const mockLogout = jest.fn()
jest.mock('../hooks/useUser', () => jest.fn())
jest.mock('../hooks/useLogout', () => jest.fn())
mockedUseLogout.mockImplementation(() => () => mockLogout)

describe('Log out button', () => {
  beforeAll(() => {
    initializeLocalization()
  })

  afterEach(cleanup)

  it('should not be visible when not logged in', async () => {
    mockedUseUser.mockImplementation(() => ({
      user: 'test',
      isLoggedIn: false,
    }))
    const { queryByText } = render(<Navigation colorScheme="light" />)
    const { isLoggedIn } = useUser()
    expect(isLoggedIn).toEqual(false)
    await waitFor(() => {
      expect(queryByText('Log out')).toBeFalsy()
    })
  })

  it('should be visible when logged in', async () => {
    mockedUseUser.mockImplementation(() => ({ user: 'test', isLoggedIn: true }))
    const { getByText } = render(<Navigation colorScheme="light" />)
    const { isLoggedIn } = useUser()
    expect(isLoggedIn).toEqual(true)
    await waitFor(() => {
      expect(getByText('Log out')).toBeTruthy()
    })
  })

  it('should call logout when pressed', async () => {
    mockedUseUser.mockImplementation(() => ({ user: 'test', isLoggedIn: true }))
    const { getByText } = render(<Navigation colorScheme="light" />)
    const { isLoggedIn } = useUser()
    expect(isLoggedIn).toEqual(true)
    await waitFor(() => {
      const button = getByText('Log out')
      act(fireEvent.press(button))
      expect(mockLogout).toHaveBeenCalled()
    })
  })
})
