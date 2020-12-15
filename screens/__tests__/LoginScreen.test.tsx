import { render, fireEvent } from '@testing-library/react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import useLogin from '../../hooks/useLogin'
import LoginScreen from '../LoginScreen'

it('LoginScreen renders correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON()

  expect(tree).toMatchSnapshot()
})
const mocklogin = { login: jest.fn(), disabled: false }
jest.mock('../../hooks/useLogin', () => {
  return () => mocklogin
})

it('LoginScreen button should ...', async () => {
  const { login, disabled } = useLogin()
  expect(disabled).toBe(false)
  const { findByA11yLabel } = render(<LoginScreen />)
  const button = await findByA11yLabel('Login button')
  fireEvent.press(button)
  expect(login.mock.calls.length).toBe(1)
})

// yarn test -- screens/__tests__/LoginScreen.test.tsx
