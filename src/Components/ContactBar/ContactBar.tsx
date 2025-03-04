import styles from "./contactbar.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactBar() {
  return (
    <div className={styles.contactbar}>
      {/* Left Section - Contact Info */}
      <div className={styles.contactSection}>
        <p className={styles.contactInfo}>
          <FaPhoneAlt className={styles.icon} size={20} />
          <span>+91 94170 50564</span>
        </p>
        <p className={styles.contactInfo}>
          <MdEmail className={styles.icon} size={20} />
          <span>apurvaarts.chd@gmail.com</span>
        </p>
      </div>

      {/* Right Section - Social Media Icons */}
      <div className={styles.menubar}>
        <p className={styles.contactInfo}>
          <FaLocationDot className={styles.icon} size={20} />
          <span>25/15 Sector-42 Atawa Chandigarh</span>
        </p>
      </div>
    </div>
  );
}
