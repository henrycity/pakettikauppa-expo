import { render, cleanup, fireEvent } from '@testing-library/react-native'
import React from 'react'
import { Provider } from 'react-native-paper'

import { initializeLocalization } from '../../../localization'
import Navigation from '../../../navigation'
import { ScreenName } from '../../../types'

jest.mock('../../login/hooks/useUser', () => {
  return () => ({
    user: 'aa',
    isLoggedIn: true,
    isAuthorized: (_screenName: ScreenName) => true,
  })
})
jest.mock('../../login/hooks/useLogin')

describe('Adding shipments', () => {
  beforeAll(() => {
    return initializeLocalization()
  })

  afterEach(cleanup)

  const comp = (
    <Provider>
      <Navigation colorScheme="light" />
    </Provider>
  )

  test('AddShipment button should be found', async () => {
    process.env.TEST_ENV = 'mobile'
    const { findByA11yLabel, getByTestId, findByTestId } = render(comp)
    const shipmentsLink = await findByA11yLabel('Tab bar link to Shipments')
    fireEvent(shipmentsLink, 'press')
    const AddShipment = findByTestId('AddShipment')
    expect(AddShipment).toBeTruthy()
  })

  test('AddShipment button should redirect to AddShipmentsOne', async () => {
    process.env.TEST_ENV = 'mobile'
    const { findByA11yLabel, findByTestId, getAllByPlaceholderText } = render(
      comp
    )
    const shipmentsLink = await findByA11yLabel('Tab bar link to Shipments')
    fireEvent(shipmentsLink, 'press')
    const AddShipment = findByTestId('AddShipment')
    fireEvent(AddShipment, 'press')
    const BusinessID = getAllByPlaceholderText('Business ID')
    expect(BusinessID).toBeTruthy()
  })

  test('All buttons should be found on Shipments page', async () => {
    process.env.TEST_ENV = 'mobile'
    const { findByA11yLabel, getByTestId } = render(comp)
    const shipmentsLink = await findByA11yLabel('Tab bar link to Shipments')
    fireEvent(shipmentsLink, 'press')
    const AddShipment = getByTestId('AddShipment')
    expect(AddShipment).toBeTruthy()
    const pickup = getByTestId('pickup')
    expect(pickup).toBeTruthy()
    const lineHaul = getByTestId('Line Haul')
    expect(lineHaul).toBeTruthy()
    const Labels = getByTestId('Multiple Labels')
    expect(Labels).toBeTruthy()
  })
})

// yarn test src/modules/shipments/__tests__/addShipment.test.tsx
