import React, { createContext, useState, useContext, ReactNode } from 'react';
import { TypeCard } from '@/app/Product/[productid]/page';

interface CartContextType {
  cartItems: TypeCard[];
  addToCart: (item: TypeCard) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<TypeCard[]>([]);

  const addToCart = (item: TypeCard) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext; 