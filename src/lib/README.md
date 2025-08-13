# Sanity GROQ Queries & Utilities

This directory contains all the necessary files for working with Sanity CMS in your automobile business application.

## Files Overview

### 1. `queries.ts` - GROQ Query Definitions
Contains all the raw GROQ queries for fetching car data from Sanity CMS.

### 2. `sanity.queries.ts` - Utility Functions
Provides TypeScript functions that wrap the GROQ queries for easy use in components.

### 3. `sanity.client.ts` - Sanity Client Configuration
Configured Sanity client for connecting to your CMS.

### 4. `sanity.image.ts` - Image URL Generation
Utilities for generating optimized image URLs from Sanity.

## Available Queries

### Basic Queries
- `ALL_CARS` - Get all cars ordered by creation date
- `FEATURED_CARS` - Get only featured cars
- `CAR_BY_SLUG` - Get a specific car by its slug
- `RECENT_CARS` - Get recent cars with a limit

### Filter Queries
- `CARS_BY_FUEL_TYPE` - Filter cars by fuel type (Benzin, Diesel, Hybrid, etc.)
- `CARS_BY_TRANSMISSION` - Filter cars by transmission (Manual/Automatic)
- `CARS_BY_PRICE_RANGE` - Filter cars within a price range
- `CARS_BY_YEAR_RANGE` - Filter cars within a year range

### Search & Analytics
- `SEARCH_CARS` - Search cars by title, description, or location
- `CAR_COUNT` - Get total number of cars
- `FEATURED_CAR_COUNT` - Get number of featured cars

## Usage Examples

### Basic Usage in Components

```tsx
import { getAllCars, getFeaturedCars, getCarBySlug } from '@/lib/sanity.queries'

// In your component
const [cars, setCars] = useState<Car[]>([])

useEffect(() => {
  const loadCars = async () => {
    try {
      const data = await getAllCars()
      setCars(data)
    } catch (error) {
      console.error('Error loading cars:', error)
    }
  }
  
  loadCars()
}, [])
```

### Filtering Cars

```tsx
import { getCarsByFuelType, getCarsByPriceRange } from '@/lib/sanity.queries'

// Filter by fuel type
const dieselCars = await getCarsByFuelType('Diesel')

// Filter by price range
const affordableCars = await getCarsByPriceRange(10000, 30000)
```

### Search Functionality

```tsx
import { searchCars } from '@/lib/sanity.queries'

const handleSearch = async (searchTerm: string) => {
  try {
    const results = await searchCars(searchTerm)
    setSearchResults(results)
  } catch (error) {
    console.error('Search error:', error)
  }
}
```

### Pagination

```tsx
import { getCarsWithPagination } from '@/lib/sanity.queries'

const loadPage = async (page: number) => {
  try {
    const { cars, total, hasMore } = await getCarsWithPagination(page, 12)
    setCars(cars)
    setTotal(total)
    setHasMore(hasMore)
  } catch (error) {
    console.error('Error loading page:', error)
  }
}
```

## Type Safety

All functions are fully typed with TypeScript interfaces:

- `Car` - Full car object with all properties
- `CarPreview` - Lightweight car object for listings

## Error Handling

All utility functions include proper error handling. Wrap calls in try-catch blocks:

```tsx
try {
  const cars = await getAllCars()
  // Handle success
} catch (error) {
  console.error('Failed to fetch cars:', error)
  // Handle error (show user message, retry, etc.)
}
```

## Performance Tips

1. **Use appropriate queries** - Don't fetch all data if you only need a subset
2. **Implement caching** - Consider caching frequently accessed data
3. **Lazy loading** - Use pagination for large datasets
4. **Image optimization** - Use the image utilities for optimized images

## Testing

Visit `/test-queries` in your application to see all queries in action with a comprehensive demo interface.

## Migration from Old Queries

If you were using the old queries from `sanity.ts`, you can now use the new utility functions:

**Old way:**
```tsx
import { client, getAllCarsQuery } from '@/lib/sanity'
const cars = await client.fetch(getAllCarsQuery)
```

**New way:**
```tsx
import { getAllCars } from '@/lib/sanity.queries'
const cars = await getAllCars()
```

The new approach provides better type safety, error handling, and maintainability.
