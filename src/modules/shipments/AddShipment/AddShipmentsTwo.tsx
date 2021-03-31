import * as React from 'react'
import { useForm } from 'react-hook-form'
import { ScrollView } from 'react-native'

import { View } from '../../../common/Themed'
import { PreviousButton, NextButton } from '../components/Buttons'
import InputField from '../components/InputField'
import PageIndicator from '../components/PageIndicator'
import { FormDataTwo, ActionType } from '../types'
import { styles } from './Styles'
import { FieldsTwo } from './fields'

interface AddShipmentsTwoProps {
  dispatch: (value: ActionType) => void
  pageTwo: FormDataTwo
  setPageTwo: React.Dispatch<React.SetStateAction<FormDataTwo>>
  page: number
}

export default function AddShipmentsTwo({
  dispatch,
  pageTwo,
  setPageTwo,
  page,
}: AddShipmentsTwoProps): JSX.Element {
  const { control, getValues } = useForm<FormDataTwo>()

  const onPress = () => {
    const finalValues = getValues()
    setPageTwo(finalValues)
  }

  return (
    <ScrollView
      contentContainerStyle={[styles.scrollView, styles.receiverInfoStyle]}
    >
      <PageIndicator dispatch={dispatch} page={page} onPress={onPress} />
      {FieldsTwo({ pageTwo }).map((field) => (
        <InputField
          key={field.name}
          control={control}
          defaultValue={field.defaultValue}
          placeHolder={field.placeHolder}
          name={field.name}
        />
      ))}
      <View style={styles.buttons}>
        {PreviousButton({ dispatch, onPress })}
        {NextButton({ dispatch, onPress })}
      </View>
    </ScrollView>
  )
}
