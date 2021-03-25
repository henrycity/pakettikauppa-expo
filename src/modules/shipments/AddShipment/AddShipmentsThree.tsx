import * as React from 'react'
import { useForm } from 'react-hook-form'
import RNPickerSelect from 'react-native-picker-select'
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
      {FieldsThree({ pageThree }).map((field) =>
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
        {PreviousButton({ dispatch, onPress })}
        {SubmitButton({ dispatch, onPress })}
      </View>
    </ScrollView>
  )
}
