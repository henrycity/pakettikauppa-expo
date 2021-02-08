import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import Styles from '../../../common/Styles'
import { View, Text } from '../../../common/Themed'

type Next = {
  type: 'next'
}

type Previous = {
  type: 'previous'
}

type Reset = {
  type: 'reset'
}

type Back = {
  type: 'back'
}

type ActionType = Next | Previous | Reset | Back

type FormData = {
  sendingMethod: string
  weight: string
  reference: string
  description: string
  invoiceNumber: string
}

interface AddShipmentsThreeProps {
  PreviousButton: () => JSX.Element
  dispatch: (value: ActionType) => void
  pageThree: FormData
  setPageThree: React.Dispatch<React.SetStateAction<FormData>>
  getFinalStates: () => void
}

export default function AddShipmentsThree({
  PreviousButton,
  dispatch,
  pageThree,
  setPageThree,
  getFinalStates,
}: AddShipmentsThreeProps): JSX.Element {
  const navigation = useNavigation()
  const { control, getValues } = useForm<FormData>()

  const SubmitButton = () => (
    <TouchableOpacity
      accessibilityLabel="submit"
      style={Styles.normalButton}
      onPress={() => {
        onSubmit()
        dispatch({ type: 'reset' })
        navigation.navigate('ShipmentsScreen')
      }}
    >
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  )

  const onSubmit = () => {
    const finalValues = getValues()
    setPageThree(finalValues)
    getFinalStates()
  }

  return (
    <View style={styles.container}>
      <Text>New Shipment</Text>
      <Text>Reciever info</Text>
      <View style={{ flexDirection: 'row', margin: 15 }}>
        <View style={{ width: 100, height: 5, backgroundColor: 'grey' }} />
        <View style={{ width: 100, height: 5, backgroundColor: 'grey' }} />
        <View style={{ width: 100, height: 5, backgroundColor: 'red' }} />
      </View>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            placeholder="Sending Method"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="sendingMethod"
        defaultValue={pageThree.sendingMethod}
      />

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            placeholder="Weight"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="weight"
        defaultValue={pageThree.weight}
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            placeholder="Reference"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="reference"
        defaultValue={pageThree.reference}
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            placeholder="Description"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="description"
        defaultValue={pageThree.description}
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            placeholder="Invoice Number"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="invoiceNumber"
        defaultValue={pageThree.invoiceNumber}
      />

      <Text style={styles.title}>SCREEN NO. 3</Text>
      <View style={{ flexDirection: 'row' }}>
        {PreviousButton()}
        {SubmitButton()}
      </View>
    </View>
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
    height: 40,
    padding: 10,
    borderRadius: 20,
    margin: 15,
  },
})
