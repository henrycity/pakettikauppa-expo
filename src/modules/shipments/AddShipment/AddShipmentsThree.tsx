import * as React from 'react'
import { useForm } from 'react-hook-form'
import { ScrollView } from 'react-native-web-hover'

import { View } from '../../../common/Themed'
import { PreviousButton, SubmitButton } from '../components/Buttons'
import InputField from '../components/InputField'
import { FormDataThree, ActionType } from '../types'
import { styles } from './Styles'
import { FieldsThree } from './fields'

interface AddShipmentsThreeProps {
  dispatch: (value: ActionType) => void
  pageThree: FormDataThree
  setPageThree: React.Dispatch<React.SetStateAction<FormDataThree>>
}

export default function AddShipmentsThree({
  dispatch,
  pageThree,
  setPageThree,
}: AddShipmentsThreeProps): JSX.Element {
  const { control, getValues } = useForm<FormDataThree>()

  const onPress = () => {
    const finalValues = getValues()
    setPageThree(finalValues)
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {FieldsThree({ pageThree }).map((field) => (
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
        {SubmitButton({ dispatch, onPress })}
      </View>
    </ScrollView>
  )
}
