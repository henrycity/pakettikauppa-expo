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
  scrollView: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    padding: 20,
    minHeight: 650,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
