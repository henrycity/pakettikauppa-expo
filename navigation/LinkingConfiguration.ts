import * as Linking from 'expo-linking'

export default {
  prefixes: [Linking.makeUrl('/'), 'https://aalto-pakettikauppa.netlify.app'],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeTab: 'home',
            },
          },
          Profile: {
            screens: {
              ProfileTab: 'profile',
            },
          },
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
