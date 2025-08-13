export default function SellStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sham-Automobile",
    "description": "Gebrauchtwagen Händler in Hannover - Auto verkaufen, kaufen und bewerten. Faire Preise und professioneller Service.",
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
      "latitude": "52.3759",
      "longitude": "9.7320"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": {
      "@type": "City",
      "name": "Hannover"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "52.3759",
        "longitude": "9.7320"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fahrzeugankauf und -verkauf",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Auto verkaufen",
            "description": "Professioneller Fahrzeugankauf mit fairer Bewertung und schneller Abwicklung"
          },
          "price": "0",
          "priceCurrency": "EUR",
          "description": "Kostenlose Fahrzeugbewertung und fairer Ankaufspreis"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fahrzeugbewertung",
            "description": "Kostenlose und unverbindliche Bewertung Ihres Fahrzeugs"
          },
          "price": "0",
          "priceCurrency": "EUR",
          "description": "Kostenlose Bewertung innerhalb von 24 Stunden"
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/shamautomobile",
      "https://www.instagram.com/shamautomobile"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
