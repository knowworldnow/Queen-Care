export default function Head() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://queen-care.vercel.app/#business",
        "name": "Queen Care Melbourne",
        "alternateName": "Queen Care Mobile Spa",
        "description": "Professional male massage therapist specializing in therapeutic massage for female clients across Melbourne",
        "url": "https://queen-care.vercel.app",
        "telephone": "+442045770347",
        "email": "contact@queencare.com.au",
        "priceRange": "$50-$100",
        "image": "https://queen-care.vercel.app/Full Body Massage.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Melbourne",
          "addressRegion": "VIC",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -37.8136,
          "longitude": 144.9631
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Melbourne"
          },
          {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": -37.8136,
              "longitude": 144.9631
            },
            "geoRadius": "50000"
          }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "6",
          "bestRating": "5",
          "worstRating": "5"
        },
        "paymentAccepted": "Cash"
      },
      {
        "@type": "Service",
        "@id": "https://queen-care.vercel.app/#service",
        "serviceType": "Mobile Massage Therapy",
        "provider": {
          "@id": "https://queen-care.vercel.app/#business"
        },
        "areaServed": {
          "@type": "State",
          "name": "Victoria"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Massage Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full Body Massage",
                "description": "Complete relaxation massage with full service and personalized care"
              },
              "price": "100",
              "priceCurrency": "AUD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Neck & Shoulder Massage",
                "description": "Targeted therapy for neck and shoulder tension relief"
              },
              "price": "60",
              "priceCurrency": "AUD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Head & Scalp Massage",
                "description": "Soothing scalp and temple massage for stress relief"
              },
              "price": "50",
              "priceCurrency": "AUD"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you provide mobile massage services across Melbourne?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! I provide professional mobile massage services to all Melbourne suburbs including Richmond, South Yarra, St Kilda, Carlton, Fitzroy, Brighton, Toorak, Prahran, Brunswick, Caulfield, Glen Waverley, Box Hill, and surrounding areas. I come to your location with all necessary equipment for your convenience and privacy."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose a male therapist for massage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As a professional male massage therapist with 8 years of experience, I specialize in therapeutic techniques specifically for female clients. Many women prefer male therapists for deeper pressure and targeted muscle relief. I maintain the highest standards of professionalism, privacy, and respect throughout every session."
            }
          },
          {
            "@type": "Question",
            "name": "What are your availability and booking hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I'm available 24/7 including days, evenings, nights, and weekends. You can book sessions at any time that suits your schedule. I also offer extended overnight packages for complete relaxation and rejuvenation."
            }
          },
          {
            "@type": "Question",
            "name": "What types of massage services do you offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I specialize in full body relaxation massage ($100), neck & shoulder therapy ($60), and head & scalp massage ($50). All sessions include premium aromatherapy oils and personalized techniques. I also offer full service packages and extended sessions tailored to your specific needs."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure privacy and discretion?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Privacy is my absolute priority. I provide dedicated service exclusively for female clients with complete discretion. All sessions are confidential, and I maintain professional boundaries at all times."
            }
          },
          {
            "@type": "Question",
            "name": "What are your payment methods?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I accept cash payment upon completion of the service. This ensures flexibility and convenience for all clients. Prices are transparent with no hidden fees."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book a session?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Booking is easy! Simply contact me via WhatsApp or Telegram. I respond quickly and can usually accommodate same-day bookings."
            }
          },
          {
            "@type": "Question",
            "name": "What makes your full service massage different?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "My full service massage is completely customized to satisfy all your special needs. With 8 years of professional experience, I understand that every client is unique. I provide comprehensive therapeutic care, personalized pressure, extended relaxation time, and special attention to your specific requirements."
            }
          }
        ]
      },
      {
        "@type": "Person",
        "name": "Queen Care Therapist",
        "jobTitle": "Professional Massage Therapist",
        "description": "Male massage therapist with 8 years of experience specializing in therapeutic massage for female clients",
        "gender": "Male",
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Massage Therapist",
          "occupationalCategory": "Healthcare Practitioners and Technical Occupations"
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}
