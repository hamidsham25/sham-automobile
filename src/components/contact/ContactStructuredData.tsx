export default function ContactStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": "Sham Automobile GmbH",
    "description": "Ihr vertrauensvoller Partner für Gebrauchtwagen in Langenhagen bei Hannover. Wir bieten eine große Auswahl an qualitativ hochwertigen Gebrauchtwagen mit persönlicher Beratung.",
    "url": "https://sham-automobile.com",
    "telephone": "+49 172 5413020",
    "email": "noorsham@web.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Walsroder Straße 237",
      "addressLocality": "Langenhagen",
      "addressRegion": "NI",
      "postalCode": "30855",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.4467,
      "longitude": 9.7386
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
    "areaServed": ["Langenhagen", "Hannover", "Region Hannover"],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 52.4467,
        "longitude": 9.7386
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
      "https://maps.google.com/?q=Walsroder+Straße+237,+30855+Langenhagen,+Deutschland"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
