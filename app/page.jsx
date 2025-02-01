import styles from "./page.module.css";
import ButtonGrid from "@/components/ButtonGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <Image src="/ez-logo.svg" alt="the easy logo" height={150} width={150} />
          <h1>Button Showcase</h1>
        </div>
        <p>Just click, paste, and be done! Give it a try!</p>
      </header>
      <main className={styles.main}>
        <ButtonGrid />
      </main>
    </div>
  );
}
