// Спільний тип для картки продукту
// Використовується в ProductPageClient.tsx, CartForm.tsx та інших місцях
export interface TypeCard {
  id: string;
  name: string;
  price: number;
  img: string;
  text: string;
  capacity: string;
  albom: string[];
  albomName: string[];
  unit: string;
  weight: number;
  quantity: number;
}
