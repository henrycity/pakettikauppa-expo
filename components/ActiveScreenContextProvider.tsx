import React, { createContext, useState } from 'react'

interface ScreenContextProps {
  activeScreen: string
  setActiveScreen: React.Dispatch<React.SetStateAction<string>>
}

export const ActiveScreenContext = createContext<ScreenContextProps>({
  activeScreen: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setActiveScreen: () => {},
})

interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function ActiveScreenContextProvider({
  children,
}: Props): JSX.Element {
  const [activeScreen, setActiveScreen] = useState('')
  return (
    <ActiveScreenContext.Provider value={{ activeScreen, setActiveScreen }}>
      {children}
    </ActiveScreenContext.Provider>
  )
}
