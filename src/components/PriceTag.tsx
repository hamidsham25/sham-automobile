interface PriceTagProps {
  price?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function PriceTag({ 
  price, 
  size = 'md',
  className = '' 
}: PriceTagProps) {
  if (!price) {
    return (
      <span className={`text-gray-600 font-medium ${className}`}>
        Preis auf Anfrage
      </span>
    )
  }

  const formattedPrice = new Intl.NumberFormat('de-DE').format(price)
  
  const sizeClasses = {
    sm: 'text-lg font-semibold',
    md: 'text-xl font-bold',
    lg: 'text-2xl font-bold'
  }

  return (
    <span className={`text-blue-600 ${sizeClasses[size]} ${className}`}>
      {formattedPrice} €
    </span>
  )
}
