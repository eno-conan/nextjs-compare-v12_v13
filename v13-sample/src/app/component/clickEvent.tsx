'use client'
import styles from '../page.module.css'

export default function ClickEvent() {
    // クリックイベント
    const clickEvent = () => {
        alert('クリックされました');
    }

    return (
        <>
            <button type='button' onClick={() => clickEvent()} className={styles.button}>Click Event</button>
        </>)
}