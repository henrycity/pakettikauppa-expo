import { NavigationContainer } from '@react-navigation/native'
import { render, cleanup } from '@testing-library/react-native'
import React from 'react'

import { initializeLocalization } from '../../localization'
import DrawerNavigator from '../../navigation/DrawerNavigator'
import { ScreenName } from '../../types'

jest.mock('../../hooks/useAuthorization', () => {
  return () => (screenName: ScreenName) => {
    switch (screenName) {
      case 'Reports':
        return true
      case 'Settings':
        return false
      case 'Shipments':
        return false
      case 'Statistics':
        return true
    }
  }
})

describe('Testing desktop navigation', () => {
  beforeAll(() => {
    initializeLocalization()
  })

  afterEach(cleanup)

  const component = <App />

  it('should not render link to shipments but should render link to reports', async () => {
    const { queryByText } = render(component)

    const reportsText = queryByText('Reports')
    const settingsText = queryByText('Settings')
    const shipmentsText = queryByText('Shipments')
    const statisticsText = queryByText('Statistics')

    expect(reportsText).toBeTruthy()
    expect(settingsText).toBeNull()
    expect(shipmentsText).toBeNull()
    expect(statisticsText).toBeTruthy()
  })
})

function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
