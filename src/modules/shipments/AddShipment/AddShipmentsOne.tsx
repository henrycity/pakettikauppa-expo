import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ScrollView } from 'react-native'

import { View } from '../../../common/Themed'
import { BackButton, NextButton } from '../components/Buttons'
import InputField from '../components/InputField'
import SelectionPicker from '../components/SelectionPicker'
import { countryList } from '../constants/shipmentDetails'
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

  const { t } = useTranslation('countries')

  const countries = countryList.map((c) => ({
    label: t(c.value),
    value: c.value,
  }))

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
          <SelectionPicker
            defaultValue={field.defaultValue}
            control={control}
            name={field.name}
            items={countries}
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
