import { MetadataRoute } from 'next'
import { ref, get } from "firebase/database";
import { db } from "@/UI/firebase/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const productsRef = ref(db, 'products');
  const snapshot = await get(productsRef);
  const products = snapshot.val() || {};
  
  const baseUrls = [
    {
      url: 'https://extra-platinum.com.ua',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: 'https://extra-platinum.com.ua/About-us',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://extra-platinum.com.ua/Cart',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: 'https://extra-platinum.com.ua/Cooperation',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  const productUrls = Object.keys(products).map((productId) => ({
    url: `https://extra-platinum.com.ua/Product/${productId}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...baseUrls, ...productUrls]
} 