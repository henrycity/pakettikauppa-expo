import { render, fireEvent, cleanup } from '@testing-library/react-native'
import React from 'react'

import { initializeLocalization } from '../../../localization'
import LoginScreen from '../LoginScreen'

describe('Testing registration modal', () => {
  beforeAll(() => {
    initializeLocalization()
  })
  afterEach(cleanup)

  const component = <LoginScreen />

  it('Should open modal when clicking register', async () => {
    const { getByText, getByTestId } = render(component)

    const button = getByText('REGISTER')
    fireEvent.press(button)

    const modal = getByTestId('modalTest')
    expect(modal.props.visible).toBe(true)
  })

  it('Should not close when submitting without entering anything', async () => {
    const { getByText, getByTestId } = render(component)

    const button = getByText('REGISTER')
    fireEvent.press(button)

    const submit = getByText('SUBMIT')
    fireEvent.press(submit)

    const modal = getByTestId('modalTest')
    expect(modal.props.visible).toBe(true)
  })

  it('Should close modal when pressing close button', async () => {
    const { getByText, getByTestId } = render(component)

    const button = getByText('REGISTER')
    fireEvent.press(button)

    const close = getByText('CLOSE')
    fireEvent.press(close)

    const modal = getByTestId('modalTest')
    expect(modal.props.visible).toBe(false)
  })

  it('Should return Enter valid Email when giving a false email', async () => {
    const { getByText, getByTestId } = render(component)

    const button = getByText('Register')
    fireEvent.press(button)

    const email = getByTestId('Email')
    const vat = getByTestId('VAT')
    fireEvent.changeText(email, 'test')
    fireEvent.changeText(vat, '123456qwerty')

    const submit = getByText('Submit')
    fireEvent.press(submit)

    const modal = getByTestId('modalTest')
    expect(modal.props.visible).toBe(true)

    const notification = getByText('Enter a valid email address')
    expect(notification).toBeTruthy()
  })

  it('modal should be visible when VAT ID missing', async () => {
    const { getByText, getByTestId } = render(component)

    const button = getByText('Register')
    fireEvent.press(button)

    const email = getByTestId('Email')
    fireEvent.changeText(email, 'testtest@yahoo.fi')

    const submit = getByText('Submit')
    fireEvent.press(submit)

    const modal = getByTestId('modalTest')
    expect(modal.props.visible).toBe(true)

    const notification = getByText('Enter VAT ID')
    expect(notification).toBeTruthy()
  })
})
