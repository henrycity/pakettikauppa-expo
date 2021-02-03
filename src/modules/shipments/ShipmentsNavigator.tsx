import { useFocusEffect } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import useActiveScreen from '../../common/hooks/useActiveScreen'
import ScreenNames from '../../navigation/ScreenNames'
import headerOptions from '../../navigation/headerOptions'
import { ShipmentsParamList } from '../../types'
import AddShipmentsProvider from './AddShipmentScreen/AddShipmentsProvider'
import ShipmentsScreen from './ShipmentsScreen'

const ShipmentStack = createStackNavigator<ShipmentsParamList>()

export default function ShipmentsNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()
  const { t } = useTranslation()

  useFocusEffect(
    useCallback(() => {
      setActiveScreen(ScreenNames.Shipments)
    }, [])
  )

  return (
    <ShipmentStack.Navigator>
      <ShipmentStack.Screen
        name="ShipmentsScreen"
        component={ShipmentsScreen}
        options={{
          ...headerOptions,
          headerTitle: t('shipments'),
        }}
      />
      <ShipmentStack.Screen
        name="AddShipmentsScreen"
        component={AddShipmentsProvider}
        options={{
          ...headerOptions,
          headerTitle: 'Create new Shipment',
        }}
      />
    </ShipmentStack.Navigator>
  )
}
