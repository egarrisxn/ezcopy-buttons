import styles from './page.module.css';
import ButtonGrid from '@/components/ButtonGrid';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Button Style Showcase</h1>
        <p>Click any button to copy its CSS code</p>
      </header>
      <main className={styles.main}>
        <ButtonGrid />
      </main>
    </div>
  );
}
