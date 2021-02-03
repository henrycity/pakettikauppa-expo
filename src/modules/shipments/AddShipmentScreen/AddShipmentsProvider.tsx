import { useNavigation } from '@react-navigation/native'
import React, { useReducer } from 'react'
import { TouchableOpacity } from 'react-native'

import Styles from '../../../common/Styles'
import { Text } from '../../../common/Themed'
import BottomTabWrapper from '../../../common/components/BottomTabWrapper'
import AddShipmentsOne from './AddShipmentsOne'
import AddShipmentsThree from './AddShipmentsThree'
import AddShipmentsTwo from './AddShipmentsTwo'

export default function AddShipmentsScreen(): JSX.Element {
  const navigation = useNavigation()
  type Next = {
    type: 'next'
  }

  type Previous = {
    type: 'previous'
  }

  type Reset = {
    type: 'reset'
  }

  type Back = {
    type: 'back'
  }

  type ActionType = Next | Previous | Reset | Back

  interface State {
    count: number
  }

  function reducer(state: { count: number }, action: ActionType): State {
    switch (action.type) {
      case 'next':
        return { count: state.count + 1 }
      case 'previous':
        return { count: state.count - 1 }
      case 'reset':
        return { count: 0 }
      case 'back':
        return { count: 0 }
      default:
        return state
    }
  }

  const initialCount = 0
  const [state, dispatch] = useReducer(reducer, { count: initialCount })

  const NextButton = () => (
    <TouchableOpacity
      accessibilityLabel="next"
      style={Styles.normalButton}
      onPress={() => {
        dispatch({ type: 'next' })
      }}
    >
      <Text>NEXT</Text>
    </TouchableOpacity>
  )

  const PreviousButton = () => (
    <TouchableOpacity
      accessibilityLabel="previous"
      style={Styles.normalButton}
      onPress={() => {
        dispatch({ type: 'previous' })
      }}
    >
      <Text>PREVIOUS</Text>
    </TouchableOpacity>
  )

  const SubmitButton = () => (
    <TouchableOpacity
      accessibilityLabel="submit"
      style={Styles.normalButton}
      onPress={() => {
        dispatch({ type: 'reset' })
        navigation.navigate('ShipmentsScreen')
      }}
    >
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  )

  const BackButton = () => (
    <TouchableOpacity
      accessibilityLabel="back"
      style={Styles.normalButton}
      onPress={() => {
        dispatch({ type: 'back' })
        navigation.navigate('ShipmentsScreen')
      }}
    >
      <Text>BACK</Text>
    </TouchableOpacity>
  )

  if (state.count === 0) {
    return (
      <BottomTabWrapper>
        <AddShipmentsOne NextButton={NextButton} BackButton={BackButton} />
      </BottomTabWrapper>
    )
  } else if (state.count === 1) {
    return (
      <BottomTabWrapper>
        <AddShipmentsTwo
          NextButton={NextButton}
          PreviousButton={PreviousButton}
        />
      </BottomTabWrapper>
    )
  } else {
    return (
      <BottomTabWrapper>
        <AddShipmentsThree
          SubmitButton={SubmitButton}
          PreviousButton={PreviousButton}
        />
      </BottomTabWrapper>
    )
  }
}
