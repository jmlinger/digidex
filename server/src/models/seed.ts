import mongoose from 'mongoose'
import axios from 'axios'
import Digimon from './digimonModel'
import { connectToDatabase } from './db'

connectToDatabase()

interface Digimon {
  name: string
  img: string
  level: string
}

async function fetchDigimonsFromExternalAPI(): Promise<Digimon[]> {
  const externalApiUrl = 'https://digimon-api.vercel.app/api/digimon'
  const response = await axios.get(externalApiUrl)
  return response.data
}

async function seed(): Promise<void> {
  try {
    await Digimon.deleteMany({}) // Limpe todos os documentos existentes

    const externalDigimons = await fetchDigimonsFromExternalAPI()

    const formattedDigimons: Digimon[] = externalDigimons.map(
      (externalDigimon: Digimon) => ({
        name: externalDigimon.name,
        img: externalDigimon.img,
        level: externalDigimon.level,
      }),
    )

    const insertedDigimons = await Digimon.insertMany(formattedDigimons)
    console.log(`${insertedDigimons.length} Digimons inserted successfully.`)
  } catch (error) {
    console.error('Error populating the database:', error)
  } finally {
    mongoose.disconnect() // Desconecte após a conclusão
  }
}

seed()
