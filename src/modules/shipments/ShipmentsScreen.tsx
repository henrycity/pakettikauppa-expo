import * as React from 'react'
import { useState } from 'react'
import useSWR from 'swr'
import { useDebounce } from 'use-debounce'
import queryString from 'query-string'

import BottomTabWrapper from '../../common/components/BottomTabWrapper'
import ListView from './components/ListView'
import SearchInput from './components/Search'
import TableView from './components/TableView'
import Loading from '../../common/components/Loading'
import useBreakpoint from './hooks/useBreakpoint'

export default function ShipmentsScreen(): JSX.Element {
  const screenIsSmallerThan700 = useBreakpoint(700)
  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search, 100)

  console.log('debouncedSearch', debouncedSearch)

  console.log(
    'debouncedSearch',
    debouncedSearch
      ? `/shipments${
          debouncedSearch && '?' + queryString.stringify({ debouncedSearch })
        }`
      : null
  )

  const { data: shipments, isValidating, error } = useSWR(() =>
    debouncedSearch
      ? `/shipments${
          debouncedSearch && '?' + queryString.stringify({ debouncedSearch })
        }`
      : null
  )

  const isLoading = !error && !shipments

  const isRefreshing = Boolean(shipments && isValidating)

  return (
    <BottomTabWrapper>
      <SearchInput smallScreen={screenIsSmallerThan700} setSearch={setSearch} />
      {isLoading ? (
        <Loading />
      ) : screenIsSmallerThan700 ? (
        <ListView isRefreshing={isRefreshing} shipments={shipments} />
      ) : (
        <TableView isRefreshing={isRefreshing} shipments={shipments} />
      )}
    </BottomTabWrapper>
  )
}
