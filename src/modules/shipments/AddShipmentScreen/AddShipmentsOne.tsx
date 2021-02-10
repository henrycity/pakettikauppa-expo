import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import Styles from '../../../common/Styles'
import { View, Text } from '../../../common/Themed'
import InputField from '../components/InputField'

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
  businessID: string
  senderName: string
  senderAddress: string
  senderCountry: string
  senderPostCode: string
  senderCity: string
  senderPhoneNumber: string
  senderEmail: string
}

interface AddShipmentsOneProps {
  BackButton: () => JSX.Element
  dispatch: (value: ActionType) => void
  pageOne: FormData
  setPageOne: React.Dispatch<React.SetStateAction<FormData>>
}

export default function AddShipmentsOne({
  BackButton,
  dispatch,
  pageOne,
  setPageOne,
}: AddShipmentsOneProps): JSX.Element {
  const { control, getValues } = useForm<FormData>()

  const NextButton = () => (
    <TouchableOpacity
      accessibilityLabel="next"
      style={Styles.normalButton}
      onPress={() => {
        dispatch({ type: 'next' })
        onSubmit()
      }}
    >
      <Text>NEXT</Text>
    </TouchableOpacity>
  )

  const onSubmit = () => {
    const finalValues = getValues()
    setPageOne(finalValues)
  }
  return (
    <View style={styles.container}>
      <Text>New Shipment</Text>
      <Text>Sender info</Text>
      <View style={{ flexDirection: 'row', margin: 25 }}>
        <View style={{ width: 100, height: 5, backgroundColor: 'red' }} />
        <View style={{ width: 100, height: 5, backgroundColor: 'grey' }} />
        <View style={{ width: 100, height: 5, backgroundColor: 'grey' }} />
      </View>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            placeholder="Business ID"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="businessID"
        rules={{ required: true }}
        defaultValue={pageOne.businessID}
      />
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
        name="senderName"
        defaultValue={pageOne.senderName}
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
        name="senderAddress"
        defaultValue={pageOne.senderAddress}
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
        name="senderCountry"
        defaultValue={pageOne.senderCountry}
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
        name="senderPostCode"
        defaultValue={pageOne.senderPostCode}
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
        name="senderCity"
        defaultValue={pageOne.senderCity}
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
        name="senderPhoneNumber"
        defaultValue={pageOne.senderPhoneNumber}
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
        name="senderEmail"
        defaultValue={pageOne.senderEmail}
      />

      <Text style={styles.title}>SCREEN NO. 1</Text>
      <View style={{ flexDirection: 'row' }}>
        {BackButton()}
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
    paddingHorizontal: 10,
    height: 40,
    padding: 10,
    borderRadius: 20,
    margin: 15,
  },
})

/*
      
      
      <InputField
        control={controlOne}
        placeHolder="Business ID"
        name="BusinessID"
        defaultValue={pageOne.businessID}
      />*/
