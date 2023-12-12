import { Dispatch, SetStateAction } from 'react'

export interface IDigimon {
  _id: string
  level: string
  name: string
  img: string
}

export interface PaginationProps {
  data: IDigimon[] // 'key' representa o nome do array, 'any' deve ser substituído pelo tipo real dos dados no seu aplicativo
  setDataPerPage: Dispatch<SetStateAction<IDigimon[]>>
}

export interface IAppProps {
  data?: IDigimon[]
}
