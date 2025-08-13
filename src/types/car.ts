export interface Car {
  _id: string
  title: string
  slug: {
    current: string
  }
  price: number
  mileage: number
  year: number
  fuelType: 'Benzin' | 'Diesel' | 'Hybrid' | 'Elektro' | 'LPG' | 'CNG' | 'Andere'
  transmission: 'Manuell' | 'Automatik'
  power?: number
  color?: string
  doors?: number
  images: Array<{
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
    hotspot?: {
      x: number
      y: number
      height: number
      width: number
    }
  }>
  thumbnail?: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
    hotspot?: {
      x: number
      y: number
      height: number
      width: number
    }
  }
  description?: string
  features?: string[]
  location: string
  isFeatured: boolean
}

export interface CarPreview {
  _id: string
  title: string
  slug: {
    current: string
  }
  price: number
  year: number
  thumbnail?: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  location: string
}
