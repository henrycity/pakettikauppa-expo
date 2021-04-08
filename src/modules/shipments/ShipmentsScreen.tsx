import * as React from 'react'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

import BottomTabWrapper from '../../common/components/BottomTabWrapper'
import ListView from './components/ListView'
import SearchInput from './components/SearchInput'
import TableView from './components/TableView'
import useBreakpoint from './hooks/useBreakpoint'

export default function ShipmentsScreen(): JSX.Element {
  const screenIsSmallerThan700 = useBreakpoint(700)
  const [search, setSearch] = useState('')

  const debounced = useDebouncedCallback(setSearch, 350)

  return (
    <BottomTabWrapper>
      <SearchInput
        style={{ marginLeft: screenIsSmallerThan700 ? 0 : 50 }}
        onSearch={debounced}
      />
      {screenIsSmallerThan700 ? (
        <ListView search={search} />
      ) : (
        <TableView search={search} />
      )}
    </BottomTabWrapper>
  )
}
