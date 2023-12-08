import { FastifyRequest, FastifyReply } from 'fastify'
import { getDigimons } from '../services/digimonService'
import { AnyObject } from 'mongoose'

export async function getDigimonHandler(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const digimons = await getDigimons(request.query as AnyObject)

    if (digimons.length === 0) {
      return reply.status(404).send({ message: 'Digimon not found!' })
    }

    return reply.status(200).send(digimons)
  } catch (error) {
    console.error('Error fetching Digimons:', error)
    return reply.status(500).send({ message: 'Internal Server Error' })
  }
}
