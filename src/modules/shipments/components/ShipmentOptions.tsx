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
            name="chevron-down"
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
            closeMenu()
          }}
          title={t('newShipment')}
          testID="AddShipment"
          titleStyle={Styles.body}
        />
        <Menu.Item
          title={t('pickup')}
          testID="pickup"
          titleStyle={Styles.body}
        />
        <Menu.Item
          title={t('lineHaul')}
          testID="lineHaul"
          titleStyle={Styles.body}
        />
        <Divider />
        <Menu.Item
          title={t('multipleLabels')}
          testID="multipleLabels"
          titleStyle={Styles.body}
          disabled
        />
        <Menu.Item
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
