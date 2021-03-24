import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  // Determines max width of screen
  inner: {
    flexBasis: 600,
    flexGrow: 0,
    flexShrink: 1,
    justifyContent: 'space-evenly',
  },
  scrollViewOne: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    minHeight: 500,
    maxHeight: 600,
  },
  scrollViewTwo: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    minHeight: 500,
    maxHeight: 530,
  },
  scrollViewThree: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    minHeight: 450,
    maxHeight: 470,
  },
  title: {
    paddingLeft: '0.75em',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
