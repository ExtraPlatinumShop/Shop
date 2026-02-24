"use client";
import ProductsSeaction from "@/components/Products-seaction/ProductsSeaction";
import { useState, useEffect, useRef } from "react";
import "@/lang/i18n";
import { getDatabase, onValue, ref } from "firebase/database";
import HomeScreen from "@/components/HomeScreen/HomeScreen";

type Todo = {
  albom: string[];
  albomName: string[];
  capacity: string;
  id: number;
  img: string;
  name: string;
  price: string;
  tag: string;
  text: string;
  unit: string;
  completed: boolean;
};

export default function HomeClient() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([]);
  const isInitialRender = useRef(true);

  useEffect(() => {
    const database = getDatabase();
    const dbRef = ref(database);

    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();

      if (isInitialRender.current) {
        isInitialRender.current = false;
        setTodos([]);
      }

      if (data !== null && data !== 0) {
        const todosArray: Todo[] = Object.values(data) as Todo[];
        setTodos(todosArray);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <HomeScreen />
      <ProductsSeaction />
    </>
  );
}
