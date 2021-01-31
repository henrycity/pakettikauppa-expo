import React, { useState, useEffect } from 'react'
import { StyleSheet, Dimensions, Platform } from 'react-native'

import { navStyles } from '../../navigation/headerOptions'
import { View } from '../Themed'
import useDeviceType from '../hooks/useDeviceType'
import BottomTabBar, { tabBarStyles } from './BottomTabBar'

interface BottomTabWrapperProps {
  children: JSX.Element | JSX.Element[]
}

/**
 * Calculates screen height so that header and bottom tab bar will always stay visible
 *
 * @returns screen height. Height updates on window resize (on web)
 */
function useScreenHeight() {
  const { isMobile } = useDeviceType()
  const getHeight = () =>
    Dimensions.get('window').height -
    StyleSheet.flatten(navStyles.header).height -
    (isMobile ? StyleSheet.flatten(tabBarStyles.tabBar).maxHeight : 0)
  const initialHeight = getHeight()
  const [height, setHeight] = useState(initialHeight)

  useEffect(() => {
    if (Platform.OS === 'web') {
      const onResize = () => {
        setHeight(getHeight())
      }

      window.addEventListener('resize', onResize)

      return () => window.removeEventListener('resize', onResize)
    }
  }, [])

  return height
}

/*
 * Wrapper component that attaches a bottom tab bar to a screen
 */
export default function BottomTabWrapper({
  children,
}: BottomTabWrapperProps): JSX.Element {
  const { isMobile } = useDeviceType()
  const containerHeight = useScreenHeight()

  return (
    <View style={[styles.tabBarContainer, { height: containerHeight }]}>
      {children}

      {isMobile ? <BottomTabBar /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
