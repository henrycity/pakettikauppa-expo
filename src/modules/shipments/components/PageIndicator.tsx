import React from 'react'
import { StyleSheet } from 'react-native'

import { View, useThemedColors } from '../../../common/Themed'

const PageIndicator = ({ page }: { page: number }): JSX.Element => {
  const themed = useThemedColors()
  const getColor = (pageNumber: number) =>
    pageNumber === page ? themed.buttonColor : themed.tint

  return (
    <View style={styles.container}>
      <View style={[styles.bar, { backgroundColor: getColor(0) }]} />
      <View style={[styles.bar, { backgroundColor: getColor(1) }]} />
      <View style={[styles.bar, { backgroundColor: getColor(2) }]} />
    </View>
  )
}

export default PageIndicator

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  bar: {
    flexGrow: 0.29,
    height: 5,
  },
})
