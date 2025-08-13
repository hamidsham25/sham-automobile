import { client } from './sanity.client'
import { Car, CarPreview } from '../types/car'
import {
  ALL_CARS,
  FEATURED_CARS,
  CAR_BY_SLUG,
  CARS_BY_FUEL_TYPE,
  CARS_BY_TRANSMISSION,
  CARS_BY_PRICE_RANGE,
  CARS_BY_YEAR_RANGE,
  SEARCH_CARS,
  RECENT_CARS,
  CAR_COUNT,
  FEATURED_CAR_COUNT
} from './queries'

// Helper function to get all cars
export async function getAllCars(): Promise<Car[]> {
  return await client.fetch(ALL_CARS)
}

// Helper function to get featured cars
export async function getFeaturedCars(): Promise<CarPreview[]> {
  return await client.fetch(FEATURED_CARS)
}

// Helper function to get a single car by slug
export async function getCarBySlug(slug: string): Promise<Car | null> {
  return await client.fetch(CAR_BY_SLUG, { slug })
}

// Helper function to get cars by fuel type
export async function getCarsByFuelType(fuelType: string): Promise<Car[]> {
  return await client.fetch(CARS_BY_FUEL_TYPE, { fuelType })
}

// Helper function to get cars by transmission
export async function getCarsByTransmission(transmission: string): Promise<Car[]> {
  return await client.fetch(CARS_BY_TRANSMISSION, { transmission })
}

// Helper function to get cars by price range
export async function getCarsByPriceRange(minPrice: number, maxPrice: number): Promise<Car[]> {
  return await client.fetch(CARS_BY_PRICE_RANGE, { minPrice, maxPrice })
}

// Helper function to get cars by year range
export async function getCarsByYearRange(minYear: number, maxYear: number): Promise<Car[]> {
  return await client.fetch(CARS_BY_YEAR_RANGE, { minYear, maxYear })
}

// Helper function to search cars
export async function searchCars(searchTerm: string): Promise<Car[]> {
  return await client.fetch(SEARCH_CARS, { searchTerm })
}

// Helper function to get recent cars with limit
export async function getRecentCars(limit: number = 6): Promise<CarPreview[]> {
  return await client.fetch(RECENT_CARS, { limit })
}

// Helper function to get total car count
export async function getCarCount(): Promise<number> {
  return await client.fetch(CAR_COUNT)
}

// Helper function to get featured car count
export async function getFeaturedCarCount(): Promise<number> {
  return await client.fetch(FEATURED_CAR_COUNT)
}

// Helper function to get cars with pagination
export async function getCarsWithPagination(page: number = 1, limit: number = 12): Promise<{
  cars: Car[],
  total: number,
  hasMore: boolean
}> {
  const offset = (page - 1) * limit
  const cars = await client.fetch(
    `*[_type == "car"] | order(_createdAt desc)[${offset}...${offset + limit}] {
      _id, title, slug, price, mileage, year, fuelType, transmission, power,
      color, doors, location, isFeatured,
      "thumbnail": coalesce(thumbnail, images[0]), images, description, features
    }`
  )
  const total = await getCarCount()
  const hasMore = offset + limit < total
  
  return { cars, total, hasMore }
}
