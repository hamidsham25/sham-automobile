export default function ContactStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": "Sham Automobile GmbH",
    "description": "Ihr vertrauensvoller Partner für Gebrauchtwagen in Hannover. Wir bieten eine große Auswahl an qualitativ hochwertigen Gebrauchtwagen mit persönlicher Beratung.",
    "url": "https://sham-automobile.com",
    "telephone": "+49511123456",
    "email": "info@sham-automobile.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Musterstraße 123",
      "addressLocality": "Hannover",
      "postalCode": "30159",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.3759,
      "longitude": 9.7322
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-14:00"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "€€",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "EUR",
    "areaServed": {
      "@type": "City",
      "name": "Hannover"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 52.3759,
        "longitude": 9.7322
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Gebrauchtwagen Angebote",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Car",
            "name": "Gebrauchtwagen"
          }
        }
      ]
    },
    "sameAs": [
      "https://maps.google.com/?q=Hannover,Deutschland"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
