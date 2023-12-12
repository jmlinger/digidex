export interface IDigimonDocument extends Document {
  name: string
  img: string
  level: string
}

export interface IDigimonQueryParams {
  name: string
  level: string
}

export interface IDigimon {
  name: string
  img: string
  level: string
}
