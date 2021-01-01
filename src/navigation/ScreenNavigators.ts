import ProfileNavigator from '../profile'
import ReportsNavigator from '../reports'
import ShipmentsNavigator from '../shipments'
import StatisticsNavigator from '../statistics'
import { ScreenName } from '../types'
import ScreenNames from './ScreenNames'

interface ScreenNavigator {
  navigator: () => JSX.Element
  name: ScreenName
}

export const ScreenNavigators: ScreenNavigator[] = [
  {
    navigator: ProfileNavigator,
    name: ScreenNames.Profile,
  },
]

export const RestrictedScreenNavigators: ScreenNavigator[] = [
  {
    navigator: ReportsNavigator,
    name: ScreenNames.Reports,
  },
  {
    navigator: ShipmentsNavigator,
    name: ScreenNames.Shipments,
  },
  {
    navigator: StatisticsNavigator,
    name: ScreenNames.Statistics,
  },
]
