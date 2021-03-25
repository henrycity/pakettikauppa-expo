import React from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, StyleSheet, Platform } from 'react-native'

import { View, useThemedColors, Text } from '../../../common/Themed'
import { ActionType } from '../types'

const PageIndicator = ({
  page,
  dispatch,
  onPress,
}: {
  page: number
  dispatch: (value: ActionType) => void
  onPress: () => void
}): JSX.Element => {
  const { t } = useTranslation()
  const themed = useThemedColors()
  const getColor = (pageNumber: number) =>
    pageNumber === page ? themed.buttonColor : themed.tint

  return (
    <View style={styles.container}>
      <View style={styles.containerColumn}>
        <Pressable
          onPress={() => {
            onPress()
            dispatch({ type: 'sender' })
          }}
        >
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{t('sender')}</Text>
          </View>
          <View style={[styles.bar, { backgroundColor: getColor(0) }]} />
        </Pressable>
      </View>
      <View style={styles.containerColumn}>
        <Pressable
          onPress={() => {
            onPress()
            dispatch({ type: 'receiver' })
          }}
        >
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{t('receiver')}</Text>
          </View>
          <View style={[styles.bar, { backgroundColor: getColor(1) }]} />
        </Pressable>
      </View>
      <View style={styles.containerColumn}>
        <Pressable
          onPress={() => {
            onPress()
            dispatch({ type: 'other' })
          }}
        >
          <Text style={styles.text}>{t('other')}</Text>
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
    marginBottom: 10,
    justifyContent: 'space-between',
    maxHeight: 20,
  },
  containerColumn: {
    flexDirection: 'column',
    flexGrow: 0.3,
    flexBasis: 0,
    justifyContent: 'flex-end',
  },
  bar: {
    flexGrow: 0.29,
    height: 5,
  },
  text: {
    fontSize: 10,
    fontFamily: 'Rubik-Bold',
    textAlign: 'center',
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
    padding: 1,
  },
})
