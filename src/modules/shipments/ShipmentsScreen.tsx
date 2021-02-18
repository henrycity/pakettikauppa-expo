import * as React from 'react'

import BottomTabWrapper from '../../common/components/BottomTabWrapper'
import HeaderActionButtons from './components/HeaderActionButtons'
import ListView from './components/ListView'
import TableView from './components/TableView'
import useBreakpoint from './hooks/useBreakpoint'

export default function ShipmentsScreen(): JSX.Element {
  const screenIsSmallerThan700 = useBreakpoint(700)

  return (
    <BottomTabWrapper>
      <HeaderActionButtons />

      {screenIsSmallerThan700 ? <ListView /> : <TableView />}
    </BottomTabWrapper>
  )
}
