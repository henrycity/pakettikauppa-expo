import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { Button, Menu, Divider } from 'react-native-paper'

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
          <Button onPress={openMenu} color={themed.buttonColor}>
            Show menu
          </Button>
        }
      >
        <Menu.Item
          onPress={() => {
            navigation.navigate('AddShipmentsScreen')
          }}
          title={t('newShipment')}
          titleStyle={[Styles.body, { color: themed.text }]}
        />
        <Menu.Item
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onPress={() => {}}
          title={t('pickup')}
          titleStyle={[Styles.body, { color: themed.text }]}
        />
        <Menu.Item
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onPress={() => {}}
          title={t('lineHaul')}
          titleStyle={[Styles.body, { color: themed.text }]}
        />
        <Divider />
        <Menu.Item
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onPress={() => {}}
          title={t('multipleLabels')}
          titleStyle={[Styles.body]}
          disabled
        />
        <Menu.Item
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onPress={() => {}}
          title={t('delete')}
          titleStyle={Styles.body}
          disabled
        />
      </Menu>
    </View>
  )
}

export default ShipmentOptions
