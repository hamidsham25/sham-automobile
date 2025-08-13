import { client } from './sanity.client'

export { client }

// Query to get all cars
export const getAllCarsQuery = `*[_type == "car"] {
  _id,
  title,
  slug,
  price,
  mileage,
  year,
  fuelType,
  transmission,
  power,
  color,
  doors,
  images,
  thumbnail,
  description,
  features,
  location,
  isFeatured
}`

// Query to get featured cars
export const getFeaturedCarsQuery = `*[_type == "car" && isFeatured == true] {
  _id,
  title,
  slug,
  price,
  year,
  thumbnail,
  location
}`

// Query to get a single car by slug
export const getCarBySlugQuery = `*[_type == "car" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  price,
  mileage,
  year,
  fuelType,
  transmission,
  power,
  color,
  doors,
  images,
  thumbnail,
  description,
  features,
  location,
  isFeatured
}`
