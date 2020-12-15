import React, { useState } from 'react'
import { Modal, Text, View, Button, StyleSheet, TextInput } from 'react-native'

import PostRegistration from './PostRegistration'

export default function RegistrationModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [vat_id, setVat_id] = useState('')
  const [error, setError] = useState('')

  const handlePress = async () => {
    const response = await PostRegistration(email, vat_id)
    if (response.status === 200) {
      setIsVisible(false)
    } else {
      setError(response.status)
    }
  }

  return (
    <>
      <Button onPress={() => setIsVisible(true)} title="Register" />
      <Modal
        onRequestClose={() => setIsVisible(false)}
        visible={isVisible}
        testID="modelTest"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Please enter your details: </Text>
          <View style={{ height: 10 }} />
          <View>
            {error !== '' ? (
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
          <View style={{ height: 10 }} />

          <Text> VAT: </Text>
          <TextInput
            style={styles.input}
            placeholder="VAT"
            autoCapitalize="none"
            onChangeText={(vat_id) => setVat_id(vat_id)}
            defaultValue={vat_id}
          />

          <View style={{ height: 10 }} />

          <Button onPress={() => handlePress()} title="Submit" />

          <View style={{ height: 10 }} />

          <Button onPress={() => setIsVisible(false)} title="Go back" />
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
})
