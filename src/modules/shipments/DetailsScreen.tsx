import { useRoute, useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet } from 'react-native'

import Styles from '../../common/Styles'
import { View, Text } from '../../common/Themed'
import BottomTabWrapper from '../../common/components/BottomTabWrapper'
import Loading from '../../common/components/Loading'
import { ShipmentDetailsRouteProp } from '../../types'
import useBreakpoint from './hooks/useBreakpoint'
import useShipmentDetails from './hooks/useShipmentDetails'
import { Shipment } from './types'

export default function DetailsScreen(): JSX.Element {
  const navigation = useNavigation()
  const route = useRoute<ShipmentDetailsRouteProp>()

  const { id, shipment: initialShipment } = route.params

  if (!id) navigation.navigate('NotFound')

  // Use possible initial data from route params to render the shipment
  const { shipment, isLoading, error, mutate } = useShipmentDetails(
    id,
    initialShipment
  )

  React.useEffect(() => {
    // If there was initial data, revalidate from server
    if (initialShipment?.id) mutate()
  }, [initialShipment])

  if (error?.status === 400) navigation.navigate('NotFound')

  return (
    <BottomTabWrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <>{shipment && <ShipmentComponent shipment={shipment} />}</>
      )}
    </BottomTabWrapper>
  )
}

const ShipmentComponent = ({ shipment }: { shipment: Shipment }) => {
  const { t } = useTranslation('shipmentDetails')

  const screenIsSmall = useBreakpoint(650)

  return (
    <View style={styles.container}>
      <View style={styles.shipment}>
        <Text style={[Styles.title, styles.title]}>
          {t('transaction')}: {shipment.trackingCode}
        </Text>

        <View style={screenIsSmall ? styles.columnsSm : styles.columnsLg}>
          <Column1 shipment={shipment} />
          <Column2 shipment={shipment} />
          <Column3 shipment={shipment} />
        </View>
      </View>
    </View>
  )
}

const Field = ({ name, value }: { name: string; value?: string }) => (
  <Text style={styles.fieldText}>
    {name}: <Text style={[Styles.linkText, { marginLeft: 5 }]}>{value}</Text>
  </Text>
)

const Column1 = ({ shipment }: { shipment: Shipment }) => {
  const { t } = useTranslation('shipmentDetails')

  return (
    <View style={styles.column}>
      <Field name={t('carrier')} value={shipment.deliveryCompany} />
      <Field name={t('carrierService')} value={shipment.shippingMethod} />
      <Field name={t('stamp')} />
    </View>
  )
}

const Column2 = ({ shipment }: { shipment: Shipment }) => {
  const { t } = useTranslation('shipmentDetails')

  return (
    <View style={styles.column}>
      <Field name={t('receiver')} value={shipment.receiverName} />
      <Field name={t('phoneNumber')} value={shipment.receiverPhoneNumber} />
      <Field name={t('email')} value={shipment.receiverEmail} />
      <Field name={t('pickupPoint')} />
      <Field name={t('additionalServices')} />
    </View>
  )
}

const Column3 = ({ shipment }: { shipment: Shipment }) => {
  const { t, i18n } = useTranslation('shipmentDetails')

  return (
    <View style={styles.column}>
      <Field name={t('estimatedPrice')} value={shipment.price} />
      <Field name={t('actualPrice')} />
      <Field name={t('measuredWeight')} value={shipment.weight} />
      <Field name={t('measuredVolume')} />
      <Field
        name={t('createdAt')}
        value={new Date(shipment.createdOn).toLocaleDateString(i18n.language)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 30,
  },
  shipment: {
    flexBasis: 800,
    flexShrink: 1,
    flexGrow: 0,
  },
  title: {
    marginBottom: 8,
  },
  fieldText: {
    fontSize: 16,
  },
  columnsLg: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnsSm: {
    flex: 1,
  },
  column: {
    marginRight: 8,
  },
})
