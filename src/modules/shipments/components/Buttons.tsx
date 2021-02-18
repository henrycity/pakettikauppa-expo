import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet } from 'react-native'

import Button from '../../../common/components/Button'
import { ActionType } from '../types'

interface NextButtonProps {
  dispatch: (value: ActionType) => void
  onPress: () => void
}

interface BackButtonProps {
  dispatch: (value: ActionType) => void
}

interface PreviousButtonProps {
  dispatch: (value: ActionType) => void
  onPress: () => void
}

interface SubmitButtonProps {
  dispatch: (value: ActionType) => void
  onPress: () => void
}

export const NextButton = ({
  dispatch,
  onPress,
}: NextButtonProps): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Button
      accessibilityLabel="next"
      style={styles.button}
      onPress={() => {
        dispatch({ type: 'next' })
        onPress()
      }}
      text={t('next')}
    />
  )
}

export const BackButton = ({ dispatch }: BackButtonProps): JSX.Element => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  return (
    <Button
      accessibilityLabel="back"
      style={styles.button}
      onPress={() => {
        dispatch({ type: 'back' })
        navigation.navigate('ShipmentsScreen')
      }}
      text={t('back')}
    />
  )
}

export const PreviousButton = ({
  dispatch,
  onPress,
}: PreviousButtonProps): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Button
      accessibilityLabel="previous"
      style={styles.button}
      onPress={() => {
        onPress()
        dispatch({ type: 'previous' })
      }}
      text={t('previous')}
    />
  )
}

export const SubmitButton = ({
  onPress,
  dispatch,
}: SubmitButtonProps): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Button
      accessibilityLabel="submit"
      style={styles.button}
      onPress={() => {
        onPress()
        dispatch({ type: 'submit' })
      }}
      text={t('submit')}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
  },
})
