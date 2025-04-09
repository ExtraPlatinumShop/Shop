'use client';

import { ReactNode } from 'react';
import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from '../context/CartContext';

interface RootClientWrapperProps {
  children: ReactNode;
}

export default function RootClientWrapper({ children }: RootClientWrapperProps) {
  return (
    <CartProvider>
      <Header />
      <section>
        {children}
      </section>
      <Footer />
    </CartProvider>
  );
} 