// GROQ queries for fetching car data from Sanity CMS

export const ALL_CARS = `*[_type == "car"] | order(_createdAt desc) {
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
  location,
  isFeatured,
  "thumbnail": coalesce(thumbnail, images[0]),
  images,
  description,
  features
}`

export const FEATURED_CARS = `*[_type == "car" && isFeatured == true] | order(_createdAt desc) {
  _id,
  title,
  slug,
  price,
  year,
  "thumbnail": coalesce(thumbnail, images[0]),
  location
}`

export const CAR_BY_SLUG = `*[_type == "car" && slug.current == $slug][0] {
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
  location,
  images,
  description,
  features
}`

export const CARS_BY_FUEL_TYPE = `*[_type == "car" && fuelType == $fuelType] | order(_createdAt desc) {
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
  location,
  "thumbnail": coalesce(thumbnail, images[0])
}`

export const CARS_BY_TRANSMISSION = `*[_type == "car" && transmission == $transmission] | order(_createdAt desc) {
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
  location,
  "thumbnail": coalesce(thumbnail, images[0])
}`

export const CARS_BY_PRICE_RANGE = `*[_type == "car" && price >= $minPrice && price <= $maxPrice] | order(price asc) {
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
  location,
  "thumbnail": coalesce(thumbnail, images[0])
}`

export const CARS_BY_YEAR_RANGE = `*[_type == "car" && year >= $minYear && year <= $maxYear] | order(year desc) {
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
  location,
  "thumbnail": coalesce(thumbnail, images[0])
}`

export const SEARCH_CARS = `*[_type == "car" && (
  title match $searchTerm + "*" ||
  description match "*" + $searchTerm + "*" ||
  location match $searchTerm + "*"
)] | order(_createdAt desc) {
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
  location,
  "thumbnail": coalesce(thumbnail, images[0])
}`

export const RECENT_CARS = `*[_type == "car"] | order(_createdAt desc)[0...$limit] {
  _id,
  title,
  slug,
  price,
  year,
  "thumbnail": coalesce(thumbnail, images[0]),
  location
}`

export const CAR_COUNT = `count(*[_type == "car"])`

export const FEATURED_CAR_COUNT = `count(*[_type == "car" && isFeatured == true])`
