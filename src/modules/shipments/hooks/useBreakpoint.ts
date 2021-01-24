import { useEffect, useState } from 'react'
import { Dimensions, Platform } from 'react-native'

/**
 * @returns a boolean which tells if screen is smaller than given breakpoint
 *
 * Value updates on resize (web only)
 */
export default function useBreakpoint(breakpoint: number): boolean {
  const getWidth = () => Dimensions.get('window').width
  const [isSmaller, setIsSmaller] = useState(getWidth() < breakpoint)

  useEffect(() => {
    if (Platform.OS === 'web') {
      const listener = () => {
        setIsSmaller(getWidth() < breakpoint)
      }

      window.addEventListener('resize', listener)

      return () => window.removeEventListener('resize', listener)
    }
  }, [])

  return isSmaller
}
