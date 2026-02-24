import { Metadata } from 'next';
import CartPageClient from './CartPageClient';

// Кошик НЕ повинен індексуватися пошуковиками
export const metadata: Metadata = {
  title: 'Кошик | Extra-Platinum',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
};

export default function CartPage() {
  return <CartPageClient />;
}
