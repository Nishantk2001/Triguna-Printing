import styles from './contactbar.module.css';
import { FaFacebook, FaLinkedin, FaYoutube, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillTwitterCircle } from 'react-icons/ai';

export default function ContactBar() {
  return (
    <div className={styles.contactbar}>
      {/* Left Section - Contact Info */}
      <div className={styles.contactSection}>
        <p className={styles.contactInfo}>
          <FaPhoneAlt className={styles.icon} size={25} />
          <span>+1 234 567 890</span>
        </p>
        <p className={styles.contactInfo}>
          <MdEmail className={styles.icon} size={25} />
          <span>support@example.com</span>
        </p>
      </div>

      {/* Right Section - Social Media Icons */}
      <div className={styles.menubar}>
        <div className={styles.socialMedia}>
          <a href="#" className={styles.socialIcon}>
            <FaFacebook size={25} />
          </a>
          <a href="#" className={styles.socialIcon}>
            <AiFillTwitterCircle size={25} />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FaLinkedin size={25} />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FaYoutube size={25} />
          </a>
        </div>
      </div>
    </div>
  );
}
