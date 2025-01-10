import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";
import { useTranslation } from "react-i18next";

export const metadata: Metadata = {
  title: {
    template: '%s | Extra-Platinum',
    default: 'Extra-Platinum - Побутова хімія у Львові'
  },
  description: 'Високоякісна побутова хімія від виробника у Львові. Широкий асортимент засобів для чищення, прання та догляду за домом.',
  keywords: ['побутова хімія', 'засоби для чищення', 'мило', 'пральний порошок', 'Львів', 'Extra-Platinum'],
  authors: [{ name: 'Extra-Platinum' }],
  creator: 'Extra-Platinum',
  metadataBase: new URL('https://extra-platinum.com.ua'),
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    siteName: 'Extra-Platinum',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  alternates: {
    canonical: '/',
    languages: {
      'uk-UA': '/ua',
      'en-US': '/en',
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
       <Header/>
        <section>
        {children}
        </section>
       <Footer/>
      </body>
    </html>
  );
}
