import { NavigationContainer } from '@react-navigation/native'
import { render, cleanup } from '@testing-library/react-native'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { initializeLocalization } from '..'
import DrawerNavigator from '../../navigation/components/DrawerNavigator'
import { ScreenName } from '../../types'

jest.mock('../../modules/login/hooks/useUser', () => {
  return () => ({
    user: 'aa',
    isLoggedIn: true,
    isAuthorized: (_screenName: ScreenName) => true,
  })
})

describe('Test i18n language functionality', () => {
  beforeAll(() => {
    initializeLocalization()
  })

  afterEach(cleanup)

  it('should support Swedish', async () => {
    const { getByText } = render(<LanguageTestComponent language="se" />)
    const shipmentsText = getByText('Transporter')
    expect(shipmentsText).toBeTruthy()
  })

  it('should support Finnish', async () => {
    const { getByText } = render(<LanguageTestComponent language="fi" />)
    const shipmentsText = getByText('Lähetykset')
    expect(shipmentsText).toBeTruthy()
  })
})

interface LanguageProps {
  language: string
}

function LanguageTestComponent({ language }: LanguageProps) {
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [])

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
