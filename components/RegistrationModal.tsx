import React, { useState } from 'react'
import { Modal, Text, View, Button, StyleSheet, TextInput } from 'react-native'

export default function RegistrationModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [vat_id, setVat_id] = useState('')

  const postAsync = async () => {
    const response = await fetch('https://pk-aalto.setamies.com/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        vat_id,
      }),
    })

    if (response.status === 200) {
      setIsVisible(false)
      setVat_id('')
      setEmail('')
    }
  }

  return (
    <>
      <Button onPress={() => setIsVisible(true)} title="Register" />
      <Modal onRequestClose={() => setIsVisible(false)} visible={isVisible}>
        <View style={styles.container}>
          <Text style={styles.title}>Please enter your details: </Text>
          <View style={{ height: 10 }} />

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

          <Button onPress={() => postAsync()} title="Submit" />

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
})
