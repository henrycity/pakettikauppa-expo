import React from 'react'
import { useTranslation } from 'react-i18next'

import Styles from '../../../common/Styles'
import { View, Text } from '../../../common/Themed'

export default function AddShipmentsHeader({
  subTitle,
}: {
  subTitle?: string
}): JSX.Element {
  const { t } = useTranslation()
  return (
    <View>
      <Text style={Styles.title}>{t('createShipment')}</Text>
      {subTitle && <Text>{subTitle}</Text>}
    </View>
  )
}
