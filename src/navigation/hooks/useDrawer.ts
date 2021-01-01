import { useState, useEffect } from 'react'

import useDeviceType from '../utils/useDeviceType'

type DrawerType = 'front' | 'permanent' | 'back' | 'slide' | undefined

// Breakpoints relative to device screen width
enum Breakpoint {
  large = 0.71,
}

export function useDrawerType(): DrawerType {
  const { isDesktop } = useDeviceType()

  const desktopDrawerShouldBePermanent = () =>
    screen.width > 650 && window.innerWidth > Breakpoint.large * screen.width

  const initTypeDesktop = () =>
    desktopDrawerShouldBePermanent() ? 'permanent' : 'front'

  const initType = isDesktop ? initTypeDesktop() : 'front'

  const [type, setType] = useState<DrawerType>(initType)

  const eventListener = () => {
    if (desktopDrawerShouldBePermanent()) setType('permanent')
    else setType('front')
  }

  useEffect(() => {
    if (isDesktop) {
      window.addEventListener('resize', eventListener)
      return () => window.removeEventListener('resize', eventListener)
    }
  }, [])

  return type
}
