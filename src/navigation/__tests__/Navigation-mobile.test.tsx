import { NavigationContainer } from '@react-navigation/native'
import { render, fireEvent, cleanup } from '@testing-library/react-native'
import React from 'react'

import { initializeLocalization } from '../../localization'
import { ScreenName } from '../../types'
import ScreenNames from '../ScreenNames'
import DrawerNavigator from '../components/DrawerNavigator'
import { findDrawerLink } from './Navigation-desktop.test'

jest.mock('../../modules/login/hooks/useUser', () => {
  return () => ({
    user: 'aa',
    isLoggedIn: true,
    isAuthorized: (_screenName: ScreenName) => true,
  })
})

describe('Testing mobile navigation', () => {
  beforeAll(() => {
    initializeLocalization()
  })

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

    const reportsLink = await findDrawerLink(drawerLinks, ScreenNames.Reports)

    fireEvent(reportsLink, 'press')
    const reportsText = await findByText('Reports Screen!')

    expect(reportsText).toBeTruthy()
  })
})

function TestApp() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
