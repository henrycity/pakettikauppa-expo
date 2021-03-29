import { useFocusEffect } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import Styles from '../../common/Styles'
import { useThemedColors } from '../../common/Themed'
import useActiveScreen from '../../common/hooks/useActiveScreen'
import ScreenNames from '../../navigation/ScreenNames'
import headerOptions from '../../navigation/headerOptions'
import { ReportsParamList } from '../../types'
import ReportsScreen from './ReportsScreen'

const ReportsStack = createStackNavigator<ReportsParamList>()

export default function ReportsNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()
  const { t } = useTranslation()
  const themed = useThemedColors()

  useFocusEffect(
    useCallback(() => {
      setActiveScreen(ScreenNames.Reports)
    }, [])
  )

  return (
    <ReportsStack.Navigator>
      <ReportsStack.Screen
        name="ReportsScreen"
        component={ReportsScreen}
        options={{
          ...headerOptions,
          headerTitle: t('reports'),
          headerTitleStyle: Styles.header,
          headerStyle: {
            backgroundColor: themed.background,
          },
          headerTintColor: themed.text,
          title: t('reports'),
        }}
      />
    </ReportsStack.Navigator>
  )
}
