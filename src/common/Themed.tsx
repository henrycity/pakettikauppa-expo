import * as React from 'react'
import {
  Text as DefaultText,
  View as DefaultView,
  TextInput as DefaultTextInput,
  StyleSheet,
} from 'react-native'

import Colors from './Colors'
import Styles from './Styles'
import useColorScheme from './hooks/useColorScheme'

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
): string {
  const theme = useColorScheme()
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return Colors[theme][colorName]
  }
}

export function useThemedColors(): typeof Colors.light & typeof Colors.dark {
  const theme = useColorScheme()
  return Colors[theme]
}

type ThemeProps = {
  lightColor?: string
  darkColor?: string
}

export type TextProps = ThemeProps & DefaultText['props']
export type ViewProps = ThemeProps & DefaultView['props']
export type TextInputProps = ThemeProps & DefaultTextInput['props']

export function Text(props: TextProps): JSX.Element {
  const { style, lightColor, darkColor, ...otherProps } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  return (
    <DefaultText
      style={[{ color }, { fontFamily: 'Muli' }, style]}
      {...otherProps}
    />
  )
}

export function TitleText(props: TextProps): JSX.Element {
  const { style, lightColor, darkColor, ...otherProps } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  return (
    <DefaultText style={[style, Styles.title, { color }]} {...otherProps} />
  )
}

export function View(props: ViewProps): JSX.Element {
  const { style, lightColor, darkColor, ...otherProps } = props
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  )

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}

export function TextInput(props: TextInputProps): JSX.Element {
  const { style, lightColor, darkColor, ...otherProps } = props
  const color = useThemeColor(
    { light: Colors.light.placeholder, dark: darkColor },
    'text'
  )

  return (
    <DefaultTextInput
      style={[{ color }, { fontFamily: 'Muli' }, style]}
      {...otherProps}
    />
  )
}
