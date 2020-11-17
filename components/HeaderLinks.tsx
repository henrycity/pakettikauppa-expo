import React, { useContext } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import { AuthorizationContext } from './AuthorizationContextProvider'
import { Text } from './Themed'

interface HeaderLinkProps {
  text: string
  onPress: () => void
}

function HeaderLink({ text, onPress }: HeaderLinkProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.link}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  )
}

export default function HeaderLinks({ navigation }): JSX.Element {
  const isAuthorized = useContext(AuthorizationContext)
  return (
    <View style={styles.container}>
      <HeaderLink text="Home" onPress={() => navigation.navigate('Home')} />

      {isAuthorized('Profile') ? (
        <HeaderLink
          text="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      ) : null}

      {isAuthorized('Shipments') ? (
        <HeaderLink
          text="Shipments"
          onPress={() => navigation.navigate('Shipments')}
        />
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    paddingHorizontal: 5,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
})
