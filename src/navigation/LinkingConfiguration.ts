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
          Shipments: {
            screens: {
              ShipmentsScreen: 'shipments',
              DetailsScreen: 'shipment',
              AddShipmentsScreen: 'shipments/add-shipment',
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
