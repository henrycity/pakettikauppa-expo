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
    backgroundColor: Colors.light.red,
  },
  largeButton: {
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: Colors.light.red,
  },
  buttonLabel: {
    color: Colors.light.white,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Rubik',
  },
  input: {
    borderBottomWidth: 1.0,
    width: 200,
    color: '#233385',
    //placeholderTextColor: '#8cb1b7',
  },
  error: {
    color: 'red',
  },
  success: {
    color: 'green',
  },
})
