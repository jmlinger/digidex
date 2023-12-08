import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'

import { digimonRoutes } from './routes/digimonRoutes'
import { connectToDatabase } from './models/db'

const app = fastify()

const serverOptions = {
  host: '0.0.0.0',
  port: process.env.PORT ? Number(process.env.PORT) : 3333,
}

app.register(cors, {
  origin: true,
})

connectToDatabase()

app.register(digimonRoutes)

app
  .listen(serverOptions)
  .then(() => {
    console.log(
      `HTTP Server Running on ${serverOptions.host}:${serverOptions.port}`,
    )
  })
  .catch((err) => {
    if (err) {
      console.error('Error when starting the server:', err)
      process.exit(1)
    }
  })
