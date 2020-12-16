import { render, fireEvent, cleanup } from '@testing-library/react-native'
import React from 'react'

import LoginScreen from '../../screens/LoginScreen'

describe('Testing registration modal', () => {
  afterEach(cleanup)

  const component = <LoginScreen />

  it('Should open modal when clicking register', async () => {
    const { getByText, getByTestId } = render(component)

    const button = getByText('Register')
    fireEvent.press(button)

    const modal = getByTestId('modalTest')
    expect(modal.props.visible).toBe(true)
  })

  it('Should not close when submitting without entering anything', async () => {
    const { getByText, getByTestId } = render(component)

    const button = getByText('Register')
    fireEvent.press(button)

    const submit = getByText('Submit')
    fireEvent.press(submit)

    const modal = getByTestId('modalTest')
    expect(modal.props.visible).toBe(true)
  })

  it('Should close modal when pressing close button', async () => {
    const { getByText, getByTestId } = render(component)

    const button = getByText('Register')
    fireEvent.press(button)

    const close = getByText('Close')
    fireEvent.press(close)

    const modal = getByTestId('modalTest')
    expect(modal.props.visible).toBe(false)
  })
})
