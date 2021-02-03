import { StyleSheet, TextStyle } from 'react-native'

// Common stylesheet that can be used everywhere
export const typography = {
  title: {
    fontFamily: 'Rubik',
    fontWeight: 'bold',
  } as TextStyle,
  body: {
    fontFamily: 'Muli',
  } as TextStyle,
}
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: typography.title.fontWeight,
    fontFamily: typography.title.fontFamily,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  gap: {
    height: 10,
  },
  normalButton: {
    width: 85,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 500,
  },
  largeButton: {
    width: 200,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 500,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: typography.title.fontFamily,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomWidth: 1.0,
    width: 200,
  },
  error: {
    color: 'red',
  },
  success: {
    color: 'green',
  },
  menuButton: {
    paddingLeft: 20,
  },
  icon: {
    padding: 7,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    fontFamily: typography.body.fontFamily,
    fontWeight: 'bold',
  },
})
