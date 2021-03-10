import * as React from 'react'
import { View } from 'react-native'
import { Button, Menu, Divider } from 'react-native-paper'

const ShipmentOptions = () => {
  const [visible, setVisible] = React.useState(false)

  const openMenu = () => setVisible(true)

  const closeMenu = () => setVisible(false)

  return (
    <View style={{ marginLeft: 20 }}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>Show menu</Button>}
      >
        <Menu.Item onPress={() => {}} title="Item 1" />
        <Menu.Item onPress={() => {}} title="Item 2" />
        <Divider />
        <Menu.Item onPress={() => {}} title="Item 3" />
      </Menu>
    </View>
  )
}

export default ShipmentOptions
