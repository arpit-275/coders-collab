import { useState } from 'react';
import { Card, Button, TextInput } from '../../../../components';
import styles from '../StepPhoneEmail.module.css';

export default function Phone({ onNext }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <Card title="Enter you phone number" icon="phone">
      <TextInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button text="Next" onClick={onNext} />
        </div>
        <p className={styles.bottomParagraph}>
          By entering your number, you're agreeing to our Terms of Service and Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
}
