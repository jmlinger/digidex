import { IDigimonFilterContext } from '../interfaces/digimon'
import { api } from '../services/api'

export async function getDigimons(context: IDigimonFilterContext) {
  const { digimonLevel, digimonName, setDigimonName, setDigimonLevel } = context

  if (digimonName || digimonLevel) {
    try {
      const { data } = await api.get(
        `/digimon?name=${digimonName}&level=${digimonLevel}`,
      )

      setDigimonName('')
      setDigimonLevel('')
      return data
    } catch (error) {
      console.error(error)
    }
  }

  try {
    const { data } = await api.get(`/digimon?name=&level=`)

    return data
  } catch (error) {
    console.error(error)
  }
}
