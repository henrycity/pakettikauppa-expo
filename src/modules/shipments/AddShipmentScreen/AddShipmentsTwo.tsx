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

type Submit = {
  type: 'submit'
}

type Back = {
  type: 'back'
}

type ActionType = Next | Previous | Submit | Back

type FormData = {
  receiverName: string
  receiverAddress: string
  receiverCountry: string
  receiverPostCode: string
  receiverCity: string
  receiverPhoneNumber: string
  receiverEmail: string
}

interface AddShipmentsTwoProps {
  PreviousButton: () => JSX.Element
  dispatch: (value: ActionType) => void
  pageTwo: FormData
  setPageTwo: React.Dispatch<React.SetStateAction<FormData>>
}

export default function AddShipmentsTwo({
  PreviousButton,
  dispatch,
  pageTwo,
  setPageTwo,
}: AddShipmentsTwoProps): JSX.Element {
  const { control, getValues } = useForm<FormData>()

  const NextButton = () => (
    <TouchableOpacity
      accessibilityLabel="next"
      style={Styles.normalButton}
      onPress={() => {
        onSubmit()
        dispatch({ type: 'next' })
      }}
    >
      <Text>NEXT</Text>
    </TouchableOpacity>
  )

  const onSubmit = () => {
    const finalValues = getValues()
    setPageTwo(finalValues)
  }

  return (
    <View style={styles.container}>
      <Text>New Shipment</Text>
      <Text>receiver info</Text>
      <View style={{ flexDirection: 'row', margin: 15 }}>
        <View style={{ width: 100, height: 5, backgroundColor: 'grey' }} />
        <View style={{ width: 100, height: 5, backgroundColor: 'red' }} />
        <View style={{ width: 100, height: 5, backgroundColor: 'grey' }} />
      </View>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            placeholder="Name"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="receiverName"
        defaultValue={pageTwo.receiverName}
      />

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            placeholder="Address"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="receiverAddress"
        defaultValue={pageTwo.receiverAddress}
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            placeholder="Country"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="receiverCountry"
        defaultValue={pageTwo.receiverCountry}
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            placeholder="Post code"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="receiverPostCode"
        defaultValue={pageTwo.receiverPostCode}
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            placeholder="City"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="receiverCity"
        defaultValue={pageTwo.receiverCity}
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            placeholder="Phone Number"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="receiverPhoneNumber"
        defaultValue={pageTwo.receiverPhoneNumber}
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            placeholder="Email"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="receiverEmail"
        defaultValue={pageTwo.receiverEmail}
      />

      <Text style={styles.title}>SCREEN NO. 2</Text>
      <View style={{ flexDirection: 'row' }}>
        {PreviousButton()}
        {NextButton()}
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
