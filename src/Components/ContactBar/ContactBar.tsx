import styles from "./contactbar.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactBar() {
  return (
    <div className={styles.contactbar}>
      {/* Left Section - Contact Info */}
      <div className={styles.contactSection}>
        <p className={styles.contactInfo}>
          <FaPhoneAlt className={styles.icon} size={25} />
          <span>+91 94170 50564</span>
        </p>
        <p className={styles.contactInfo}>
          <MdEmail className={styles.icon} size={25} />
          <span>apurvaarts.chd@gmail.com</span>
        </p>
      </div>

      {/* Right Section - Social Media Icons */}
      <div className={styles.menubar}>
        <div className={styles.socialMedia}>
          <a href="#" className={styles.socialIcon}>
            <img src="facebook-icon.svg" alt="facebook" />
          </a>
          <a href="#" className={styles.socialIcon}>
            <img src="Twitter-icon.svg" alt="Twitter" />
          </a>
          <a href="#" className={styles.socialIcon}>
            <img src="Linkedin-icon.svg" alt="Linkedin" />
          </a>
          <a href="#" className={styles.socialIcon}>
            <img src="Youtube-icon.svg" alt="Youtube" />
          </a>
        </div>
      </div>
    </div>
  );
}
