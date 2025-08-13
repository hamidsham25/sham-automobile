import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity.client'

const builder = imageUrlBuilder(client)

// Define proper types for Sanity image objects
interface SanityImageAsset {
  _ref: string
  _type: 'reference'
}

interface SanityImage {
  _type: 'image'
  asset: SanityImageAsset
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export const urlFor = (source: SanityImage) => builder.image(source)

export function getImageUrl(image: SanityImage | null | undefined, width: number = 800) {
  if (!image?.asset?._ref) return null
  
  return urlFor(image)
    .width(width)
    .fit('max')
    .auto('format')
    .url()
}

export function getThumbnailUrl(image: SanityImage | null | undefined, width: number = 400) {
  if (!image?.asset?._ref) return null
  
  return urlFor(image)
    .width(width)
    .height(width * 0.75)
    .fit('crop')
    .auto('format')
    .url()
}
