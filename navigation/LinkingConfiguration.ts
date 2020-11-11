import * as Linking from 'expo-linking'

export default {
  prefixes: [
    Linking.makeUrl('/'),
    'localhost:5000',
    'https://aalto-pakettikauppa.netlify.app',
  ],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
}
