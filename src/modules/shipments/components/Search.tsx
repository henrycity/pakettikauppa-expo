/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Feather } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View, TextInput } from 'react-native'

import Styles from '../../../common/Styles'
import { useThemedColors } from '../../../common/Themed'

const SearchInput = ({ smallScreen, setSearch }) => {
  const [value, onChangeText] = React.useState('')
  const themed = useThemedColors()
  const { t } = useTranslation()

  useEffect(() => {
    setSearch(value)
  }, [value])

  return (
    <View style={[styles.searchSection, { marginLeft: smallScreen ? 0 : 50 }]}>
      <TextInput
        style={[
          Styles.input,
          { color: themed.placeholder },
          { borderColor: themed.placeholder },
          { placeholderTextColor: themed.placeholder },
        ]}
        placeholder={t('search')}
        onChangeText={(text) => onChangeText(text)}
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
