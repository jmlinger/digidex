/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode, createContext, useState } from 'react'
import { IDigimonFilterContext } from '../interfaces/digimon'

interface ProviderProps {
  children: ReactNode
}

export const DigimonFilterContext = createContext<IDigimonFilterContext>({
  digimonName: '',
  setDigimonName: () => {},
  digimonLevel: '',
  setDigimonLevel: () => {},
  getData: false,
  setGetData: () => {},
})

export function DigimonFilterContextProvider({ children }: ProviderProps) {
  const [digimonName, setDigimonName] = useState<string>('')
  const [getData, setGetData] = useState<boolean>(false)
  const [digimonLevel, setDigimonLevel] = useState<string>('')

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
