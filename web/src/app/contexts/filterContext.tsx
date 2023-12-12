/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
'use client'
import { ReactNode, createContext, useState } from 'react'

interface ProviderProps {
  children: ReactNode
}

export const DigimonFilterContext = createContext({
  digimonName: '',
  setDigimonName: (value: string) => {},
  digimonLevel: '',
  setDigimonLevel: (value: string) => {},
  getData: false,
  setGetData: (value: boolean) => {},
})

export function DigimonFilterContextProvider({ children }: ProviderProps) {
  const [digimonName, setDigimonName] = useState('')
  const [getData, setGetData] = useState(false)
  const [digimonLevel, setDigimonLevel] = useState('')

  return (
    <DigimonFilterContext.Provider
      value={{
        digimonName,
        setDigimonName,
        getData,
        setGetData,
        digimonLevel,
        setDigimonLevel,
      }}
    >
      {children}
    </DigimonFilterContext.Provider>
  )
}
