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

  it('AddShipmentsThree should contain all the needed fields', async () => {
    process.env.TEST_ENV = 'mobile'
    const {
      findByA11yLabel,
      getByTestId,
      getAllByPlaceholderText,
      getByText,
    } = render(comp)
    const shipmentsLink = await findByA11yLabel('Tab bar link to Shipments')
    fireEvent(shipmentsLink, 'press')
    const AddShipment = await getByTestId('AddShipment')
    fireEvent(AddShipment, 'press')
    const nextButton = await getByText('Next')
    fireEvent(nextButton, 'press')
    const nextButton2 = await getByText('Next')
    fireEvent(nextButton2, 'press')
    const deliveryCompany = await getAllByPlaceholderText('Delivery Company')
    expect(deliveryCompany).toBeTruthy()
    const ShippingMethod = await getAllByPlaceholderText('Shipping Method')
    expect(ShippingMethod).toBeTruthy()
    const Weight = await getAllByPlaceholderText('Weight')
    expect(Weight).toBeTruthy()
    const Reference = await getAllByPlaceholderText('Reference')
    expect(Reference).toBeTruthy()
    const Description = await getAllByPlaceholderText('Description')
    expect(Description).toBeTruthy()
    const InvoiceNumber = await getAllByPlaceholderText('Invoice Number')
    expect(InvoiceNumber).toBeTruthy()
  })
  it('Fields are editable', async () => {
    process.env.TEST_ENV = 'mobile'
    const {
      findByA11yLabel,
      getByTestId,
      getAllByPlaceholderText,
      getByText,
    } = render(comp)
    const shipmentsLink = await findByA11yLabel('Tab bar link to Shipments')
    fireEvent(shipmentsLink, 'press')
    const AddShipment = await getByTestId('AddShipment')
    fireEvent(AddShipment, 'press')
    const nextButton = await getByText('Next')
    fireEvent(nextButton, 'press')
    const nextButton2 = await getByText('Next')
    fireEvent(nextButton2, 'press')
    const ShippingMethod = await getAllByPlaceholderText('Shipping Method')
    fireEvent.changeText(ShippingMethod[0], 'Pikapaketti')
    expect(ShippingMethod[0].props.value).toEqual('Pikapaketti')
  })
  it('Field values stay when coming back', async () => {
    process.env.TEST_ENV = 'mobile'
    const {
      findByA11yLabel,
      getByTestId,
      getAllByPlaceholderText,
      getByText,
    } = render(comp)
    const shipmentsLink = await findByA11yLabel('Tab bar link to Shipments')
    fireEvent(shipmentsLink, 'press')
    const AddShipment = await getByTestId('AddShipment')
    fireEvent(AddShipment, 'press')
    const nextButtonOne = await getByText('Next')
    fireEvent(nextButtonOne, 'press')
    const nextButtonTwo = await getByText('Next')
    fireEvent(nextButtonTwo, 'press')
    const ShippingMethod = await getAllByPlaceholderText('Shipping Method')
    fireEvent.changeText(ShippingMethod[0], 'Pikapaketti')
    expect(ShippingMethod[0].props.value).toEqual('Pikapaketti')
    const previousButton = await getByText('Previous')
    fireEvent(previousButton, 'press')
    const nextButton = await getByText('Next')
    fireEvent(nextButton, 'press')
    const ShippingMethod2 = await getAllByPlaceholderText('Shipping Method')
    expect(ShippingMethod2[0].props.value).toEqual('Pikapaketti')
  })
})

// yarn test src/modules/shipments/__tests__/addShipmentsThree.test.tsx
