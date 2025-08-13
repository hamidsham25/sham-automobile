# Sham Automobile Sanity CMS

This is the Sanity CMS configuration for the Sham Automobile website.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3333/studio`

## Project Structure

- `sanity.config.ts` - Main Sanity configuration
- `schemas/car.ts` - Car document schema with German field names
- `schemas/index.ts` - Schema exports

## Car Schema Fields

- **title** - Car title (required)
- **slug** - URL slug (auto-generated from title)
- **price** - Price in EUR (required, minimum 0)
- **mileage** - Kilometer reading (required, minimum 0)
- **year** - Manufacturing year (1980-current year)
- **fuelType** - Fuel type (Benzin, Diesel, Hybrid, Elektro, LPG, CNG, Andere)
- **transmission** - Transmission type (Manuell, Automatik)
- **power** - Power in PS (optional)
- **color** - Car color (optional)
- **doors** - Number of doors (optional)
- **images** - Array of car images (minimum 1 required)
- **thumbnail** - Thumbnail image (optional, falls back to first image)
- **description** - Car description (optional)
- **features** - Array of car features (optional)
- **location** - Car location (defaults to Hannover)
- **isFeatured** - Whether to feature on homepage (defaults to false)

## Development

The CMS is configured for local development with:
- Structure tool for document management
- Vision tool for query testing
- Base path set to `/studio`

## Integration with Next.js

The main Next.js project includes:
- Sanity client configuration in `src/lib/sanity.ts`
- TypeScript types in `src/types/car.ts`
- Image URL utilities in `src/lib/sanity-image.ts`
- Pre-built queries for common operations
