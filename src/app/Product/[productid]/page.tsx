import { Metadata } from 'next';
import { ref, get } from "firebase/database";
import { db } from "@/UI/firebase/data";
import { readFileSync } from 'fs';
import { join } from 'path';
import ProductPageClient from './ProductPageClient';

const BASE_URL = 'https://extra-platinum.com.ua';

// Читаємо переклади прямо з файлової системи (серверний код)
function getUaTranslations(): Record<string, string> {
  try {
    const filePath = join(process.cwd(), 'public', 'locales', 'ua', 'common.json');
    const content = readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error('[generateMetadata] Failed to read translations:', error);
    return {};
  }
}

// Отримуємо продукт з Firebase по name (productid з URL)
async function getProductByName(name: string) {
  try {
    const snapshot = await get(ref(db));
    if (!snapshot.exists()) return null;
    const rawData = snapshot.val();
    const products: any[] = Array.isArray(rawData) ? rawData : Object.values(rawData);
    const decodedName = decodeURIComponent(name);
    return products.find((p) => p?.name === decodedName) ?? null;
  } catch (error) {
    console.error('[generateMetadata] Firebase error:', error);
    return null;
  }
}

// Генерує SEO-метадані для кожної сторінки продукту
export async function generateMetadata(
  { params }: { params: { productid: string } }
): Promise<Metadata> {
  const [product, translations] = await Promise.all([
    getProductByName(params.productid),
    Promise.resolve(getUaTranslations()),
  ]);

  if (!product) {
    return {
      title: 'Товар не знайдено | Extra-Platinum',
      description: 'Такий продукт не знайдено в каталозі Extra-Platinum.',
      robots: { index: false },
    };
  }

  const uaName: string = translations[product.name] ?? product.name;
  const uaText: string = translations[product.text] ?? '';
  // Обрізаємо опис до 160 символів для meta description
  const description = uaText.length > 0
    ? uaText.slice(0, 157).trimEnd() + (uaText.length > 157 ? '…' : '')
    : `${uaName} від Extra-Platinum — виробника побутової хімії у Львові.`;

  const pageUrl = `${BASE_URL}/Product/${encodeURIComponent(product.name)}`;

  return {
    // layout.tsx вже має template '%s | Extra-Platinum',
    // тому тут вказуємо лише назву продукту
    title: uaName,
    description,
    keywords: [uaName, 'побутова хімія', 'Extra-Platinum', 'Львів', product.tag ?? ''].filter(Boolean),
    openGraph: {
      title: uaName,
      description,
      url: pageUrl,
      type: 'website',
      images: product.img ? [{ url: product.img, alt: uaName, width: 800, height: 800 }] : [],
      siteName: 'Extra-Platinum',
      locale: 'uk_UA',
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

// Серверний компонент-обгортка
export default function Page({ params }: { params: { productid: string } }) {
  return <ProductPageClient productid={params.productid} />;
}
