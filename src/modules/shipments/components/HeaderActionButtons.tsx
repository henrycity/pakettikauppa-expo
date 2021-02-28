import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet } from 'react-native'

import { View } from '../../../common/Themed'
import Button from '../../../common/components/Button'

const HeaderActionButtons = (): JSX.Element => {
  const navigation = useNavigation()
  const { t } = useTranslation()

  return (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      <Button
        text={t('newShipment')}
        accessibilityLabel="New Shipment"
        testID="AddShipment"
        onPress={() => {
          navigation.navigate('AddShipmentsScreen')
        }}
        style={styles.button}
        textStyle={styles.buttonText}
      />
      <Button
        accessibilityLabel="Download Multiple Labels"
        testID="Multiple Labels"
        text={t('multipleLabels')}
        style={styles.button}
        textStyle={styles.buttonText}
      />
      <Button
        accessibilityLabel="Pickup Orders"
        testID="pickup"
        text={t('pickup')}
        style={styles.button}
        textStyle={styles.buttonText}
      />
      <Button
        accessibilityLabel="Create Line Haul Label"
        testID="Line Haul"
        text={t('lineHaul')}
        style={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  )
}

export default HeaderActionButtons

const styles = StyleSheet.create({
  button: {
    margin: 4,
  },
  buttonText: {
    fontSize: 12,
  },
})
