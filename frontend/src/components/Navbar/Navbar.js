import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const logoStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '22px',
    display: 'flex',
    alignItems: 'center',
  };

  const logoText = {
    marginLeft: '10px',
  };

  return (
    <nav className={`container ${styles.navbar}`}>
      <Link to="/" style={logoStyle}>
        <img src="/images/logo.png" alt="logo" />
        <span style={logoText}>Coder's Collab</span>
      </Link>
    </nav>
  );
}

/** module.css does not target styles of child elements, thus we write inline styles for Link tag */
