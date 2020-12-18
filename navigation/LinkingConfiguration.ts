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
          Reports: {
            screens: {
              ReportsScreen: 'reports',
            },
          },
          Settings: {
            screens: {
              SettingsScreen: 'settings',
            },
          },
          Shipments: {
            screens: {
              ShipmentsScreen: 'shipments',
            },
          },
          Statistics: {
            screens: {
              StatisticsScreen: 'statistics',
            },
          },
        },
      },
      Login: '*',
      NotFound: '*',
    },
  },
}
