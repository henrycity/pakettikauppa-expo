import * as Linking from 'expo-linking'

export default {
  prefixes: [Linking.makeUrl('/')],
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
              ShipmentsScreen: 'shipments',
            },
          },
          Settings: {
            screens: {
              SettingsScreen: 'settings',
            },
          },
        },
      },
      Login: '*',
      NotFound: '*',
    },
  },
}
