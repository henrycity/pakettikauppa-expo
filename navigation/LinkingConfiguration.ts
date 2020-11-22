import * as Linking from 'expo-linking'

export default {
  prefixes: [Linking.makeUrl('/'), 'https://aalto-pakettikauppa.netlify.app'],
  config: {
    screens: {
      Root: {
        screens: {
          Profile: {
            screens: {
              ProfileScreen: 'profile',
            },
          },
          Shipments: {
            screens: {
              ShipmentScreen: 'shipments',
            },
          },
          Settings: {
            screens: {
              SettingsScreen: 'settings',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
}
