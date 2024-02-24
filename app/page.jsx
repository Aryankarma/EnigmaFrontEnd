import Image from "next/image";
import styles from "./page.module.scss"; // importing sass file class syntax for next js [className={styles.yourClassName}]
import Link from "next/link";

export default function Home() {
  return <div>
    <h1 className={styles.MainHeading}>
        This is Home page. 
    </h1>
    <Link href="./conversation">Transfer me to Conversatoin Page.</Link>
  </div>
}
