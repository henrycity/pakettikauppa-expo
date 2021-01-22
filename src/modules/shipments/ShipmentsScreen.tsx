import * as React from 'react'

import BottomTabWrapper from '../../common/components/BottomTabWrapper'
import ShipmentsTable from './components/ShipmentsTable'
import useBreakpoint from './hooks/useBreakpoint'

export default function ShipmentsScreen(): JSX.Element {
  const screenIsSmallerThan = useBreakpoint(700)

  return (
    <BottomTabWrapper>
      {screenIsSmallerThan ? <ShipmentsTable /> : <ShipmentsTable />}
    </BottomTabWrapper>
  )
}
