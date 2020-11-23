import { NavigationContainer } from '@react-navigation/native'
import { render, fireEvent, cleanup } from '@testing-library/react-native'
import React from 'react'

import DeviceTypeContextProvider from '../../components/DeviceTypeContextProvider'
import DrawerNavigator from '../DrawerNavigator'
import { findDrawerLink } from './webTests'

describe('Testing app navigation', () => {
  afterEach(cleanup)

  const component = <TestApp />

  it('should navigate to shipments', async () => {
    process.env.TEST_ENV = 'app'
    const { findByA11yLabel, getByText } = render(component)

    const shipmentsLink = await findByA11yLabel('Tab bar link to Shipments')
    fireEvent(shipmentsLink, 'press')

    const shipmentsText = await getByText('Shipments Screen!')

    expect(shipmentsText).toBeTruthy()
  })

  it('should navigate to settings', async () => {
    process.env.TEST_ENV = 'app'

    const { getAllByA11yRole, getByText } = render(component)
    const drawerLinks = getAllByA11yRole('button')

    const settingsLink = await findDrawerLink(drawerLinks, 'Settings')

    fireEvent(settingsLink, 'press')
    const settingsText = await getByText('Settings Screen!')

    expect(settingsText).toBeTruthy()
    expect(true).toBeTruthy()
  })
})

function TestApp() {
  return (
    <DeviceTypeContextProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </DeviceTypeContextProvider>
  )
}
