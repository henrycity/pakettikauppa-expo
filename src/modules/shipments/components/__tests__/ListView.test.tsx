import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { render, cleanup, waitFor } from '@testing-library/react-native'
import React from 'react'

import { initializeLocalization } from '../../../../localization'
import ListView from '../ListView'
import { mockShipmentData } from '../__mocks__/mockShipmentData'

jest.mock('../../hooks/useShipments', () => {
  return () => ({
    shipments: mockShipmentData,
    isLoading: false,
    isRefreshing: false,
  })
})

describe('Testing the list component', () => {
  beforeAll(() => {
    return initializeLocalization()
  })
  afterEach(cleanup)

  const component = <TestComponent />

  it('List should exist', async () => {
    const { getByTestId } = render(component)

    const element = await waitFor(() => getByTestId('List Component'))
    expect(element).toBeTruthy()
  })

  it('List should have data', async () => {
    const { getAllByText } = render(component)

    const element = await waitFor(() =>
      getAllByText('Posti: Noutopistepaketti')
    )
    expect(element).toBeTruthy()
  })

  it('Tablerows should have checkboxes', () => {
    const { getByTestId } = render(component)

    expect(getByTestId('checkbox 1')).toBeTruthy()
    expect(getByTestId('checkbox 2')).toBeTruthy()
    expect(getByTestId('checkbox 3')).toBeTruthy()
  })
})

// Create navigation because list item uses useNavigation()
const Stack = createStackNavigator()

function TestComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Root" component={ListView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// yarn test src/modules/shipments/components/__tests__/ListView.test.tsx
