import { NavigationContainer } from '@react-navigation/native'
import {
  render,
  fireEvent,
  within,
  cleanup,
  GetAllReturn,
  GetReturn,
  act,
} from '@testing-library/react-native'
import React from 'react'

import { initializeLocalization } from '../../localization'
import DrawerNavigator from '../DrawerNavigator'
import ScreenNames from '../ScreenNames'

jest.mock('../../authorization/useAuthorization')

describe('Testing desktop navigation', () => {
  beforeAll(() => {
    initializeLocalization()
  })

  afterEach(cleanup)

  const component = <TestApp />

  it('should navigate to shipments from the drawer', async () => {
    process.env.TEST_ENV = 'desktop'
    const { findAllByA11yRole, findByText } = render(component)
    const drawerLinks = await findAllByA11yRole('button')

    const shipmentsLink = await findDrawerLink(
      drawerLinks,
      ScreenNames.Shipments
    )

    fireEvent(shipmentsLink, 'press')
    const shipmentsText = await findByText('Shipments Screen!')

    expect(shipmentsText).toBeTruthy()
  })

  it('should navigate to reports from the drawer', async () => {
    process.env.TEST_ENV = 'desktop'
    const { findAllByA11yRole, findByText } = render(component)
    const drawerLinks = await findAllByA11yRole('button')

    const reportsLink = await findDrawerLink(drawerLinks, ScreenNames.Reports)

    act(() => fireEvent(reportsLink, 'press'))
    const reportsText = await findByText('Reports Screen!')

    expect(reportsText).toBeTruthy()
  })
})

export async function findDrawerLink(
  linkList: GetAllReturn,
  linkName: string
): Promise<GetReturn> {
  const linkPromises = linkList.map((link: GetReturn) => {
    // queryAllByText returns all matching nodes with or []
    return within(link).queryAllByText(linkName)
  })

  const links = await Promise.all(linkPromises)
  const link = links.find((x) => x.length > 0)

  if (link) return link[0]
  else
    return new Promise((_resolve, reject) =>
      reject(new Error('Link not found'))
    )
}

function TestApp() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
