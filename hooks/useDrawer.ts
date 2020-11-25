import { DeviceType } from 'expo-device'
import { useState, useEffect, useContext } from 'react'

import DeviceTypeContext from '../components/DeviceTypeContext'

type DrawerType = 'front' | 'permanent' | 'back' | 'slide' | undefined

// Breakpoints relative to device screen width
enum Breakpoint {
  large = 0.71,
}

export function useDrawerType(): DrawerType {
  const deviceType = useContext(DeviceTypeContext)

  const desktopDrawerShouldBePermanent = () =>
    screen.width > 650 && window.innerWidth > Breakpoint.large * screen.width

  const initTypeDesktop = () =>
    desktopDrawerShouldBePermanent() ? 'permanent' : 'front'

  const initType =
    deviceType === DeviceType.DESKTOP ? initTypeDesktop() : 'front'

  const [type, setType] = useState<DrawerType>(initType)

  const eventListener = () => {
    if (desktopDrawerShouldBePermanent()) setType('permanent')
    else setType('front')
  }

  useEffect(() => {
    if (deviceType === DeviceType.DESKTOP) {
      window.addEventListener('resize', eventListener)
      return () => window.removeEventListener('resize', eventListener)
    }
  }, [])

  return type
}
