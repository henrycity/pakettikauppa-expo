import {
  render,
  fireEvent,
  within,
  cleanup,
  GetAllReturn,
  GetReturn,
} from '@testing-library/react-native'
import React from 'react'

import LoginScreen from '../../screens/LoginScreen'

describe('Testing registration modal', () => {
  afterEach(cleanup)

  const component = <LoginScreen />

  it('Should open modal when clicking register', async () => {
    const { getByText, getByTestId } = render(component)

    const button = getByText('Register')
    fireEvent.press(button)

    const modal = getByTestId('modelTest')
    expect(modal.props.visible).toBe(true)
  })

  it('Should not close when submitting without entering anything', async () => {
    const { getByText, getByTestId } = render(component)

    const button = getByText('Register')
    fireEvent.press(button)

    const submit = getByText('Submit')
    fireEvent.press(submit)

    const modal = getByTestId('modelTest')
    expect(modal.props.visible).toBe(true)
  })

  it('Should close modal when pressing back button', async () => {
    const { getByText, getByTestId } = render(component)

    const button = getByText('Register')
    fireEvent.press(button)

    const back = getByText('Go back')
    fireEvent.press(back)

    const modal = getByTestId('modelTest')
    expect(modal.props.visible).toBe(false)
  })
})
