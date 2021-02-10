import * as React from 'react'
import { Controller, Control } from 'react-hook-form'
import { StyleSheet, TextInput } from 'react-native'

interface InputFieldProps {
  control: Control<FormData>
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
        <TextInput
          placeholder={placeHolder}
          style={styles.input}
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
          value={value}
        />
      )}
      name={name}
      defaultValue={defaultValue}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    padding: 10,
    borderRadius: 20,
    margin: 15,
  },
})

export default InputField
