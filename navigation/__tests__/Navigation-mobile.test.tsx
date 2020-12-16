import { NavigationContainer } from '@react-navigation/native'
import { render, fireEvent, cleanup } from '@testing-library/react-native'
import React from 'react'

import ScreenNames from '../../constants/ScreenNames'
import DrawerNavigator from '../DrawerNavigator'
import { findDrawerLink } from './Navigation-desktop.test'

describe('Testing mobile navigation', () => {
  afterEach(cleanup)

  const component = <TestApp />

  it('should navigate to shipments from the tab bar', async () => {
    process.env.TEST_ENV = 'mobile'
    const { findByA11yLabel, findByText } = render(component)

    const shipmentsLink = await findByA11yLabel('Tab bar link to Shipments')
    fireEvent(shipmentsLink, 'press')

    const shipmentsText = await findByText('Shipments Screen!')

    expect(shipmentsText).toBeTruthy()
  })

  it('should navigate to settings from the drawer', async () => {
    process.env.TEST_ENV = 'mobile'

    const { findAllByA11yRole, findByText } = render(component)
    const drawerLinks = await findAllByA11yRole('button')

    const settingsLink = await findDrawerLink(drawerLinks, ScreenNames.Settings)

    fireEvent(settingsLink, 'press')
    const settingsText = await findByText('Settings Screen!')

    expect(settingsText).toBeTruthy()
  })
})

function TestApp() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
