import React from 'react'
import renderer from 'react-test-renderer'

import StatisticsScreen from '../StatisticsScreen'

it('LoginScreen renders correctly', () => {
  const tree = renderer.create(<StatisticsScreen />).toJSON()

  expect(tree).toMatchSnapshot()
})
