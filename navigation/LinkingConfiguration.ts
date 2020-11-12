import * as Linking from 'expo-linking'

export default {
  prefixes: [Linking.makeUrl('/'), 'https://aalto-pakettikauppa.netlify.app'],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
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
        },
      },
      NotFound: '*',
    },
  },
}
