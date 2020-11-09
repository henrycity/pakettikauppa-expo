import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
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
  return (
    <View style={styles.container}>
      <HeaderLink
        text="Tab One"
        onPress={() => navigation.navigate('TabOne')}
      />
      <HeaderLink
        text="Tab Two"
        onPress={() => navigation.navigate('TabTwo')}
      />
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
