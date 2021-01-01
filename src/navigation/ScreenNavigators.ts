import ProfileNavigator from '../modules/profile/ProfileNavigator'
import ReportsNavigator from '../modules/reports/ReportsNavigator'
import ShipmentsNavigator from '../modules/shipments/ShipmentsNavigator'
import StatisticsNavigator from '../modules/statistics/StatisticsNavigator'
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
