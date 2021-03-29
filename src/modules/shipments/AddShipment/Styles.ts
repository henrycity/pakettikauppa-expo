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
    paddingHorizontal: 20,
  },
  senderInfoStyle: {
    minHeight: 580,
    maxHeight: 600,
  },
  receiverInfoStyle: {
    minHeight: 510,
    maxHeight: 530,
  },
  otherInfoStyle: {
    minHeight: 450,
    maxHeight: 460,
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
