import React from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, StyleSheet } from 'react-native'

import { View, useThemedColors, Text } from '../../../common/Themed'
import { ActionType } from '../types'

const PageIndicator = ({
  page,
  dispatch,
}: {
  page: number
  dispatch: (value: ActionType) => void
}): JSX.Element => {
  const { t } = useTranslation()
  const themed = useThemedColors()
  const getColor = (pageNumber: number) =>
    pageNumber === page ? themed.buttonColor : themed.tint

  return (
    <View style={styles.container}>
      <View style={styles.containerColumn}>
        <Pressable onPress={() => dispatch({ type: 'sender' })}>
          <Text>{t('sender')}</Text>
          <View style={[styles.bar, { backgroundColor: getColor(0) }]} />
        </Pressable>
      </View>
      <View style={styles.containerColumn}>
        <Pressable onPress={() => dispatch({ type: 'receiver' })}>
          <Text>{t('receiver')}</Text>
          <View style={[styles.bar, { backgroundColor: getColor(1) }]} />
        </Pressable>
      </View>
      <View style={styles.containerColumn}>
        <Pressable onPress={() => dispatch({ type: 'other' })}>
          <Text>{t('other')}</Text>
          <View style={[styles.bar, { backgroundColor: getColor(2) }]} />
        </Pressable>
      </View>
    </View>
  )
}

export default PageIndicator

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  containerColumn: {
    flexDirection: 'column',
    flexGrow: 0.3,
    flexBasis: 0,
    justifyContent: 'center',
  },
  bar: {
    flexGrow: 0.29,
    height: 5,
  },
})
