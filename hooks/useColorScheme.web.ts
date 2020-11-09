import { useEffect, useState } from 'react'

// useColorScheme from react-native does not support web currently. You can replace
// this with react-native-appearance if you would like theme support on web.

// Custom hook
export default function useColorScheme(): string {
  const query = window.matchMedia('(prefers-color-scheme: dark)')
  const getPreference = (query: MediaQueryList | MediaQueryListEvent) =>
    query.matches ? 'dark' : 'light'
  const [mode, setMode] = useState(getPreference(query))
  useEffect(() => {
    query.addListener((e) => {
      setMode(getPreference(e))
    })
  }, [])
  return mode
}
