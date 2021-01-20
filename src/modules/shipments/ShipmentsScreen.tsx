import * as React from 'react'

import BottomTabWrapper from '../../common/components/BottomTabWrapper'
import TableView from './components/TableView'
import useBreakpoint from './hooks/useBreakpoint'
import ListView from '../../../components/ListView'

export default function ShipmentsScreen(): JSX.Element {
  const screenIsSmallerThan = useBreakpoint(700)

  return (
    <BottomTabWrapper>
      {screenIsSmallerThan ? <ListView /> : <TableView />}
    </BottomTabWrapper>
  )
}
