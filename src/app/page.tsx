import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Extra-Platinum — Побутова хімія від виробника у Львові',
  description: 'Купуйте якісну побутову хімію від виробника Extra-Platinum у Львові: мило, засоби для посуду, прального порошку, гель для унітазів, кондиціонер та інше. Доступні ціни.',
  keywords: [
    'побутова хімія', 'засоби для чищення', 'мило рідке', 'пральний порошок',
    'засіб для посуду', 'гель для унітазу', 'кондиціонер для білизни',
    'Extra-Platinum', 'Львів', 'виробник побутової хімії'
  ],
  openGraph: {
    title: 'Extra-Platinum — Побутова хімія від виробника у Львові',
    description: 'Широкий асортимент якісної побутової хімії від виробника. Мило, засоби для посуду, порошки та інше.',
    url: 'https://extra-platinum.com.ua',
    type: 'website',
    locale: 'uk_UA',
    siteName: 'Extra-Platinum',
  },
  alternates: {
    canonical: 'https://extra-platinum.com.ua',
  },
};

export default function Home() {
  return <HomeClient />;
}
