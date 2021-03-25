import React, { useState, useRef, useEffect } from 'react'
import { Controller, Control } from 'react-hook-form'
import {
  StyleSheet,
  TextInput,
  Platform,
  InputAccessoryView,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native'

import { View } from '../../../common/Themed'
import { FormDataOne, FormDataTwo, FormDataThree } from '../types'

interface InputFieldProps {
  control: Control<FormDataOne> | Control<FormDataTwo> | Control<FormDataThree>
  defaultValue: string
  placeHolder: string
  name: string
}

const InputField = ({
  control,
  defaultValue,
  placeHolder,
  name,
}: InputFieldProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false)
  const [inputFieldIsEmpty, setinputFieldIsEmpty] = useState(
    defaultValue === ''
  )

  const {
    translateY,
    scale,
    animateFocus,
    animateBlur,
  } = usePlaceholderAnimation(inputFieldIsEmpty)

  useEffect(() => {
    if (isFocused) {
      animateFocus()
    } else {
      if (inputFieldIsEmpty) {
        animateBlur()
      }
      if (!inputFieldIsEmpty) {
        animateFocus()
      }
    }
  }, [isFocused, inputFieldIsEmpty])

  // Since our animated placeholder is a Text component, we provide a ref
  // to the input field to focus it when the placeholder is clicked
  const ref = React.useRef<TextInput>() as React.RefObject<TextInput>

  return (
    <Controller
      control={control}
      render={({ onChange, onBlur, value }) => (
        <View>
          <TouchableWithoutFeedback onPress={() => ref.current?.focus()}>
            <Animated.Text
              style={[
                styles.placeholder,
                {
                  transform: [{ translateY }, { scale }],
                },
              ]}
            >
              {placeHolder}
            </Animated.Text>
          </TouchableWithoutFeedback>

          <TextInput
            ref={ref}
            style={styles.input}
            onBlur={() => {
              onBlur()
              setIsFocused(false)
            }}
            onFocus={() => setIsFocused(true)}
            onChangeText={(value) => {
              onChange(value)
              if (value) {
                setinputFieldIsEmpty(false)
              } else !inputFieldIsEmpty && setinputFieldIsEmpty(true)
            }}
            value={value}
            returnKeyType="done"
            inputAccessoryViewID={name}
            placeholderTextColor="grey"
          />

          {Platform.OS === 'ios' && (
            <InputAccessoryView nativeID={name}>
              <AccessoryView
                placeHolder={placeHolder}
                value={value}
                onChange={(value) => {
                  onChange(value)
                  if (value) {
                    setinputFieldIsEmpty(false)
                  } else !inputFieldIsEmpty && setinputFieldIsEmpty(true)
                }}
              />
            </InputAccessoryView>
          )}
        </View>
      )}
      name={name}
      defaultValue={defaultValue}
    />
  )
}

/**
 * Accessory view for mobile
 *
 * Provies a text input on top of the keyboard in case keyboard is covering the actual input field
 */
const AccessoryView = ({
  value,
  onChange,
  placeHolder,
}: {
  value: string
  onChange: (text: string) => void
  placeHolder: string
}) => (
  <View style={styles.accessoryView}>
    <TextInput
      placeholder={placeHolder}
      style={{ height: 30, textAlign: 'center' }}
      onChangeText={onChange}
      value={value}
      returnKeyType="done"
      placeholderTextColor="grey"
    />
  </View>
)

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'rgb(0,0,0)',
    borderWidth: 1,
    paddingHorizontal: 10,
    padding: 10,
    height: 50,
    paddingLeft: 17,
    borderRadius: 20,
    fontSize: 16,
    paddingTop: 20,
    color: 'black',
    zIndex: -1,
  },
  accessoryView: {
    flex: 1,
    alignItems: 'stretch',
    height: 30,
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  placeholder: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
    position: 'relative',
    color: 'rgba(0,0,0,0.6)',
    top: 33,
    fontSize: 14,
  },
})

export default InputField

/**
 * Utility hook for animating InputField placeholder text
 */
function usePlaceholderAnimation(inputFieldIsEmpty: boolean) {
  // Animation start and end values
  const [START_Y, END_Y] = [0, -12]
  const [START_SCALE, END_SCALE] = [1, 0.8]
  // Controls for animating placeholder placement
  const placeholderAnimTranslateY = useRef(
    new Animated.Value(inputFieldIsEmpty ? START_Y : END_Y)
  ).current
  const placeholderAnimScale = useRef(
    new Animated.Value(inputFieldIsEmpty ? START_SCALE : END_SCALE)
  ).current

  const DURATION = 230

  const focusAnimTranslateY = Animated.timing(placeholderAnimTranslateY, {
    toValue: END_Y,
    duration: DURATION,
    useNativeDriver: true,
  })
  const blurAnimTranslateY = Animated.timing(placeholderAnimTranslateY, {
    toValue: START_Y,
    duration: DURATION,
    useNativeDriver: true,
  })

  const focusAnimScale = Animated.timing(placeholderAnimScale, {
    toValue: END_SCALE,
    duration: DURATION,
    useNativeDriver: true,
  })
  const blurAnimScale = Animated.timing(placeholderAnimScale, {
    toValue: START_SCALE,
    duration: DURATION,
    useNativeDriver: true,
  })

  const animateFocus = () => {
    focusAnimTranslateY.start()
    focusAnimScale.start()
  }

  const animateBlur = () => {
    blurAnimTranslateY.start()
    blurAnimScale.start()
  }

  return {
    translateY: placeholderAnimTranslateY,
    scale: placeholderAnimScale,
    animateFocus,
    animateBlur,
  }
}
