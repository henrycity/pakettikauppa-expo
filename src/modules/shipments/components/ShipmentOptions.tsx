import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { Menu, Divider } from 'react-native-paper'

import Styles from '../../../common/Styles'
import { useThemedColors } from '../../../common/Themed'

const ShipmentOptions = (): JSX.Element => {
  const [visible, setVisible] = React.useState(false)
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  const themed = useThemedColors()
  const navigation = useNavigation()
  const { t } = useTranslation()

  return (
    <View style={{ marginLeft: 20 }}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Feather
            name="more-vertical"
            size={26}
            color={themed.buttonColor}
            onPress={openMenu}
            testID="Menu"
          />
        }
      >
        <Menu.Item
          onPress={() => {
            navigation.navigate('AddShipmentsScreen')
          }}
          title={t('newShipment')}
          testID="AddShipment"
          titleStyle={[Styles.body, { color: themed.text }]}
        />
        <Menu.Item
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onPress={() => {}}
          title={t('pickup')}
          testID="pickup"
          titleStyle={[Styles.body, { color: themed.text }]}
        />
        <Menu.Item
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onPress={() => {}}
          title={t('lineHaul')}
          testID="lineHaul"
          titleStyle={[Styles.body, { color: themed.text }]}
        />
        <Divider />
        <Menu.Item
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onPress={() => {}}
          title={t('multipleLabels')}
          testID="multipleLabels"
          titleStyle={[Styles.body]}
          disabled
        />
        <Menu.Item
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onPress={() => {}}
          title={t('delete')}
          testID="delete"
          titleStyle={Styles.body}
          disabled
        />
      </Menu>
    </View>
  )
}

export default ShipmentOptions
