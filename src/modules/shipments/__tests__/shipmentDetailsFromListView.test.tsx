import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { render, cleanup, fireEvent } from '@testing-library/react-native'
import React from 'react'

import { initializeLocalization } from '../../../localization'
import { ScreenName } from '../../../types'
import ShipmentsNavigator from '../ShipmentsNavigator'
import { mockShipmentData } from '../components/__mocks__/mockShipmentData'

jest.mock('../../login/hooks/useUser', () => {
  return () => ({
    user: 'aa',
    isLoggedIn: true,
    isAuthorized: (_screenName: ScreenName) => true,
  })
})

jest.mock('../../login/hooks/useLogin')

jest.mock('../hooks/useBreakpoint', () => {
  return () => true
})

jest.mock('../hooks/useShipments', () => {
  return () => ({
    shipments: mockShipmentData,
    isLoading: false,
    isRefreshing: false,
  })
})

jest.mock('../hooks/useShipmentDetails', () => {
  return (_id: string | number | undefined, initialShipment?: any) => ({
    shipment: initialShipment,
    error: undefined,
    isLoading: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    mutate: () => {},
  })
})

describe('Adding shipments', () => {
  beforeAll(() => {
    return initializeLocalization()
  })

  afterEach(cleanup)

  const Stack = createStackNavigator()

  const comp = (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Root" component={ShipmentsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )

  it('should navigate to shipment details', async () => {
    const { findByText, getByTestId } = render(comp)
    const listItem1 = getByTestId('item-1')
    expect(listItem1).toBeTruthy()
    fireEvent.press(listItem1)

    const transactionText = await findByText('Transaction: testCode1234')
    expect(transactionText).toBeTruthy()
  })
})

// yarn test src/modules/shipments/__tests__/shipmentDetailsFromListView.test.tsx
