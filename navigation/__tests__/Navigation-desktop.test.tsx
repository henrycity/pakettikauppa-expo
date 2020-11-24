import { NavigationContainer } from '@react-navigation/native'
import {
  render,
  fireEvent,
  within,
  cleanup,
  GetAllReturn,
  GetReturn,
} from '@testing-library/react-native'
import React from 'react'

import { DeviceTypeContextProvider } from '../../components/DeviceTypeContext'
import ScreenNames from '../../constants/ScreenNames'
import DrawerNavigator from '../DrawerNavigator'

describe('Testing desktop navigation', () => {
  afterEach(cleanup)

  const component = <TestApp />

  it('should navigate to shipments from the drawer', async () => {
    process.env.TEST_ENV = 'desktop'
    const { getAllByA11yRole, getByText } = render(component)
    const drawerLinks = getAllByA11yRole('button')

    const shipmentsLink = await findDrawerLink(
      drawerLinks,
      ScreenNames.Shipments
    )

    fireEvent(shipmentsLink, 'press')
    const shipmentsText = getByText('Shipments Screen!')

    expect(shipmentsText).toBeTruthy()
  })

  it('should navigate to settings from the drawer', async () => {
    process.env.TEST_ENV = 'desktop'
    const { getAllByA11yRole, getByText } = render(component)
    const drawerLinks = getAllByA11yRole('button')

    const settingsLink = await findDrawerLink(drawerLinks, ScreenNames.Settings)

    fireEvent(settingsLink, 'press')
    const settingsText = getByText('Settings Screen!')

    expect(settingsText).toBeTruthy()
  })
})

export async function findDrawerLink(
  linkList: GetAllReturn,
  linkName: string
): Promise<GetReturn> {
  const linkPromises = linkList.map((link: any) => {
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
    <DeviceTypeContextProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </DeviceTypeContextProvider>
  )
}
