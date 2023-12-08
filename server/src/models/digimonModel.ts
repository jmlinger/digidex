import { Document, Schema, model } from 'mongoose'

export interface IDigimonDocument extends Document {
  name: string
  img: string
  level: string
}

const DigimonSchema = new Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    level: { type: String, required: true },
  },
  { versionKey: false },
)

export default model<IDigimonDocument>('Digimon', DigimonSchema)
