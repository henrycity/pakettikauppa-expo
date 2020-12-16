import {
  render,
  cleanup,
  waitFor,
  fireEvent,
  act,
} from '@testing-library/react-native'
import React from 'react'

import Navigation from '../../navigation/index'
import useLogout from '../useLogout'
import useUser from '../useUser'

const mockLogout = jest.fn()
jest.mock('../useUser', () => jest.fn())
jest.mock('../useLogout', () => jest.fn())
useLogout.mockImplementation(() => () => mockLogout)

describe('Log out button', () => {
  afterEach(cleanup)

  it('should not be visible when not logged in', async () => {
    useUser.mockImplementation(() => ({ user: 'test', isLoggedIn: false }))
    const { queryByText } = render(<Navigation colorScheme="light" />)
    const { isLoggedIn } = useUser()
    expect(isLoggedIn).toEqual(false)
    await waitFor(() => {
      expect(queryByText('Log out')).toBeFalsy()
    })
  })

  it('should be visible when logged in', async () => {
    useUser.mockImplementation(() => ({ user: 'test', isLoggedIn: true }))
    const { getByText } = render(<Navigation colorScheme="light" />)
    const { isLoggedIn } = useUser()
    expect(isLoggedIn).toEqual(true)
    await waitFor(() => {
      expect(getByText('Log out')).toBeTruthy()
    })
  })

  it('should call logout when pressed', async () => {
    useUser.mockImplementation(() => ({ user: 'test', isLoggedIn: true }))
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
