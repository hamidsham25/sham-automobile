import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sham Automobile - Gebrauchtwagen in Langenhagen bei Hannover | Kaufen & Verkaufen",
  description: "Sham Automobile - Ihr vertrauensvoller Partner für Gebrauchtwagen in Langenhagen bei Hannover. Große Auswahl an qualitätsgeprüften Fahrzeugen. Faire Preise, transparente Beratung und erstklassiger Service seit 2008.",
  keywords: "Gebrauchtwagen, Langenhagen, Hannover, Sham Automobile, Auto kaufen, Auto verkaufen, Gebrauchtwagenhändler, Deutschland",
  authors: [{ name: "Sham Automobile" }],
  creator: "Sham Automobile",
  publisher: "Sham Automobile",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sham-automobile.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Sham Automobile - Gebrauchtwagen in Langenhagen bei Hannover",
    description: "Ihr vertrauensvoller Partner für Gebrauchtwagen in Langenhagen bei Hannover. Große Auswahl, faire Preise, erstklassiger Service.",
    url: 'https://sham-automobile.de',
    siteName: 'Sham Automobile',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sham Automobile - Gebrauchtwagen in Langenhagen bei Hannover",
    description: "Ihr vertrauensvoller Partner für Gebrauchtwagen in Langenhagen bei Hannover. Große Auswahl, faire Preise, erstklassiger Service.",
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
