import React from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, StyleSheet } from 'react-native'

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
  const themed = useThemedColors()
  const getColor = (pageNumber: number) =>
    pageNumber === page ? themed.buttonColor : themed.tint

  return (
    <View style={styles.container}>
      <ContainerColumn
        onPress={onPress}
        dispatch={dispatch}
        page={0}
        type={{ type: 'sender' }}
        getColor={getColor}
        view="sender"
      />
      <ContainerColumn
        onPress={onPress}
        dispatch={dispatch}
        page={1}
        type={{ type: 'receiver' }}
        getColor={getColor}
        view="receiver"
      />
      <ContainerColumn
        onPress={onPress}
        dispatch={dispatch}
        page={2}
        type={{ type: 'other' }}
        getColor={getColor}
        view="other"
      />
    </View>
  )
}

interface ColumnItem {
  onPress: () => void
  dispatch: (value: ActionType) => void
  page: number
  type: ActionType
  getColor: (pageNumber: number) => string
  view: string
}

const ContainerColumn = ({
  page,
  dispatch,
  onPress,
  type,
  getColor,
  view,
}: ColumnItem) => {
  const { t } = useTranslation()
  return (
    <View style={styles.containerColumn}>
      <Pressable
        onPress={() => {
          onPress()
          dispatch(type)
        }}
      >
        <View>
          <Text style={styles.text}>{t(view)}</Text>
        </View>
        <View style={[styles.bar, { backgroundColor: getColor(page) }]} />
      </Pressable>
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
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 1,
  },
  text: {
    fontSize: 10,
    fontFamily: 'Rubik-Bold',
    textAlign: 'center',
  },
})
