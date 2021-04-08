import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ScrollView } from 'react-native-web-hover'

import { View } from '../../../common/Themed'
import { PreviousButton, SubmitButton } from '../components/Buttons'
import InputField from '../components/InputField'
import SelectionPicker from '../components/SelectionPicker'
import { shippingMethodList } from '../constants/shipmentDetails'
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

  const { t } = useTranslation('shippingMethods')

  const shippingMethods = shippingMethodList.map((c) => ({
    label: t(c.value),
    value: c.value,
  }))

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
          <SelectionPicker
            key={field.name}
            defaultValue={field.defaultValue}
            control={control}
            name={field.name}
            items={shippingMethods}
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
