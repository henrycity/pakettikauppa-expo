import * as React from 'react'
import { useForm } from 'react-hook-form'
import { ScrollView } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

import { View } from '../../../common/Themed'
import { BackButton, NextButton } from '../components/Buttons'
import InputField from '../components/InputField'
import { FormDataOne, ActionType } from '../types'
import { styles } from './Styles'
import { FieldsOne } from './fields'

interface AddShipmentsOneProps {
  dispatch: (value: ActionType) => void
  pageOne: FormDataOne
  setPageOne: React.Dispatch<React.SetStateAction<FormDataOne>>
}

export default function AddShipmentsOne({
  dispatch,
  pageOne,
  setPageOne,
}: AddShipmentsOneProps): JSX.Element {
  const { control, getValues } = useForm<FormDataOne>()

  const onPress = () => {
    const finalValues = getValues()
    setPageOne(finalValues)
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {FieldsOne({ pageOne }).map((field) =>
        field.fieldType === 'text' ? (
          <InputField
            key={field.name}
            control={control}
            defaultValue={field.defaultValue}
            placeHolder={field.placeHolder}
            name={field.name}
          />
        ) : (
          <RNPickerSelect
            onValueChange={(value) => value}
            items={[
              { label: 'Football', value: 'football' },
              { label: 'Baseball', value: 'baseball' },
              { label: 'Hockey', value: 'hockey' },
            ]}
          />
        )
      )}
      <View style={styles.buttons}>
        {BackButton({ dispatch })}
        {NextButton({ onPress, dispatch })}
      </View>
    </ScrollView>
  )
}
