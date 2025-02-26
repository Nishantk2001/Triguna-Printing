import { useEffect, useState } from 'react';
import styles from './navbar.module.css';
export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.img}>
        <img src="./Apurvaarts.png" alt="Placeholder Image" style={{ width: '150px', height: '75px'}} />
      </div>
      <div className={styles.section}>
        <nav className={styles.nav}>
          <p>Home</p>
          <p>Services</p>
          <p>Projects</p>
          <p>About Us</p>
          <p>Contact</p>
        </nav>
        <button className={styles.btn}>Get Started</button>
      </div>
    </div>
  );
}
