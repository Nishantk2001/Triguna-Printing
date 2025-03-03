import { Link } from 'react-scroll';
import styles from './nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={false}
        duration={300}
        className={styles.Link}
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="services"
        spy={true}
        smooth={false}
        offset={-80}
        duration={300}
        className={styles.Link}
      >
        Services
      </Link>

      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={false}
        offset={-70}
        duration={300}
        className={styles.Link}
      >
        About Me
      </Link>

      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={false}
        offset={-70}
        duration={300}
        className={styles.Link}
      >
        Contact
      </Link>
    </nav>
  );
}
