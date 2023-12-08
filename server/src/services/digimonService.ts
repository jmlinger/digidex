import Digimon, { IDigimonDocument } from '../models/digimonModel'
import { z } from 'zod'

interface IDigimonQueryParams {
  name?: string
  level?: string
}

export async function getDigimons(
  queryParams: IDigimonQueryParams,
): Promise<IDigimonDocument[]> {
  const digimonSchema = z.object({
    name: z.string(),
    level: z.string(),
  })

  const { name, level } = digimonSchema.parse(queryParams)

  let query: Record<string, string | RegExp> = {}

  if (!name && !level) {
    query = {}
  } else if (!name) {
    query = { level }
  } else if (!level) {
    query = { name: new RegExp(name, 'i') }
  } else {
    query = { name: new RegExp(name, 'i'), level }
  }

  const digimons = await Digimon.find(query)
  return digimons
}
