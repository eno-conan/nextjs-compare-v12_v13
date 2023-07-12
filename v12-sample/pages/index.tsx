import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

interface IUser {
  name: string;
  username: string;
}

export default function Home() {
  const [number, setNumber] = useState<number>(0);
  const [user, setUser] = useState<IUser>();

  // データ取得
  useEffect(() => {
    function getJson() {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(users => {
          setUser({ name: users.name, username: users.email })
        });
    };
    getJson();
  })

  // インクリメント
  const increment = () => {
    setNumber((number) => number + 1);
  }

  // クリックイベント
  const clickEvent = () => {
    alert('クリックされました');
  }

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
      <div>{`${user?.name}/${user?.username}`}</div>
      <div className={styles.count}>{number}</div>
      <button type='button' onClick={() => increment()} className={styles.button}>Increment</button>
      <button type='button' onClick={() => clickEvent()} className={styles.button}>Click Event</button>
    </main>
  )
}
