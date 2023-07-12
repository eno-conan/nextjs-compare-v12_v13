'use client'

import { useState } from "react";
import styles from '../page.module.css'

export default function Count() {
    const [number, setNumber] = useState<number>(0);

    // インクリメント
    const increment = () => {
        setNumber((number) => number + 1);
    }

    return (
        <>
            <div className={styles.count}>{number}</div>
            <button type='button' onClick={() => increment()} className={styles.button}>Increment</button>
        </>
    );
}