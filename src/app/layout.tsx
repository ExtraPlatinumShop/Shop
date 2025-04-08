import type { Metadata } from "next";
import "./globals.scss";
import RootClientWrapper from "./components/RootClientWrapper";

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
        <RootClientWrapper>
          {children}
        </RootClientWrapper>
      </body>
    </html>
  );
}
