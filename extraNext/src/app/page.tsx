"use client";
import ProductsSeaction from "@/components/Products-seaction/ProductsSeaction";
import WhyWe from "@/components/Why-we-seaction/WhyWe";
import { db } from "@/UI/firebase/data";
import { useState, useEffect } from "react";
import "@/lang/i18n";
import { onValue, ref } from "firebase/database";
import HomeScreen from "@/components/HomeScreen/HomeScreen";
import { useTranslation } from "react-i18next";

type Todo = object;
<link rel="icon" href="/src/app/favicon.ico" sizes="any" />;

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isInitialRender, setIsInitialRender] = useState<boolean>(true);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (isInitialRender) {
        setIsInitialRender(false);
        setTodos([]);
      }
      if (data !== null && data !== 0) {
        Object.values(data).forEach((todo: any) => {
          if (isInitialRender) {
            setIsInitialRender(false);
            setTodos((oldArray: Todo[]) => [...oldArray, todo]);
          }
        });
      }
    });
  }, [isInitialRender, setTodos, setIsInitialRender]);

  return (
    <>
      <HomeScreen />
      <ProductsSeaction />
    </>
  );
}
