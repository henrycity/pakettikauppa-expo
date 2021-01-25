import React, { useState } from 'react'
import { Modal, TouchableOpacity } from 'react-native'

import Styles from '../../../common/Styles'
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
      <TouchableOpacity
        onPress={onRegisterButtonPress}
        style={Styles.normalButton}
      >
        <Text style={Styles.buttonLabel}>REGISTER</Text>
      </TouchableOpacity>

      <View style={Styles.gap} />

      <View>
        {displaySuccessMessage ? (
          <Text style={Styles.success}>Registration submitted!</Text>
        ) : null}
      </View>

      <Modal
        onRequestClose={onCloseButtonPress}
        visible={modalIsVisible}
        testID="modalTest"
      >
        <View style={Styles.container}>
          <Text style={Styles.title}>Please enter your details: </Text>
          <View style={Styles.gap} />
          <View>
            {errors.length > 0 &&
              errors.map((error) => (
                <Text key={error.message} style={Styles.error}>
                  {error.message}
                </Text>
              ))}
          </View>

          <Text> Email: </Text>
          <TextInput
            testID="Email"
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
            defaultValue={email}
          />
          <View style={Styles.gap} />

          <Text> VAT ID: </Text>
          <TextInput
            testID="VAT"
            placeholder="VAT ID"
            autoCapitalize="none"
            onChangeText={(vat_id) => setVat_id(vat_id)}
            defaultValue={vat_id}
          />

          <View style={Styles.gap} />
          <TouchableOpacity
            onPress={() => handlePress()}
            style={Styles.normalButton}
          >
            <Text style={Styles.buttonLabel}>SUBMIT</Text>
          </TouchableOpacity>
          <View style={Styles.gap} />

          <TouchableOpacity
            onPress={() => setModalIsVisible(false)}
            style={Styles.normalButton}
          >
            <Text style={Styles.buttonLabel}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  )
}
