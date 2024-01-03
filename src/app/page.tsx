"use client";
import ProductsSeaction from "@/components/Products-seaction/ProductsSeaction";
import { useState, useEffect } from "react";
import "@/lang/i18n";
import { getDatabase, onValue, ref } from "firebase/database";
import HomeScreen from "@/components/HomeScreen/HomeScreen";
import Loading from "./loading";

<link rel="icon" href="/src/app/favicon.ico" sizes="any" />;

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

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isInitialRender, setIsInitialRender] = useState<boolean>(true);



  useEffect(() => {
    const fetchData = async () => {
      const database = getDatabase();
      const dbRef = ref(database);
  
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
  
        if (isInitialRender) {
          setIsInitialRender(false);
          setTodos([]);
        }
  
        if (data !== null && data !== 0) {
          const todosArray: Todo[] = Object.values(data) as Todo[];
  
          setTodos((prevTodos) => [...prevTodos, ...todosArray]);
        }
      });
  
      setLoading(false);
    };
  
    fetchData();
  }, [isInitialRender, setTodos, setIsInitialRender]);
  
  return (
    <>
    {
      loading  ?<Loading/>:
      <>
    
       <HomeScreen />
      <ProductsSeaction />
      </>
    }
      
    </>
  );
}
