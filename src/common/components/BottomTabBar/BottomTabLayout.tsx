import React from 'react'
import { StyleSheet } from 'react-native'

import { View } from '../style/Themed'
import useDeviceType from '../utils/useDeviceType'
import BottomTabBar from './BottomTabBar'

interface BottomTabLayoutProps {
  children: JSX.Element | JSX.Element[]
}

/*
 * Wrapper component that attaches a bottom tab bar to a screen
 */
export default function BottomTabLayout({
  children,
}: BottomTabLayoutProps): JSX.Element {
  const { isMobile } = useDeviceType()

  return (
    <View style={styles.tabBarContainer}>
      {children}

      {isMobile ? <BottomTabBar /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
})
