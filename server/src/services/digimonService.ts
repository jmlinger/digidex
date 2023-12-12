import { z } from 'zod'

import Digimon from '../models/digimonModel'
import { IDigimonDocument, IDigimonQueryParams } from '../Interfaces/digimon'

export async function getDigimons(
  queryParams: IDigimonQueryParams,
): Promise<IDigimonDocument[]> {
  const { name, level } = z
    .object({
      name: z.string(),
      level: z.string(),
    })
    .parse(queryParams)

  const query: Record<string, string | RegExp> = {}

  if (name) {
    query.name = new RegExp(name, 'i')
  }

  if (level) {
    query.level = level
  }

  const digimons = await Digimon.find(query)

  return digimons
}
