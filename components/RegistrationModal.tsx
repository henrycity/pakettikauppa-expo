import React, { useState } from 'react'
import { Modal, Text, View, Button, StyleSheet, TextInput } from 'react-native'

import PostRegistration from './PostRegistration'

export default function RegistrationModal(): JSX.Element {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [vat_id, setVat_id] = useState('')
  const [error, setError] = useState(0)

  const handlePress = async () => {
    const response = await PostRegistration(email, vat_id)
    if (response.status === 200) {
      setModalIsVisible(false)
    } else {
      setError(response.status)
    }
  }

  return (
    <>
      <Button onPress={() => setModalIsVisible(true)} title="Register" />
      <Modal
        onRequestClose={() => setModalIsVisible(false)}
        visible={modalIsVisible}
        testID="modelTest"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Please enter your details: </Text>
          <View style={styles.gap} />
          <View>
            {error !== 0 ? (
              <Text style={styles.error}> Error code: {error} </Text>
            ) : null}
          </View>

          <Text> Email: </Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
            defaultValue={email}
          />
          <View style={styles.gap} />

          <Text> VAT ID: </Text>
          <TextInput
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
  gap: {
    height: 10,
  },
})
