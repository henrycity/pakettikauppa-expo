import React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { TitleText } from '../../../common/Themed'

export default function SuccessView(): JSX.Element {
  const { t } = useTranslation()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TitleText>{t('shipmentAdded')}</TitleText>
    </View>
  )
}
