import { render, cleanup } from '@testing-library/react-native'
import React from 'react'

import { initializeLocalization } from '../../../../localization'
import ListView from '../ListView'
import { mockShipmentData } from '../__mocks__/mockShipmentData'

jest.mock('swr', () => {
  return () => ({
    data: mockShipmentData,
    error: undefined,
  })
})

describe('Testing the list component', () => {
  beforeAll(() => {
    initializeLocalization()
  })
  afterEach(cleanup)

  const component = <ListView />

  it('Should display the header and footer', async () => {
    const { getByText } = render(component)

    expect(getByText('Example header')).toBeTruthy()
    expect(getByText('Example footer')).toBeTruthy()
  })
  it('List should exist', async () => {
    const { getByTestId } = render(component)

    expect(getByTestId('List Component')).toBeTruthy()
  })

  it('List should have data', async () => {
    const { getAllByText } = render(component)

    const element = getAllByText('Posti')
    expect(element).toBeTruthy()
  })
})
