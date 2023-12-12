import request from 'supertest'
import { FastifyInstance } from 'fastify'
import { createServer } from '../src/server'
import { beforeAll, describe, it, expect, afterAll } from '@jest/globals'
import * as digimonService from '../src/services/digimonService'
import { disconnectFromDatabase } from '../src/models/db'
import { IDigimonReturn } from '../src/Interfaces/digimon'

describe('GET /digimon', () => {
  let app: FastifyInstance

  beforeAll(async () => {
    app = await createServer()
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Should return a list of Digimons', async () => {
    const response = await request(app.server)
      .get('/digimon')
      .query({ name: '', level: '' })
    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    expect(response.body.length).toEqual(209)
  })

  it('Should return Digimons filtered by name and level', async () => {
    const query = { name: 'Agumon', level: 'Rookie' }

    const response = await request(app.server).get('/digimon').query(query)
    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    expect(response.body.length).toEqual(2)

    const allMatchCondition = response.body.every((digimon: IDigimonReturn) => {
      return (
        digimon.name.toLowerCase().includes(query.name.toLowerCase()) &&
        digimon.level === query.level
      )
    })

    expect(allMatchCondition).toBe(true)
  })

  it('Should return Digimons filtered by name', async () => {
    const query = { name: 'Garurumon', level: '' }

    const response = await request(app.server).get('/digimon').query(query)
    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    expect(response.body.length).toEqual(3)

    const allMatchCondition = response.body.every((digimon: IDigimonReturn) => {
      return digimon.name.toLowerCase().includes(query.name.toLowerCase())
    })

    expect(allMatchCondition).toBe(true)
  })

  it('Should return Digimons filtered by level', async () => {
    const query = { name: '', level: 'Armor' }

    const response = await request(app.server).get('/digimon').query(query)
    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    expect(response.body.length).toEqual(12)

    const allMatchCondition = response.body.every((digimon: IDigimonReturn) => {
      return digimon.level === query.level
    })

    expect(allMatchCondition).toBe(true)
  })

  it('Should return an empty response if there are no matching Digimons', async () => {
    const response = await request(app.server)
      .get('/digimon')
      .query({ name: 'DigimonInexistente', level: 'Mega' })
    expect(response.status).toBe(200)
    expect(response.body).toEqual(null)
  })

  it('Should handle internal server errors', async () => {
    // Mock para forçar um erro interno
    jest.spyOn(digimonService, 'getDigimons').mockImplementation(() => {
      throw new Error('Simulated server error')
    })

    const response = await request(app.server).get('/digimon')
    expect(response.status).toBe(500)
    expect(response.body).toEqual({ message: 'Internal Server Error' })
  })

  afterAll(async () => {
    await disconnectFromDatabase()
    app.close()
  })
})
