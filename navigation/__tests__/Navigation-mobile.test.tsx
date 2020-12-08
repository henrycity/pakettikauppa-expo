import { NavigationContainer } from '@react-navigation/native'
import { render, fireEvent, cleanup } from '@testing-library/react-native'
import React from 'react'

import Screens from '../../constants/Screens'
import DrawerNavigator from '../DrawerNavigator'
import { findDrawerLink } from './Navigation-desktop.test'

jest.mock('../../hooks/useAuthorization')

describe('Testing mobile navigation', () => {
  afterEach(cleanup)

  const component = <TestApp />

  it('should navigate to shipments from the tab bar', async () => {
    process.env.TEST_ENV = 'mobile'
    const { findByA11yLabel, getByText } = render(component)

    const shipmentsLink = await findByA11yLabel('Tab bar link to Shipments')
    fireEvent(shipmentsLink, 'press')

    const shipmentsText = getByText('Shipments Screen!')

    expect(shipmentsText).toBeTruthy()
  })

  it('should navigate to settings from the drawer', async () => {
    process.env.TEST_ENV = 'mobile'

    const { getAllByA11yRole, getByText } = render(component)
    const drawerLinks = getAllByA11yRole('button')

    const settingsLink = await findDrawerLink(drawerLinks, Screens.Settings)

    fireEvent(settingsLink, 'press')
    const settingsText = getByText('Settings Screen!')

    expect(settingsText).toBeTruthy()
    expect(true).toBeTruthy()
  })
})

function TestApp() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
