import * as React from 'react'
import { useState } from 'react'

import BottomTabWrapper from '../../common/components/BottomTabWrapper'
import ListView from './components/ListView'
import SearchInput from './components/Search'
import TableView from './components/TableView'
import useBreakpoint from './hooks/useBreakpoint'
import debounce from 'lodash.debounce'

export default function ShipmentsScreen(): JSX.Element {
  const screenIsSmallerThan700 = useBreakpoint(700)
  const [search, setSearch] = useState('')

  const onSearch = debounce(setSearch, 300, { trailing: true })

  return (
    <BottomTabWrapper>
      <SearchInput smallScreen={screenIsSmallerThan700} onSearch={onSearch} />
      {screenIsSmallerThan700 ? (
        <ListView search={search} />
      ) : (
        <TableView search={search} />
      )}
    </BottomTabWrapper>
  )
}
