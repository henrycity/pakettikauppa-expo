import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal, TouchableOpacity } from 'react-native'

import Styles from '../../../common/Styles'
import { useThemedColors, Text, View, TextInput } from '../../../common/Themed'
import postRegistration from '../postRegistration'

const emailIsValid = (email: string) =>
  email.includes('@') && email.includes('.')

export default function RegistrationModal(): JSX.Element {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [vat_id, setVat_id] = useState('')
  const [errors, setErrors] = useState<Error[]>([])
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false)

  const themed = useThemedColors()
  const { t } = useTranslation()

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
        style={[Styles.normalButton, { backgroundColor: themed.buttonColor }]}
        testID="register"
      >
        <Text style={[Styles.buttonLabel, { color: themed.buttonTextColor }]}>
          {t('register')}
        </Text>
      </TouchableOpacity>

      <View style={Styles.gap} />

      <View>
        {displaySuccessMessage ? (
          <Text style={Styles.success}>{t('registerSuccess')}</Text>
        ) : null}
      </View>

      <Modal
        onRequestClose={onCloseButtonPress}
        visible={modalIsVisible}
        testID="modalTest"
      >
        <View style={Styles.container}>
          <Text style={Styles.title}>{t('registerDetails')}</Text>
          <View style={Styles.gap} />
          <View>
            {errors.length > 0 &&
              errors.map((error) => (
                <Text key={error.message} style={Styles.error}>
                  {error.message}
                </Text>
              ))}
          </View>

          <Text>{t('email')}</Text>
          <TextInput
            testID="Email"
            placeholder={t('email')}
            autoCapitalize="none"
            placeholderTextColor={themed.placeholder}
            onChangeText={(email) => setEmail(email)}
            defaultValue={email}
            style={[Styles.input, { color: themed.inputColor }]}
          />
          <View style={Styles.gap} />

          <Text>{t('vatID')}</Text>
          <TextInput
            testID="VAT"
            placeholder={t('vatID')}
            autoCapitalize="none"
            placeholderTextColor={themed.placeholder}
            onChangeText={(vat_id) => setVat_id(vat_id)}
            defaultValue={vat_id}
            style={[Styles.input, { color: themed.inputColor }]}
          />

          <View style={Styles.gap} />
          <TouchableOpacity
            onPress={() => handlePress()}
            style={[
              Styles.normalButton,
              { backgroundColor: themed.buttonColor },
            ]}
            testID="submit"
          >
            <Text
              style={[Styles.buttonLabel, { color: themed.buttonTextColor }]}
            >
              {t('submit')}
            </Text>
          </TouchableOpacity>
          <View style={Styles.gap} />

          <TouchableOpacity
            onPress={() => setModalIsVisible(false)}
            style={[
              Styles.normalButton,
              { backgroundColor: themed.buttonColor },
            ]}
            testID="close"
          >
            <Text
              style={[Styles.buttonLabel, { color: themed.buttonTextColor }]}
            >
              {t('close')}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  )
}
