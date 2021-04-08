import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ScrollView } from 'react-native'

import { View } from '../../../common/Themed'
import { PreviousButton, NextButton } from '../components/Buttons'
import InputField from '../components/InputField'
import SelectionPicker from '../components/SelectionPicker'
import { countryList } from '../constants/shipmentDetails'
import { FormDataTwo, ActionType } from '../types'
import { styles } from './Styles'
import { FieldsTwo } from './fields'

interface AddShipmentsTwoProps {
  dispatch: (value: ActionType) => void
  pageTwo: FormDataTwo
  setPageTwo: React.Dispatch<React.SetStateAction<FormDataTwo>>
}

export default function AddShipmentsTwo({
  dispatch,
  pageTwo,
  setPageTwo,
}: AddShipmentsTwoProps): JSX.Element {
  const { control, getValues } = useForm<FormDataTwo>()

  const onPress = () => {
    const finalValues = getValues()
    setPageTwo(finalValues)
  }

  const { t } = useTranslation('countries')

  const countries = countryList.map((c) => ({
    label: t(c.value),
    value: c.value,
  }))

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {FieldsTwo({ pageTwo }).map((field) =>
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
            items={countries}
          />
        )
      )}
      <View style={styles.buttons}>
        {PreviousButton({ dispatch, onPress })}
        {NextButton({ dispatch, onPress })}
      </View>
    </ScrollView>
  )
}
