import React from 'react';
import styles from './Button.module.css';

export default function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{text}</span>
      <img src="/images/arrow-forward.png" alt="arrow" className={styles.arrow} />
    </button>
  );
}
