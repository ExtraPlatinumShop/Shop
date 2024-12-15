import { MetadataRoute } from 'next'
import { ref, get } from "firebase/database";
import { db } from "@/UI/firebase/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Отримуємо всі ID продуктів з Firebase
  const productsRef = ref(db, 'products');
  const snapshot = await get(productsRef);
  const products = snapshot.val() || {};
  
  // Базові URL
  const baseUrls = [
    {
      url: 'https://extra-platinum.com.ua',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://extra-platinum.com.ua/About-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://extra-platinum.com.ua/Cart',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://extra-platinum.com.ua/Cooperation',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Додаємо URL продуктів
  const productUrls = Object.keys(products).map((productId) => ({
    url: `https://extra-platinum.com.ua/Product/${productId}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...baseUrls, ...productUrls]
} 