import * as React from 'react'
import { useForm } from 'react-hook-form'
import { ScrollView } from 'react-native'

import { View } from '../../../common/Themed'
import { BackButton, NextButton } from '../components/Buttons'
import InputField from '../components/InputField'
import PageIndicator from '../components/PageIndicator'
import { FormDataOne, ActionType } from '../types'
import { styles } from './Styles'
import { FieldsOne } from './fields'

interface AddShipmentsOneProps {
  dispatch: (value: ActionType) => void
  pageOne: FormDataOne
  setPageOne: React.Dispatch<React.SetStateAction<FormDataOne>>
  page: number
}

export default function AddShipmentsOne({
  dispatch,
  pageOne,
  setPageOne,
  page,
}: AddShipmentsOneProps): JSX.Element {
  const { control, getValues } = useForm<FormDataOne>()

  const onPress = () => {
    const finalValues = getValues()
    setPageOne(finalValues)
  }

  React.useEffect(() => {
    const finalValues = getValues()
    setPageOne(finalValues)
  }, [dispatch])

  return (
    <View>
      <PageIndicator dispatch={dispatch} page={page} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {FieldsOne({ pageOne }).map((field) => (
          <InputField
            key={field.name}
            control={control}
            defaultValue={field.defaultValue}
            placeHolder={field.placeHolder}
            name={field.name}
          />
        ))}
        <View style={styles.buttons}>
          {BackButton({ dispatch })}
          {NextButton({ onPress, dispatch })}
        </View>
      </ScrollView>
    </View>
  )
}
