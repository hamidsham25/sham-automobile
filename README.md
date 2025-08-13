# Sham Automobile

A modern, responsive website for Sham Automobile, a German car dealership. Built with Next.js 15, TypeScript, Tailwind CSS, and integrated with Sanity CMS for content management.

## Features

- **Modern Design**: Clean, professional design optimized for car dealerships
- **Responsive Layout**: Mobile-first design that works on all devices
- **Content Management**: Integrated Sanity CMS for managing car inventory
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **SEO Optimized**: Built-in SEO features and structured data

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **CMS**: Sanity Studio
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sham-automobile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your Sanity configuration:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=ugc97ccx
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_TOKEN=your-token
   ```

### Development

#### Start Next.js Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:3000`

#### Start Sanity Studio
```bash
npm run studio
```
The CMS will be available at `http://localhost:3333/studio`

#### Start Both Servers Simultaneously
```bash
npm run dev:all
```

### Building for Production

```bash
npm run build
npm start
```

## Sanity CMS Integration

**Note:** This project is configured to connect to the client's Sanity project with ID `ugc97ccx` and dataset `production`.

### Project Structure
```
sanity/
├── sanity.config.ts      # Main Sanity configuration
├── schemas/
│   ├── car.ts           # Car document schema
│   └── index.ts         # Schema exports
├── package.json          # Sanity dependencies
└── README.md            # CMS documentation
```

### Car Schema

The CMS includes a comprehensive car schema with the following fields:

- **Basic Info**: Title, slug, description
- **Technical Specs**: Year, mileage, fuel type, transmission, power
- **Physical Details**: Color, doors, features
- **Media**: Multiple images with hotspot support, thumbnail
- **Business Logic**: Price, location, featured status

### Adding Cars

1. Start the Sanity Studio: `npm run studio`
2. Navigate to `http://localhost:3333/studio`
3. Click "Create new document" → "Auto"
4. Fill in the required fields
5. Save and publish

### Querying Cars

The project includes pre-built queries in `src/lib/sanity.ts`:

- `getAllCarsQuery`: Get all cars
- `getFeaturedCarsQuery`: Get featured cars for homepage
- `getCarBySlugQuery`: Get a specific car by slug

## Project Structure

```
src/
├── app/                 # Next.js app router
├── components/          # React components
│   ├── sections/       # Page sections
│   ├── layout/         # Layout components
│   └── ...
├── lib/                # Utility functions
│   ├── sanity.ts       # Sanity client
│   └── sanity-image.ts # Image utilities
├── types/              # TypeScript type definitions
└── ...
```

## Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run studio` - Start Sanity Studio
- `npm run dev:all` - Start both servers simultaneously
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=ugc97ccx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_TOKEN=your-token
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository.
