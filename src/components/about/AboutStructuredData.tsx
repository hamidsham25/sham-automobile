export default function AboutStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sham-Automobile",
    "alternateName": "Sham Automobile",
    "description": "Ihr vertrauensvoller Partner für Qualitäts-Gebrauchtwagen in Langenhagen. Über 15 Jahre Erfahrung im Automobilhandel.",
    "url": "https://sham-automobile.com",
    "logo": "https://sham-automobile.com/logo.png",
    "image": "https://sham-automobile.com/hero-backgroundpicture-insignia.jpg",
    "foundingDate": "2009",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Langenhagen",
      "addressCountry": "DE",
      "addressRegion": "Niedersachsen"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["German", "English"],
      "areaServed": "DE"
    },
    "sameAs": [
      "https://www.facebook.com/shamautomobile",
      "https://www.instagram.com/shamautomobile"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Gebrauchtwagen Angebote",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fahrzeugverkauf",
            "description": "Verkauf von hochwertigen Gebrauchtwagen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ankauf von Gebrauchtwagen",
            "description": "Professioneller Ankauf von Gebrauchtwagen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fahrzeugbewertung",
            "description": "Professionelle Fahrzeugbewertung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Finanzierungsberatung",
            "description": "Beratung bei der Fahrzeugfinanzierung"
          }
        }
      ]
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Ahmed Sham",
        "jobTitle": "Geschäftsführer & Gründer",
        "description": "15+ Jahre Erfahrung im Automobilhandel"
      },
      {
        "@type": "Person",
        "name": "Sarah Müller",
        "jobTitle": "Verkaufsleiterin",
        "description": "12 Jahre Verkaufserfahrung"
      },
      {
        "@type": "Person",
        "name": "Michael Weber",
        "jobTitle": "Technischer Leiter",
        "description": "18 Jahre Kfz-Technik Erfahrung"
      },
      {
        "@type": "Person",
        "name": "Lisa Schmidt",
        "jobTitle": "Kundenservice Managerin",
        "description": "10 Jahre Service-Erfahrung"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2300",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "52.3759",
        "longitude": "9.7320"
      },
      "geoRadius": "50000"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "52.3759",
        "longitude": "9.7320"
      },
      "geoRadius": "100000"
    },
    "knowsAbout": [
      "Gebrauchtwagen",
      "Automobilhandel",
      "Fahrzeugbewertung",
      "Kfz-Finanzierung",
      "Automobil-Service",
      "Qualitätsprüfung"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "description": "Hochwertige Gebrauchtwagen mit Garantie"
      },
      {
        "@type": "Offer",
        "description": "Faire Ankaufspreise für Gebrauchtwagen"
      },
      {
        "@type": "Offer",
        "description": "Umfassende Beratung und Service"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
