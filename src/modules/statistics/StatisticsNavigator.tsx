import { useFocusEffect } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import Styles from '../../common/Styles'
import { useThemedColors } from '../../common/Themed'
import useActiveScreen from '../../common/hooks/useActiveScreen'
import ScreenNames from '../../navigation/ScreenNames'
import headerOptions from '../../navigation/headerOptions'
import { StatisticsParamList } from '../../types'
import StatisticsScreen from './StatisticsScreen'

const StatisticsStack = createStackNavigator<StatisticsParamList>()

export default function StatisticsNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()
  const { t } = useTranslation()
  const themed = useThemedColors()

  useFocusEffect(
    useCallback(() => {
      setActiveScreen(ScreenNames.Statistics)
    }, [])
  )

  return (
    <StatisticsStack.Navigator>
      <StatisticsStack.Screen
        name="StatisticsScreen"
        component={StatisticsScreen}
        options={{
          ...headerOptions,
          headerTitle: t('statistics'),
          headerTitleStyle: Styles.header,
          headerStyle: {
            backgroundColor: themed.background,
          },
          headerTintColor: themed.text,
        }}
      />
    </StatisticsStack.Navigator>
  )
}
