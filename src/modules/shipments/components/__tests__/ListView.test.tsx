import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
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

  const component = <TestComponent />

  it('List should exist', async () => {
    const { getByTestId } = render(component)

    expect(getByTestId('List Component')).toBeTruthy()
  })

  it('List should have data', async () => {
    const { getAllByText } = render(component)

    const element = getAllByText('Posti: Noutopistepaketti')
    expect(element).toBeTruthy()
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
