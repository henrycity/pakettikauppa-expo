import * as React from 'react'
import { useState } from 'react'

import BottomTabWrapper from '../../common/components/BottomTabWrapper'
import ListView from './components/ListView'
import UselessTextInputMultiline from './components/Search'
import TableView from './components/TableView'
import useBreakpoint from './hooks/useBreakpoint'

export default function ShipmentsScreen(): JSX.Element {
  const screenIsSmallerThan700 = useBreakpoint(700)
  const [search, setSearch] = useState('')

  return (
    <BottomTabWrapper>
      <UselessTextInputMultiline
        smallScreen={screenIsSmallerThan700}
        setSearch={setSearch}
      />
      {screenIsSmallerThan700 ? (
        <ListView search={search} />
      ) : (
        <TableView search={search} />
      )}
    </BottomTabWrapper>
  )
}
