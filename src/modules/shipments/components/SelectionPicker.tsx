import * as React from 'react'
import { Control, Controller } from 'react-hook-form'
import RNPickerSelect from 'react-native-picker-select'

import { FormDataOne, FormDataTwo, FormDataThree } from '../types'

interface Items {
  label: string
  value: string
}

interface SelectionProps {
  control: Control<FormDataOne> | Control<FormDataTwo> | Control<FormDataThree>
  name: string
  items: Items[]
  defaultValue: string
}

export default function SelectionPicker({
  name,
  control,
  items,
  defaultValue,
}: SelectionProps): JSX.Element {
  return (
    <Controller
      control={control}
      name={name}
      render={({ onChange, onBlur, value }) => (
        <RNPickerSelect
          value={defaultValue}
          onValueChange={onChange}
          items={items}
        />
      )}
    />
  )
}
