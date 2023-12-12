// server.ts

import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import { digimonRoutes } from './routes/digimonRoutes'
import { connectToDatabase } from './models/db'

export async function createServer() {
  const app = fastify()

  app.register(cors, {
    origin: true,
  })

  connectToDatabase()

  app.register(digimonRoutes)

  await app.ready()

  return app
}

const serverOptions = {
  host: '0.0.0.0',
  port: process.env.PORT ? Number(process.env.PORT) : 3333,
}

if (require.main === module) {
  const startServer = async () => {
    try {
      const fastifyInstance = await createServer()
      await fastifyInstance.listen(serverOptions)
      console.log(
        `HTTP Server Running on ${serverOptions.host}:${serverOptions.port}`,
      )
    } catch (err) {
      console.error('Error when starting the server:', err)
      process.exit(1)
    }
  }

  startServer()
}
