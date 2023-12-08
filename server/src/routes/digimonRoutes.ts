import { FastifyInstance } from 'fastify'
import { getDigimonHandler } from '../controllers/digimonController'

export async function digimonRoutes(app: FastifyInstance) {
  app.get('/digimon', getDigimonHandler)
}
