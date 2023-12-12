import { FastifyRequest, FastifyReply } from 'fastify'
import { getDigimons } from '../services/digimonService'
import { IDigimonQueryParams } from '../Interfaces/digimon'

export async function getDigimonHandler(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const digimons = await getDigimons(request.query as IDigimonQueryParams)

    if (digimons.length === 0) {
      return reply.status(200).send(null)
    }

    return reply.status(200).send(digimons)
  } catch (error) {
    console.error('Error fetching Digimons:', error)
    return reply.status(500).send({ message: 'Internal Server Error' })
  }
}
