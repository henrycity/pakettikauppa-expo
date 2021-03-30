import { Feather } from '@expo/vector-icons'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View, TextInput } from 'react-native'

import Styles from '../../../common/Styles'
import { useThemedColors } from '../../../common/Themed'
import { SearchInputProps } from '../types'

const SearchInput = ({
  search,
  setSearch,
  smallScreen,
}: SearchInputProps): JSX.Element => {
  const themed = useThemedColors()
  const { t } = useTranslation()

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
        onChangeText={(text: string) => {
          setSearch(text)
        }}
        value={search}
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
    minHeight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 19,
    paddingBottom: 8,
    marginHorizontal: 43,
    width: 600,
    marginTop: 20,
  },
  searchIcon: {
    padding: 10,
    position: 'relative',
    left: -40,
  },
})

export default SearchInput
