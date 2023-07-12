import Image from 'next/image'
import ClickEvent from './component/clickEvent';
import Count from './component/count';
import JsonData from './component/jsonData';
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <JsonData />
      <Count />
      <ClickEvent />
    </main>
  )
}
