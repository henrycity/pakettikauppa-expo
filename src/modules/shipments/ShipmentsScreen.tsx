import * as React from 'react'

import { View, Text } from '../../common/Themed'
import BottomTabWrapper from '../../common/components/BottomTabWrapper'
import useDeviceType from '../../common/hooks/useDeviceType'
import ShipmentsTable from './components/ShipmentsTable'

export default function ShipmentsScreen(): JSX.Element {
  const { isMobile } = useDeviceType()

  return (
    <BottomTabWrapper>
      {!isMobile ? (
        <ShipmentsTable />
      ) : (
        <View>
          <Text>Shipments Screen!</Text>
        </View>
      )}
    </BottomTabWrapper>
  )
}
