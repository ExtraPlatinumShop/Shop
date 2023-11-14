import style from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import Lang from "@/UI/lang/Lang";
import Cart from "../Cart/Cart";
export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.header_wrapper}>
      <div className={style.header_row}>
        <ul className={style.navigate}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About us</Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/image/logo.png"
                alt="Picture Logo"
                width={100}
                height={100}
              ></Image>
            </Link>
          </li>
          <li><Link href="/product">Product</Link></li>
          <li>
            <Lang/>
            <Cart/>
          </li>
         
        </ul>
      </div>
      </div>
    </header>
  );
}
