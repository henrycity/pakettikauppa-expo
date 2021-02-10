import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import React, { useReducer, useState } from 'react'
import { TouchableOpacity } from 'react-native'

import Styles from '../../../common/Styles'
import { Text } from '../../../common/Themed'
import BottomTabWrapper from '../../../common/components/BottomTabWrapper'
import useDeviceType from '../../../common/hooks/useDeviceType'
import server from '../../../config'
import AddShipmentsOne from './AddShipmentsOne'
import AddShipmentsThree from './AddShipmentsThree'
import AddShipmentsTwo from './AddShipmentsTwo'

const serverURL = server()

type FormDataOne = {
  businessID: string
  senderName: string
  senderAddress: string
  senderCountry: string
  senderPostCode: string
  senderCity: string
  senderPhoneNumber: string
  senderEmail: string
}

type FormDataTwo = {
  receiverAddress: string
  receiverCity: string
  receiverCountry: string
  receiverEmail: string
  receiverName: string
  receiverPhoneNumber: string
  receiverPostCode: string
}

type FormDataThree = {
  description: string
  invoiceNumber: string
  reference: string
  deliveryCompany: string
  sendingMethod: string
  weight: string
}

export default function AddShipmentsScreen(): JSX.Element {
  const navigation = useNavigation()
  const { isMobile } = useDeviceType()
  /*
  const [pageOne, setPageOne] = useState<FormDataOne>({
    businessID: '',
    senderAddress: '',
    senderCity: '',
    senderCountry: '',
    senderEmail: '',
    senderName: '',
    senderPhoneNumber: '',
    senderPostCode: '',
  })
  const [pageTwo, setPageTwo] = useState<FormDataTwo>({
    receiverAddress: '',
    receiverCity: '',
    receiverCountry: '',
    receiverEmail: '',
    receiverName: '',
    receiverPhoneNumber: '',
    receiverPostCode: '',
  })
  const [pageThree, setPageThree] = useState<FormDataThree>({
    description: '',
    invoiceNumber: '',
    reference: '',
    sendingMethod: '',
    weight: '',
    deliveryCompany: '',
  })
*/
  // testing purposes
  const [pageOne, setPageOne] = useState<FormDataOne>({
    businessID: '123456',
    senderAddress: 'Postintie 69',
    senderCity: 'EspooCity',
    senderCountry: 'Finland',
    senderEmail: 'posti.posti@gmail.com',
    senderName: 'MR. henry',
    senderPhoneNumber: '1234567',
    senderPostCode: '02700',
  })
  const [pageTwo, setPageTwo] = useState<FormDataTwo>({
    receiverAddress: 'jokuTie',
    receiverCity: 'Espoo',
    receiverCountry: 'Finland',
    receiverEmail: 'pyry.aaa@gmail.com',
    receiverName: 'Postin CEO',
    receiverPhoneNumber: '1234567',
    receiverPostCode: '02700',
  })
  const [pageThree, setPageThree] = useState<FormDataThree>({
    description: 'Pesukone',
    invoiceNumber: 'qwe123456',
    reference: '123456',
    sendingMethod: 'Postin Pikapaketti',
    weight: '1000',
    deliveryCompany: 'Posti',
  })

  type Next = {
    type: 'next'
  }

  type Previous = {
    type: 'previous'
  }

  type Submit = {
    type: 'submit'
  }

  type Back = {
    type: 'back'
  }

  type ActionType = Next | Previous | Submit | Back

  interface State {
    count: number
  }

  type ValidatorError = {
    param: string
    value: string
    msg: string
  }

  function reducer(state: { count: number }, action: ActionType): State {
    switch (action.type) {
      case 'next':
        return { count: state.count + 1 }
      case 'previous':
        return { count: state.count - 1 }
      case 'submit':
        getFinalStates()
        return { count: 0 }
      case 'back':
        return { count: 0 }
      default:
        return state
    }
  }

  const postShipment = async () => {
    const newShipment = {
      businessID: pageOne.businessID,
      senderName: pageOne.senderName,
      senderAddress: pageOne.senderAddress,
      senderCountry: pageOne.senderCountry,
      senderPostCode: pageOne.senderPostCode,
      senderCity: pageOne.senderCity,
      senderPhoneNumber: pageOne.senderPhoneNumber,
      senderEmail: pageOne.senderEmail,
      receiverName: pageTwo.receiverName,
      receiverEmail: pageTwo.receiverEmail,
      recieverPostCode: pageTwo.receiverPostCode,
      recieverCity: pageTwo.receiverCity,
      recieverCountry: pageTwo.receiverCountry,
      description: pageThree.description,
      invoiceNumber: pageThree.invoiceNumber,
      reference: pageThree.reference,
      deliveryCompany: pageThree.deliveryCompany,
      sendingMethod: pageThree.sendingMethod,
      weight: pageThree.weight,
    }
    if (isMobile) {
      const token = await AsyncStorage.getItem('token')
      return fetch(`${serverURL}/shipments`, {
        method: 'POST',
        credentials: 'include' as const,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(newShipment),
      }).then((res) => res.json())
    } else {
      return fetch(`${serverURL}/shipments`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newShipment),
      }).then((res) => res.json())
    }
  }

  // Submit data
  const getFinalStates = () => {
    postShipment().then((data) => {
      if (data.errors) {
        if (__DEV__) {
          data.errors.forEach((error: ValidatorError) =>
            // TODO: Display errors in UI instead of just the console
            // eslint-disable-next-line no-console
            console.log(
              `Error for field ${error.param}: ${error.msg} "${error.value}"`
            )
          )
        }
      }
    })
  }

  const initialCount = 0
  const [state, dispatch] = useReducer(reducer, { count: initialCount })

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
        <AddShipmentsOne
          BackButton={BackButton}
          dispatch={dispatch}
          pageOne={pageOne}
          setPageOne={setPageOne}
        />
      </BottomTabWrapper>
    )
  } else if (state.count === 1) {
    return (
      <BottomTabWrapper>
        <AddShipmentsTwo
          PreviousButton={PreviousButton}
          dispatch={dispatch}
          pageTwo={pageTwo}
          setPageTwo={setPageTwo}
        />
      </BottomTabWrapper>
    )
  } else {
    return (
      <BottomTabWrapper>
        <AddShipmentsThree
          PreviousButton={PreviousButton}
          dispatch={dispatch}
          pageThree={pageThree}
          setPageThree={setPageThree}
        />
      </BottomTabWrapper>
    )
  }
}
