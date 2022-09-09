import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card } from '../../components';
import styles from './Home.module.css';

export default function Home() {
  const signInLinkStyle = {
    color: '#0077ff',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px',
  };

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/authenticate');
  };

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Coder's Collab!" icon="logo">
        <p className={styles.text}>
          We're working hard to get Coder's Collab ready for everyone! While we wrap up the finishing touches, we're
          adding people gradually to make sure nothing breaks.
        </p>
        <div>
          <Button text="Let's Go" onClick={handleRegister} />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
        </div>
      </Card>
    </div>
  );
}
