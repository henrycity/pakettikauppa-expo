import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { render, cleanup } from '@testing-library/react-native'
import React from 'react'

import { initializeLocalization } from '../../../../localization'
import TableView from '../TableView'
import { mockShipmentData } from '../__mocks__/mockShipmentData'

jest.mock('../../hooks/useShipments', () => {
  return () => ({
    shipments: mockShipmentData,
    isLoading: false,
    isRefreshing: false,
  })
})

describe('Testing table component', () => {
  beforeAll(() => {
    return initializeLocalization()
  })

  afterEach(cleanup)

  const component = <TestComponent />

  it('Should display all headers', () => {
    const { getByText } = render(component)

    expect(getByText('Invoice number')).toBeTruthy()
    expect(getByText('Name')).toBeTruthy()
    expect(getByText('Postcode')).toBeTruthy()
    expect(getByText('Post office')).toBeTruthy()
    expect(getByText('Country code')).toBeTruthy()
    expect(getByText('E-mail')).toBeTruthy()
    expect(getByText('Reference')).toBeTruthy()
    expect(getByText('Price')).toBeTruthy()
    expect(getByText('Status code')).toBeTruthy()
    expect(getByText('Latest event')).toBeTruthy()
    expect(getByText('Delivery company')).toBeTruthy()
    expect(getByText('Date')).toBeTruthy()
    expect(getByText('Delivery method')).toBeTruthy()
  })

  test('Table should exist', () => {
    const { getByTestId } = render(component)

    expect(getByTestId('Table Component')).toBeTruthy()
  })

  test('Table should have data', () => {
    const { getAllByText } = render(component)

    const element = getAllByText('Finland')
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
        <Stack.Screen name="Root" component={TableView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
