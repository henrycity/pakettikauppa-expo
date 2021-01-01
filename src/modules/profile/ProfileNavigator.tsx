import { useFocusEffect } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import useActiveScreen from '../../common/hooks/useActiveScreen'
import ScreenNames from '../../navigation/ScreenNames'
import headerOptions from '../../navigation/headerOptions'
import { ProfileParamList } from '../../types'
import ProfileScreen from './ProfileScreen'

const ProfileStack = createStackNavigator<ProfileParamList>()

export default function ProfileNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()
  const { t } = useTranslation()

  useFocusEffect(
    useCallback(() => {
      setActiveScreen(ScreenNames.Profile)
    }, [])
  )

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          ...headerOptions,
          headerTitle: t('profile'),
        }}
      />
    </ProfileStack.Navigator>
  )
}
