import * as React from 'react'
import { Controller, Control } from 'react-hook-form'
import {
  StyleSheet,
  TextInput,
  Platform,
  InputAccessoryView,
} from 'react-native'

import { View } from '../../../common/Themed'
import { FormDataOne, FormDataTwo, FormDataThree } from '../types'

interface InputFieldProps {
  control: Control<FormDataOne> | Control<FormDataTwo> | Control<FormDataThree>
  defaultValue: string
  placeHolder: string
  name: string
}

const InputField = ({
  control,
  defaultValue,
  placeHolder,
  name,
}: InputFieldProps): JSX.Element => {
  return (
    <Controller
      control={control}
      render={({ onChange, onBlur, value }) => (
        <>
          <TextInput
            placeholder={placeHolder}
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            returnKeyType="done"
            inputAccessoryViewID={name}
            placeholderTextColor="grey"
          />

          {Platform.OS === 'ios' && (
            <InputAccessoryView nativeID={name}>
              <AccessoryView
                placeHolder={placeHolder}
                value={value}
                onChange={onChange}
              />
            </InputAccessoryView>
          )}
        </>
      )}
      name={name}
      defaultValue={defaultValue}
    />
  )
}

const AccessoryView = ({
  value,
  onChange,
  placeHolder,
}: {
  value: string
  onChange: any
  placeHolder: string
}) => (
  <View style={styles.accessoryView}>
    <TextInput
      placeholder={placeHolder}
      style={{ height: 30, textAlign: 'center' }}
      onChangeText={(value) => onChange(value)}
      value={value}
      returnKeyType="done"
      placeholderTextColor="grey"
    />
  </View>
)

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'rgb(0,0,0)',
    borderWidth: 1,
    paddingHorizontal: 10,
    height: 40,
    minHeight: 40,
    padding: 10,
    borderRadius: 20,
  },
  accessoryView: {
    flex: 1,
    alignItems: 'stretch',
    height: 30,
    borderTopWidth: 1,
    borderColor: 'grey',
  },
})

export default InputField
