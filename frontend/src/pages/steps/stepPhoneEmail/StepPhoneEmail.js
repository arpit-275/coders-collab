import { useState } from 'react';
import Phone from './phone/Phone';
import Email from './email/Email';
import styles from './StepPhoneEmail.module.css';

const authOptions = {
  phone: Phone,
  email: Email,
};

export default function StepPhoneEmail({ onNext }) {
  const [type, setType] = useState('phone');
  const Component = authOptions[type];

  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.buttonWrap}>
            <button
              className={`${styles.tabButton} ${type === 'phone' ? styles.active : ''}`}
              onClick={() => setType('phone')}
            >
              <img src="/images/phone-white.png" alt="phone" />
            </button>
            <button
              className={`${styles.tabButton} ${type === 'email' ? styles.active : ''}`}
              onClick={() => setType('email')}
            >
              <img src="/images/mail-white.png" alt="email" />
            </button>
          </div>
          <Component onNext={onNext} />
        </div>
      </div>
    </>
  );
}
