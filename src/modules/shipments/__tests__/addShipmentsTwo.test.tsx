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

  it('AddShipmentsTwo should contain all the needed fields', async () => {
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
    const senderName = await getAllByPlaceholderText('Name')
    expect(senderName).toBeTruthy()
    const senderAddress = await getAllByPlaceholderText('Address')
    expect(senderAddress).toBeTruthy()
    const senderCountry = await getAllByPlaceholderText('Country')
    expect(senderCountry).toBeTruthy()
    const senderPostCode = await getAllByPlaceholderText('Postcode')
    expect(senderPostCode).toBeTruthy()
    const senderCity = await getAllByPlaceholderText('City')
    expect(senderCity).toBeTruthy()
    const senderPhoneNumber = await getAllByPlaceholderText('Phone Number')
    expect(senderPhoneNumber).toBeTruthy()
    const senderEmail = await getAllByPlaceholderText('Email')
    expect(senderEmail).toBeTruthy()
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
    const senderName = await getAllByPlaceholderText('Name')
    fireEvent.changeText(senderName[0], 'Jussi')
    expect(senderName[0].props.value).toEqual('Jussi')
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
    const receiverName = await getAllByPlaceholderText('Name')
    fireEvent.changeText(receiverName[0], 'Jussi')
    expect(receiverName[0].props.value).toEqual('Jussi')
    const nextButton = await getByText('Next')
    fireEvent(nextButton, 'press')
    const previousButton = await getByText('Previous')
    fireEvent(previousButton, 'press')
    const receiverName2 = await getAllByPlaceholderText('Name')
    expect(receiverName2[0].props.value).toEqual('Jussi')
  })
})

// yarn test src/modules/shipments/__tests__/addShipmentsTwo.test.tsx
