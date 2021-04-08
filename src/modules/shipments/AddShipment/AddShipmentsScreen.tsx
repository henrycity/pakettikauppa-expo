import { useNavigation } from '@react-navigation/native'
import React, { useReducer, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ActivityIndicator } from 'react-native'
import { mutate } from 'swr'

import { View } from '../../../common/Themed'
import BottomTabWrapper from '../../../common/components/BottomTabWrapper'
import useDeviceType from '../../../common/hooks/useDeviceType'
import { ShipmentsNavigationProp } from '../../../types'
import AddShipmentsHeader from '../components/AddShipmentsHeader'
import ErrorDialog from '../components/ErrorDialog'
import PageIndicator from '../components/PageIndicator'
import SuccessView from '../components/SuccessView'
import {
  FormDataOne,
  FormDataTwo,
  FormDataThree,
  PostShipment,
  ActionType,
  State,
  ValidatorError,
} from '../types'
import AddShipmentsOne from './AddShipmentsOne'
import AddShipmentsThree from './AddShipmentsThree'
import AddShipmentsTwo from './AddShipmentsTwo'
import { styles } from './Styles'
import postShipment from './postShipment'

const pageOneInit = {
  businessID: '',
  senderAddress: '',
  senderCity: '',
  senderCountry: 'FI',
  senderEmail: '',
  senderName: '',
  senderPhoneNumber: '',
  senderPostCode: '',
}

const pageTwoInit = {
  receiverAddress: '',
  receiverCity: '',
  receiverCountry: 'FI',
  receiverEmail: '',
  receiverName: '',
  receiverPhoneNumber: '',
  receiverPostCode: '',
}

const pageThreeInit = {
  description: '',
  invoiceNumber: '',
  reference: '',
  shippingMethod: '',
  weight: '',
  deliveryCompany: '',
}

export default function AddShipmentsScreen(): JSX.Element {
  const navigation = useNavigation<ShipmentsNavigationProp>()
  const { isMobile } = useDeviceType()

  const [pageOne, setPageOne] = useState<FormDataOne>(pageOneInit)
  const [pageTwo, setPageTwo] = useState<FormDataTwo>(pageTwoInit)
  const [pageThree, setPageThree] = useState<FormDataThree>(pageThreeInit)

  const [loading, setLoading] = useState(false)

  const submitData = () => {
    const newShipment: PostShipment = {
      ...pageOne,
      ...pageTwo,
      ...pageThree,
    }
    setLoading(true)
    postShipment(newShipment, isMobile).then((data) => {
      setLoading(false)
      if (data.errors) {
        let errorMsg = 'Invalid fields!'
        data.errors.forEach((error: ValidatorError) => {
          errorMsg = `${errorMsg}\nField ${error.param}: ${error.msg}`
        })
        setErrorMsg(errorMsg)
      } else {
        setErrorMsg('')
        setSuccess(true)
        setPageTwo(pageTwoInit)
        setPageThree(pageThreeInit)
        dispatch({ type: 'back' })
        mutate('/shipments')
        setTimeout(() => {
          navigation.replace('DetailsScreen', {
            id: data.shipment?.id,
            shipment: data.shipment,
          })
          setSuccess(false)
        }, 800)
      }
    })
  }

  function reducer(state: { count: number }, action: ActionType): State {
    switch (action.type) {
      case 'next':
        return { count: state.count + 1 }
      case 'previous':
        return { count: state.count - 1 }
      case 'submit':
        submitData()
        return { count: 2 }
      case 'back':
        return { count: 0 }
      default:
        return state
    }
  }

  const initialCount = 0
  const [state, dispatch] = useReducer(reducer, { count: initialCount })
  const [errorMsg, setErrorMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const { t } = useTranslation()

  const getSubtitle = (page: number) => {
    switch (page) {
      case 0:
        return t('sender')
      case 1:
        return t('receiver')
      case 2:
        return t('other')
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <AddShipmentsHeader subTitle={getSubtitle(state.count)} />
      ),
    })
  }, [state.count])

  const [showError, setShowError] = useState(false)

  // When error message changes, show error
  useEffect(() => {
    if (errorMsg) {
      setShowError(true)
    }
  }, [errorMsg])

  // When error is hidden, reset error message
  useEffect(() => {
    if (!showError) {
      setErrorMsg('')
    }
  }, [showError])

  if (success) {
    return (
      <BottomTabWrapper>
        <SuccessView />
      </BottomTabWrapper>
    )
  }

  return (
    <BottomTabWrapper>
      <View style={styles.outer}>
        <View style={styles.inner}>
          <ErrorDialog
            error={errorMsg}
            showError={showError}
            setShowError={setShowError}
          />
          <PageIndicator page={state.count} />

          {loading && (
            <View style={{ margin: 10 }}>
              <ActivityIndicator />
            </View>
          )}

          {state.count === 0 && (
            <AddShipmentsOne
              dispatch={dispatch}
              pageOne={pageOne}
              setPageOne={setPageOne}
            />
          )}

          {state.count === 1 && (
            <AddShipmentsTwo
              dispatch={dispatch}
              pageTwo={pageTwo}
              setPageTwo={setPageTwo}
            />
          )}

          {state.count === 2 && (
            <AddShipmentsThree
              dispatch={dispatch}
              pageThree={pageThree}
              setPageThree={setPageThree}
            />
          )}
        </View>
      </View>
    </BottomTabWrapper>
  )
}
