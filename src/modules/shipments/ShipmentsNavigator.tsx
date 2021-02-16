import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import Styles from '../../common/Styles'
import { useThemedColors } from '../../common/Themed'
import useActiveScreen from '../../common/hooks/useActiveScreen'
import ScreenNames from '../../navigation/ScreenNames'
import GoBackIcon from '../../navigation/components/GoBackIcon'
import headerOptions from '../../navigation/headerOptions'
import { ShipmentsParamList } from '../../types'
import AddShipmentsScreen from './AddShipment/AddShipmentsScreen'
import DetailsScreen from './DetailsScreen'
import ShipmentsScreen from './ShipmentsScreen'
import AddShipmentsHeader from './components/AddShipmentsHeader'

const ShipmentStack = createStackNavigator<ShipmentsParamList>()

export default function ShipmentsNavigator(): JSX.Element {
  const { setActiveScreen } = useActiveScreen()
  const { t } = useTranslation()
  const themed = useThemedColors()
  const navigation = useNavigation()

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
          headerTitleStyle: Styles.header,
          headerStyle: {
            backgroundColor: themed.background,
          },
          headerTintColor: themed.text,
        }}
      />
      <ShipmentStack.Screen
        name="AddShipmentsScreen"
        component={AddShipmentsScreen}
        options={{
          ...headerOptions,
          headerTitle: () => <AddShipmentsHeader />,
          headerTitleStyle: Styles.header,
          headerStyle: {
            backgroundColor: themed.background,
          },
          headerTintColor: themed.text,
          headerLeft: () => (
            <GoBackIcon
              onPress={() => navigation.navigate('ShipmentsScreen')}
            />
          ),
        }}
      />
      <ShipmentStack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          ...headerOptions,
          headerTitle: t('shipmentDetails'),
          headerTitleStyle: Styles.header,
          headerStyle: {
            backgroundColor: themed.background,
          },
          headerTintColor: themed.text,
          headerLeft: () => (
            <GoBackIcon
              onPress={() => navigation.navigate('ShipmentsScreen')}
            />
          ),
        }}
      />
    </ShipmentStack.Navigator>
  )
}
