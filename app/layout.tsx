import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Male Therapist Melbourne | Full Body Massage for Women | Queen Care Mobile Spa',
  description: 'Professional male massage therapist in Melbourne specializing in female clients. Full body massage, therapeutic relaxation, mobile spa service to Richmond, South Yarra, St Kilda, Carlton, Brighton & all Melbourne suburbs. 8 years experience, 24/7 availability, complete privacy. Book your session today!',
  keywords: 'male therapist Melbourne, male massage therapist, full body massage Melbourne, female massage Melbourne, mobile massage Melbourne, massage for women Melbourne, male therapist for females, therapeutic massage Melbourne, Richmond massage, South Yarra massage, St Kilda massage, Carlton massage, Brighton massage, Fitzroy massage, Toorak massage, Prahran massage, Brunswick massage, mobile spa Melbourne, 24/7 massage Melbourne, overnight massage service, private massage Melbourne, professional massage therapist, Melbourne CBD massage, male masseuse Melbourne, full service massage Melbourne',
  authors: [{ name: 'Queen Care Melbourne' }],
  creator: 'Queen Care Melbourne',
  publisher: 'Queen Care Melbourne',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://queen-care.vercel.app',
  },
  openGraph: {
    title: 'Male Therapist Melbourne | Full Body Massage for Women | Queen Care',
    description: 'Professional male massage therapist with 8 years experience. Mobile spa service across Melbourne - Richmond, South Yarra, St Kilda & more. 24/7 availability, complete privacy for female clients.',
    type: 'website',
    locale: 'en_AU',
    url: 'https://queen-care.vercel.app',
    siteName: 'Queen Care Melbourne',
    images: [
      {
        url: '/Full Body Massage.png',
        width: 1200,
        height: 630,
        alt: 'Professional Male Massage Therapist - Full Body Massage Service Melbourne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Male Therapist Melbourne | Full Body Massage for Women',
    description: 'Professional male massage therapist. Mobile spa service across Melbourne. 8 years experience, 24/7 availability.',
    images: ['/Full Body Massage.png'],
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': 'Queen Care',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#059669" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="AU-VIC" />
        <meta name="geo.placename" content="Melbourne" />
        <meta name="geo.position" content="-37.8136;144.9631" />
        <meta name="ICBM" content="-37.8136, 144.9631" />
      </head>
      <body>{children}</body>
    </html>
  )
}
