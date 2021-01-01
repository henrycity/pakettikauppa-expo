import React, {
  createContext,
  useState,
  useContext,
  SetStateAction,
} from 'react'

interface ScreenContextProps {
  activeScreen: string
  setActiveScreen: React.Dispatch<React.SetStateAction<string>>
}

export default function useActiveScreen(): ScreenContextProps {
  return useContext(ActiveScreenContext)
}

const ActiveScreenContext = createContext<ScreenContextProps>({
  activeScreen: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setActiveScreen: (_screen: SetStateAction<string>) => {},
})

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function ActiveScreenContextProvider({ children }: Props): JSX.Element {
  const [activeScreen, setActiveScreen] = useState('')
  return (
    <ActiveScreenContext.Provider value={{ activeScreen, setActiveScreen }}>
      {children}
    </ActiveScreenContext.Provider>
  )
}
