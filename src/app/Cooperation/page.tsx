import { Metadata } from 'next';
import CooperationClient from './CooperationClient';

export const metadata: Metadata = {
  title: 'Співпраця | Extra-Platinum',
  description: 'Зацікавлені у співпраці з Extra-Platinum? Залиште свої контактні дані та ми зв\'яжемося з вами. Виробник побутової хімії у Львові.',
  keywords: ['співпраця', 'Extra-Platinum', 'побутова хімія', 'оптова торгівля', 'Львів'],
  openGraph: {
    title: 'Співпраця з Extra-Platinum',
    description: 'Стати партнером виробника щоянколоякісної побутової хімії з Львова. Залиште контакти — ми зв\'яжемося.',
    url: 'https://extra-platinum.com.ua/Cooperation',
    type: 'website',
    locale: 'uk_UA',
  },
  alternates: {
    canonical: 'https://extra-platinum.com.ua/Cooperation',
  },
};

export default function CooperationPage() {
  return <CooperationClient />;
}
