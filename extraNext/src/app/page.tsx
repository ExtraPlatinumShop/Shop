import Image from "next/image";
import styles from "./page.module.css";
import SliderSeaction from "@/components/Slider-seaction/SliderSeaction";
import ProductsSeaction from "@/components/Products-seaction/ProductsSeaction";
import WhyWe from "@/components/Why-we-seaction/WhyWe";
export default function Home() {
  return (
    <main className={styles.main}>
      <SliderSeaction />
      <ProductsSeaction />
     
      <WhyWe />
    </main>
  );
}
