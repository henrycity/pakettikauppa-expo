import React from 'react'
import {
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native'

import Styles from '../Styles'
import { Text, useThemedColors } from '../Themed'

interface ButtonProps {
  text: string
  onPress?: (e?: GestureResponderEvent) => void
  testID?: string
  accessibilityLabel: string
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

const Button = ({
  text,
  onPress,
  testID,
  accessibilityLabel,
  style,
  textStyle,
}: ButtonProps) => {
  const themed = useThemedColors()

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Styles.normalButton,
        { backgroundColor: themed.buttonColor },
        style,
      ]}
      testID={testID ?? text}
      accessibilityLabel={accessibilityLabel}
    >
      <Text
        style={[
          Styles.buttonLabel,
          { color: themed.buttonTextColor },
          textStyle,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
