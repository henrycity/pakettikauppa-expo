import { Feather } from '@expo/vector-icons'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View, TextInput } from 'react-native'
import { useDebounce } from 'use-debounce'

import Styles from '../../../common/Styles'
import { useThemedColors } from '../../../common/Themed'
import { SearchInputProps } from '../types'

const SearchInput = ({
  smallScreen,
  setSearch,
}: SearchInputProps): JSX.Element => {
  const themed = useThemedColors()
  const { t } = useTranslation()

  const [value, setValue] = useState('')

  const [debouncedValue] = useDebounce(value, 350)

  // Improve performance and minimize the amount of api calls by changing the search only when deobunced value changes
  useEffect(() => {
    setSearch(debouncedValue)
  }, [debouncedValue])

  return (
    <View style={[styles.searchSection, { marginLeft: smallScreen ? 0 : 50 }]}>
      <TextInput
        style={[
          Styles.input,
          { color: themed.placeholder },
          { borderColor: themed.placeholder },
        ]}
        placeholder={t('search')}
        placeholderTextColor={themed.placeholder}
        onChangeText={setValue}
        value={value}
      />
      <Feather
        name="search"
        size={20}
        style={styles.searchIcon}
        color={themed.buttonColor}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexGrow: 0,
    flexShrink: 0,
    minHeight: 35,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 19,
    paddingBottom: 8,
    marginHorizontal: 43,
    width: 600,
    marginTop: 20,
    paddingRight: 30,
  },
  searchIcon: {
    position: 'relative',
    left: -30,
  },
})

export default SearchInput
