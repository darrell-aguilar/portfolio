export interface ICardProps {
  company: string
  role: string
  fromDate: string
  toDate: string
  highlights: string
}

export interface ICardImageProps {
  image: string
  title: string
  source_code: string
  url?: string
  technologies: Array<string>
  info: string
}

export type IGenericCardProps = ICardImageProps | ICardProps

export type ICardTypes = "card" | "image"
