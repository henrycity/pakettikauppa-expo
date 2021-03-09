import { Feather } from '@expo/vector-icons'
import React from 'react'
import {
  GestureResponderEvent,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import { useThemedColors } from '../../common/Themed'

const GoBackIcon = ({
  onPress,
}: {
  onPress: (event: GestureResponderEvent) => void
}): JSX.Element => {
  const themed = useThemedColors()
  return (
    <TouchableOpacity style={styles.container}>
      <Feather
        onPress={onPress}
        name="arrow-left"
        size={28}
        color={themed.tint}
      />
    </TouchableOpacity>
  )
}

export default GoBackIcon

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    marginLeft: 10,
  },
})
