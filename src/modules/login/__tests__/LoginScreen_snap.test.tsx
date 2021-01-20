import { render, fireEvent, cleanup } from '@testing-library/react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import { initializeLocalization } from '../../../localization'
import LoginScreen from '../LoginScreen'

it('LoginScreen renders correctly', () => {
  initializeLocalization()
  const tree = renderer.create(<LoginScreen />).toJSON()

  expect(tree).toMatchSnapshot()
})
