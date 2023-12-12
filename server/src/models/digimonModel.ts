import { Schema, model } from 'mongoose'
import { IDigimonDocument } from '../Interfaces/digimon'

const DigimonSchema = new Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    level: { type: String, required: true },
  },
  { versionKey: false },
)

export default model<IDigimonDocument>('Digimon', DigimonSchema)
