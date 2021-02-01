import { render, cleanup } from '@testing-library/react-native'
import React from 'react'

import { initializeLocalization } from '../../../../localization'
import ShipmentsScreen from '../../ShipmentsScreen'
import mockShipmentData from '../__mocks__/mockShipmentData'



jest.mock('swr/esm/use-swr', () => {
  return () => ({
    data: mockShipmentData,
    error: undefined,
  })
})

describe('Testing table component', () => {
  beforeAll(() => {
    initializeLocalization()
  })
  afterEach(cleanup)

  const component = <ShipmentsScreen/>

  it('Should display all headers', async () => {
    const { getByText } = render(component)

    expect(getByText('Invoice number')).toBeTruthy()
    expect(getByText('Receiver name')).toBeTruthy()
    expect(getByText('Post code')).toBeTruthy()
    expect(getByText('Post office')).toBeTruthy()
    expect(getByText('Country code')).toBeTruthy()
    expect(getByText('Receiver email')).toBeTruthy()
    expect(getByText('Reference')).toBeTruthy()
    expect(getByText('Price')).toBeTruthy()
    expect(getByText('Status')).toBeTruthy()
    expect(getByText('Latest event')).toBeTruthy()
    expect(getByText('Delivery company')).toBeTruthy()
    expect(getByText('Created on')).toBeTruthy()
  })
/*
  it('Table should exist', async () => {
    const { getByTestId } = render(component)

    expect(getByTestId('Table Component')).toBeTruthy()

  })

  it('Table should have data', async () => {
    const { getByTestId, getByText } = render(component)

    //console.log(getByTestId('Table Component').props.data)
    const element = getByText('FI')
    expect(element).toBeTruthy()

  })
*/
})
