import { StyleSheet } from 'react-native'

import Colors from './Colors'

// Common stylesheet that can be used everywhere

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
  },
  largeButton: {
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Rubik',
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
  drawer: {
    width: 250,
    backgroundColor: '#f7f1ee',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
})
