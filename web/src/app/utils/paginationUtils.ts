import { IDigimon } from '../interfaces/digimon'

// Função utilitária para obter os elementos da página atual
export function getPageElements(
  data: IDigimon[],
  page: number,
  elementsPerPage: number,
) {
  const finalElement = page * elementsPerPage
  const initialElement = finalElement - elementsPerPage
  return data.slice(initialElement, finalElement)
}
