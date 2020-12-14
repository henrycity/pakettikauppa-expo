import {
  render,
  cleanup,
  waitFor,
  fireEvent,
} from '@testing-library/react-native'
import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import Button from 'react-native'
import renderer from 'react-test-renderer'

// import useLogin from '../../hooks/useLogin'
import LoginScreen from '../LoginScreen'

it('LoginScreen renders correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON()

  expect(tree).toMatchSnapshot()
})

jest.mock('../../hooks/useLogin', () => {
  return () => ({ login: jest.fn(), disabled: false })
})
/** 
it('LoginScreen button should ...', async () => {
  const { login, disabled } = useLogin()
  const { findByRole, findByA11yLabel } = render(<LoginScreen />)
  const button = await findByA11yLabel('Login button')
  fireEvent.press(button)
  expect(login.mock.calls.length).toBe(1)
})
*/
