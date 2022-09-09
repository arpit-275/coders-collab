import styles from './Card.module.css';

export default function Card({ title, icon, children }) {
  return (
    <div className={styles.card}>
      <div className={styles.headingWrapper}>
        {icon && <img src={`/images/${icon}.png`} alt="logo" />}
        {title && <h1 className={styles.heading}>{title}</h1>}
      </div>
      {children}
    </div>
  );
}
