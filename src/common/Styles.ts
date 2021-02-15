import { StyleSheet, TextStyle } from 'react-native'

// Common stylesheet that can be used everywhere
export const typography = {
  title: {
    fontFamily: 'Rubik-Bold',
  } as TextStyle,
  body: {
    fontFamily: 'Muli',
  } as TextStyle,
  bottomTabLabel: {
    fontFamily: 'Rubik',
  } as TextStyle,
  drawerLabel: {
    fontFamily: 'Rubik-Medium',
  } as TextStyle,
  subtitle: {
    fontFamily: 'Muli-SemiBold',
  } as TextStyle,
  link: {
    fontFamily: 'Muli-Bold',
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
    minWidth: 85,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
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
    fontSize: 14,
    fontFamily: typography.title.fontFamily,
    textTransform: 'uppercase',
    padding: 10,
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
    fontFamily: typography.link.fontFamily,
  },
  bottomTabLabel: {
    fontFamily: typography.bottomTabLabel.fontFamily,
    textTransform: 'lowercase',
    fontSize: 13,
  },
  drawerLabel: {
    fontFamily: typography.drawerLabel.fontFamily,
    fontSize: 18,
  },
})
