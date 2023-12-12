import { IDigimon } from '../interfaces/digimon'

export function extractLevels(data: IDigimon[]): string[] {
  const levelsSet = new Set<string>()

  data.forEach((object) => {
    if (object.level !== undefined) {
      levelsSet.add(object.level)
    }
  })

  const niveisUnicos: string[] = Array.from(levelsSet).map(String).sort()

  return niveisUnicos
}
