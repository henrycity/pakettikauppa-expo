import * as React from 'react'

import BottomTabWrapper from '../../common/components/BottomTabWrapper'
import ListView from './components/ListView'
import TableView from './components/TableView'
import handleResize from './hooks/handleResize'

export default function ShipmentsScreen(): JSX.Element {
  const screenIsSmallerThan = handleResize(700)

  return (
    <BottomTabWrapper>
      {screenIsSmallerThan ? <ListView /> : <TableView />}
    </BottomTabWrapper>
  )
}
