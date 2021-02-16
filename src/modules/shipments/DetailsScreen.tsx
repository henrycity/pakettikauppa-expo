import { useRoute, useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet } from 'react-native'
import useSWR from 'swr'

import Styles from '../../common/Styles'
import { View, Text } from '../../common/Themed'
import BottomTabWrapper from '../../common/components/BottomTabWrapper'
import Loading from '../../common/components/Loading'
import { useSelectedLanguage } from '../../localization'
import { Shipment, ShipmentDetailsRouteProp } from '../../types'
import useBreakpoint from './hooks/useBreakpoint'

export default function DetailsScreen(): JSX.Element {
  const navigation = useNavigation()
  const route = useRoute<ShipmentDetailsRouteProp>()

  const { id, shipment: initialShipment } = route.params

  !id && navigation.navigate('NotFound')

  // Use possible initial data from route params to render the shipment
  const { data, error, mutate } = useSWR<Shipment>(
    `/shipment/?id=${id}`,
    // Instead of Shipment type, initial shipment can be for string eg. '[object Object]'
    initialShipment?.id ? { initialData: initialShipment } : {}
  )

  React.useEffect(() => {
    // If there was initial data, revalidate from server
    initialShipment?.id && mutate()
  }, [initialShipment])

  const loading = !data && !error

  error?.status === 400 && navigation.navigate('NotFound')

  return (
    <BottomTabWrapper>
      {loading ? (
        <Loading />
      ) : (
        <>{data && <ShipmentComponent shipment={data} />}</>
      )}
    </BottomTabWrapper>
  )
}

const ShipmentComponent = ({ shipment }: { shipment: Shipment }) => {
  const { t } = useTranslation('shipments')

  const screenIsSmall = useBreakpoint(650)

  return (
    <View style={styles.container}>
      <View style={styles.shipment}>
        <Text style={[Styles.title, styles.title]}>
          {t('transaction')}: JJFIABEL0006978{shipment.id}
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
    {name}: <Text style={styles.fieldBold}>{value}</Text>
  </Text>
)

const Column1 = ({ shipment }: { shipment: Shipment }) => {
  const { t } = useTranslation('shipments')

  return (
    <View style={styles.column}>
      <Field name={t('carrier')} value={shipment.deliveryCompany} />
      <Field name={t('carrierService')} value={shipment.shippingMethod} />
      <Field name={t('stamp')} />
    </View>
  )
}

const Column2 = ({ shipment }: { shipment: Shipment }) => {
  const { t } = useTranslation('shipments')

  return (
    <View style={styles.column}>
      <Field name={t('receiver')} value={shipment.receiverName} />
      <Field name={t('phoneNumber')} />
      <Field name={t('email')} value={shipment.receiverEmail} />
      <Field name={t('pickupPoint')} />
      <Field name={t('additionalServices')} />
    </View>
  )
}

const Column3 = ({ shipment }: { shipment: Shipment }) => {
  const { t, i18n } = useTranslation('shipments')

  return (
    <View style={styles.column}>
      <Field name={t('estimatedPrice')} />
      <Field name={t('actualPrice')} />
      <Field name={t('measuredWeight')} />
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
  fieldBold: {
    marginLeft: 5,
    fontFamily: 'Muli-Bold',
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
