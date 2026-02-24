import { MetadataRoute } from 'next'
import { ref, get } from "firebase/database";
import { db } from "@/UI/firebase/data";

const BASE_URL = 'https://extra-platinum.com.ua';

// Статичні сторінки сайту
const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/About-us`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/Cooperation`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  // /Cart навмисно не додаємо — кошик не індексується
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Дані зберігаються в корені бази (не у вузлі 'products')
    // Тому читаємо root ref
    const rootRef = ref(db);
    const snapshot = await get(rootRef);

    if (!snapshot.exists()) {
      console.warn('[sitemap] Firebase: no data found, returning static routes only');
      return staticRoutes;
    }

    const rawData = snapshot.val();

    // Firebase повертає масив (ключі 0,1,2...) — перетворюємо на масив об'єктів
    const productsArray: { name: string }[] = Array.isArray(rawData)
      ? rawData
      : Object.values(rawData);

    // Фільтруємо записи з коректним name, уникаємо дублікатів через Set
    const seenNames = new Set<string>();
    const productUrls: MetadataRoute.Sitemap = productsArray
      .filter((product) => {
        if (!product || typeof product.name !== 'string' || product.name.trim() === '') return false;
        if (seenNames.has(product.name)) return false;
        seenNames.add(product.name);
        return true;
      })
      .map((product) => ({
        url: `${BASE_URL}/Product/${encodeURIComponent(product.name)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));

    console.log(`[sitemap] Generated ${productUrls.length} product URLs`);
    return [...staticRoutes, ...productUrls];
  } catch (error) {
    console.error('[sitemap] Error fetching products from Firebase:', error);
    return staticRoutes;
  }
}