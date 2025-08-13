'use client'

import { useState, useEffect } from 'react'
import { 
  getAllCars, 
  getFeaturedCars, 
  getCarBySlug, 
  getCarsByFuelType,
  getCarsByTransmission,
  getCarsByPriceRange,
  getCarsByYearRange,
  searchCars,
  getRecentCars,
  getCarCount,
  getFeaturedCarCount,
  getCarsWithPagination
} from '@/lib/sanity.queries'
import { Car, CarPreview } from '@/types/car'

export default function QueryExamples() {
  const [cars, setCars] = useState<Car[]>([])
  const [featuredCars, setFeaturedCars] = useState<CarPreview[]>([])
  const [carCount, setCarCount] = useState<number>(0)
  const [featuredCount, setFeaturedCount] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [fuelType, setFuelType] = useState('Benzin')
  const [transmission, setTransmission] = useState('Manuell')
  const [minPrice, setMinPrice] = useState(10000)
  const [maxPrice, setMaxPrice] = useState(50000)
  const [minYear, setMinYear] = useState(2015)
  const [maxYear, setMaxYear] = useState(2024)

  // Load initial data
  useEffect(() => {
    loadInitialData()
  }, [])

  const loadInitialData = async () => {
    setLoading(true)
    try {
      const [allCars, featured, total, featuredTotal] = await Promise.all([
        getAllCars(),
        getFeaturedCars(),
        getCarCount(),
        getFeaturedCarCount()
      ])
      
      setCars(allCars)
      setFeaturedCars(featured)
      setCarCount(total)
      setFeaturedCount(featuredTotal)
    } catch (error) {
      console.error('Error loading initial data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async () => {
    if (!searchTerm.trim()) return
    
    setLoading(true)
    try {
      const results = await searchCars(searchTerm)
      setCars(results)
    } catch (error) {
      console.error('Error searching cars:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFilterByFuelType = async () => {
    setLoading(true)
    try {
      const results = await getCarsByFuelType(fuelType)
      setCars(results)
    } catch (error) {
      console.error('Error filtering by fuel type:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFilterByTransmission = async () => {
    setLoading(true)
    try {
      const results = await getCarsByTransmission(transmission)
      setCars(results)
    } catch (error) {
      console.error('Error filtering by transmission:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFilterByPriceRange = async () => {
    setLoading(true)
    try {
      const results = await getCarsByPriceRange(minPrice, maxPrice)
      setCars(results)
    } catch (error) {
      console.error('Error filtering by price range:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFilterByYearRange = async () => {
    setLoading(true)
    try {
      const results = await getCarsByYearRange(minYear, maxYear)
      setCars(results)
    } catch (error) {
      console.error('Error filtering by year range:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLoadRecent = async () => {
    setLoading(true)
    try {
      const results = await getRecentCars(6)
      setCars(results as any)
    } catch (error) {
      console.error('Error loading recent cars:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    loadInitialData()
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">GROQ Query Examples</h1>
        <p className="text-gray-600">Demonstrating all the available Sanity queries and utility functions</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Cars</h3>
          <p className="text-3xl font-bold text-blue-600">{carCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Featured Cars</h3>
          <p className="text-3xl font-bold text-green-600">{featuredCount}</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Cars</h3>
        <div className="flex gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title, description, or location..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            Search
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Fuel Type Filter */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Fuel Type</h3>
          <select
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="Benzin">Benzin</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Elektro">Elektro</option>
            <option value="LPG">LPG</option>
            <option value="CNG">CNG</option>
            <option value="Andere">Andere</option>
          </select>
          <button
            onClick={handleFilterByFuelType}
            disabled={loading}
            className="w-full mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
          >
            Filter
          </button>
        </div>

        {/* Transmission Filter */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Transmission</h3>
          <select
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="Manuell">Manuell</option>
            <option value="Automatik">Automatik</option>
          </select>
          <button
            onClick={handleFilterByTransmission}
            disabled={loading}
            className="w-full mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
          >
            Filter
          </button>
        </div>

        {/* Price Range Filter */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range (€)</h3>
          <div className="space-y-2">
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              placeholder="Min Price"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              placeholder="Max Price"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={handleFilterByPriceRange}
            disabled={loading}
            className="w-full mt-3 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 disabled:opacity-50"
          >
            Filter
          </button>
        </div>

        {/* Year Range Filter */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Year Range</h3>
          <div className="space-y-2">
            <input
              type="number"
              value={minYear}
              onChange={(e) => setMinYear(Number(e.target.value))}
              placeholder="Min Year"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="number"
              value={maxYear}
              onChange={(e) => setMaxYear(Number(e.target.value))}
              placeholder="Max Year"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={handleFilterByYearRange}
            disabled={loading}
            className="w-full mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
          >
            Filter
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={handleLoadRecent}
          disabled={loading}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          Load Recent (6)
        </button>
        <button
          onClick={handleReset}
          disabled={loading}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50"
        >
          Reset Filters
        </button>
      </div>

      {/* Results */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Results ({cars.length} cars)
        </h3>
        
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cars.slice(0, 6).map((car) => (
              <div key={car._id} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">{car.title}</h4>
                <p className="text-gray-600">{car.year} • {car.fuelType}</p>
                <p className="text-gray-600">{car.transmission} • {car.mileage?.toLocaleString('de-DE')} km</p>
                <p className="text-lg font-bold text-blue-600">{car.price?.toLocaleString('de-DE')} €</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
