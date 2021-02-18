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
    initializeLocalization()
  })

  afterEach(cleanup)

  const comp = (
    <Provider>
      <Navigation colorScheme="light" />
    </Provider>
  )

  it('AddShipment button should be found', async () => {
    process.env.TEST_ENV = 'mobile'
    const { findByA11yLabel, getByTestId } = render(comp)
    const shipmentsLink = await findByA11yLabel('Tab bar link to Shipments')
    fireEvent(shipmentsLink, 'press')
    const AddShipment = await getByTestId('AddShipment')
    expect(AddShipment).toBeTruthy()
  })

  it('AddShipment button should redirect to AddShipmentsOne', async () => {
    process.env.TEST_ENV = 'mobile'
    const { findByA11yLabel, getByTestId, getAllByPlaceholderText } = render(
      comp
    )
    const shipmentsLink = await findByA11yLabel('Tab bar link to Shipments')
    fireEvent(shipmentsLink, 'press')
    const AddShipment = await getByTestId('AddShipment')
    fireEvent(AddShipment, 'press')
    const BusinessID = await getAllByPlaceholderText('Business ID')
    expect(BusinessID).toBeTruthy()
  })

  it('All buttons should be found on Shipments page', async () => {
    process.env.TEST_ENV = 'mobile'
    const { findByA11yLabel, getByTestId } = render(comp)
    const shipmentsLink = await findByA11yLabel('Tab bar link to Shipments')
    fireEvent(shipmentsLink, 'press')
    const AddShipment = await getByTestId('AddShipment')
    expect(AddShipment).toBeTruthy()
    const pickup = await getByTestId('pickup')
    expect(pickup).toBeTruthy()
    const lineHaul = await getByTestId('Line Haul')
    expect(lineHaul).toBeTruthy()
    const Labels = await getByTestId('Multiple Labels')
    expect(Labels).toBeTruthy()
  })
})

// yarn test src/modules/shipments/__tests__/addShipment.test.tsx
