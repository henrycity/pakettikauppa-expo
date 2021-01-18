import { NavigationContainer } from '@react-navigation/native'
import { render, cleanup } from '@testing-library/react-native'
import React from 'react'

import { initializeLocalization } from '../../localization'
import DrawerNavigator from '../../navigation/components/DrawerNavigator'
import { ScreenName } from '../../types'

jest.mock('../../modules/login/hooks/useUser', () => {
  return () => ({
    user: 'aa',
    isLoggedIn: true,
    isAuthorized: (screenName: ScreenName) => {
      switch (screenName) {
        case 'Reports':
          return true
        case 'Shipments':
          return false
        case 'Statistics':
          return true
      }
    },
  })
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
    const shipmentsText = queryByText('Shipments')
    const statisticsText = queryByText('Statistics')

    expect(reportsText).toBeTruthy()
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
