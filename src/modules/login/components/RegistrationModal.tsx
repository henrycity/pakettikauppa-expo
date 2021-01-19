import React, { useState } from 'react'
import { Modal, Button, StyleSheet } from 'react-native'

import { Text, View, TextInput } from '../../../common/Themed'
import postRegistration from '../postRegistration'

const emailIsValid = (email: string) =>
  email.includes('@') && email.includes('.')

export default function RegistrationModal(): JSX.Element {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [vat_id, setVat_id] = useState('')
  const [errors, setErrors] = useState<Error[]>([])
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false)

  const validateInput = () => {
    const newErrors: Error[] = []
    const isValid = () => newErrors.length === 0

    if (!email) newErrors.push(new Error('Enter an email address'))
    else if (!emailIsValid(email))
      newErrors.push(new Error('Enter a valid email address'))

    if (!vat_id) newErrors.push(new Error('Enter VAT ID'))

    setErrors(newErrors)

    return isValid()
  }

  const handlePress = async () => {
    const isValid = validateInput()
    if (isValid) {
      try {
        const response = await postRegistration(email, vat_id)
        if (response.status === 200) {
          setModalIsVisible(false)
          setDisplaySuccessMessage(true)
          setEmail('')
          setVat_id('')
        } else {
          setErrors([new Error('Unexpected server response')])
        }
      } catch (err) {
        err.message = 'Server error: ' + err.message
        setErrors([err])
      }
    }
  }

  const onRegisterButtonPress = () => {
    setModalIsVisible(true)
    setDisplaySuccessMessage(false)
  }

  const onCloseButtonPress = () => setModalIsVisible(false)

  return (
    <>
      <Button onPress={onRegisterButtonPress} title="Register" />

      <View style={styles.gap} />

      <View>
        {displaySuccessMessage ? (
          <Text style={styles.success}>Registration submitted!</Text>
        ) : null}
      </View>

      <Modal
        onRequestClose={onCloseButtonPress}
        visible={modalIsVisible}
        testID="modalTest"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Please enter your details: </Text>
          <View style={styles.gap} />
          <View>
            {errors.length > 0 &&
              errors.map((error) => (
                <Text key={error.message} style={styles.error}>
                  {error.message}
                </Text>
              ))}
          </View>

          <Text> Email: </Text>
          <TextInput
            testID="Email"
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
            defaultValue={email}
          />
          <View style={styles.gap} />

          <Text> VAT ID: </Text>
          <TextInput
            testID="VAT"
            style={styles.input}
            placeholder="VAT ID"
            autoCapitalize="none"
            onChangeText={(vat_id) => setVat_id(vat_id)}
            defaultValue={vat_id}
          />

          <View style={styles.gap} />

          <Button onPress={() => handlePress()} title="Submit" />

          <View style={styles.gap} />

          <Button onPress={() => setModalIsVisible(false)} title="Close" />
        </View>
      </Modal>
    </>
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
  input: {
    borderBottomWidth: 1.0,
    width: 200,
  },
  error: {
    color: 'red',
  },
  success: {
    color: 'green',
  },
  gap: {
    height: 10,
  },
})
