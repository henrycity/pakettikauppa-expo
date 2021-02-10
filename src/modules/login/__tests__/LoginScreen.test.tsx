import { render, fireEvent, cleanup } from '@testing-library/react-native'
import React from 'react'

import { initializeLocalization } from '../../../localization'
import LoginScreen from '../LoginScreen'
import useLogin from '../hooks/useLogin'

const mocklogin = { login: jest.fn(), disabled: false }
jest.mock('../hooks/useLogin', () => {
  return () => mocklogin
})

describe('loginscreen', () => {
  beforeAll(() => {
    initializeLocalization()
  })
  afterEach(cleanup)

  it('LoginScreen button should ...', async () => {
    const { login, disabled } = useLogin()
    expect(disabled).toBe(false)
    const { findByA11yLabel } = render(<LoginScreen />)
    const button = await findByA11yLabel('Login button')
    fireEvent.press(button)
    expect(login).toHaveBeenCalled()
  })
})
