import 'dotenv/config'
import mongoose from 'mongoose'

export async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string)
    console.log('Database connection established successfully')
  } catch (error) {
    console.error('Error connecting to the database:', error)
    throw error
  }
}
