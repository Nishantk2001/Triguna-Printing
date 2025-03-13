import GoogleMaps from "../../../Utils/GoogleMap/GoogleMap";
import styles from "./contactcard.module.css";
export default function ContactCard() {
  return (
    <div className={styles.contactcard}>
      <div className={styles.info}>
        <span>Contact</span>
        <div className={styles.contact}>
          <p>Phone : +91 94170 50564 </p>
          <p>Email : apurvaartschd@gmail.com </p>
        </div>
      </div>
      <div className={styles.info}>
        <span>Open Time</span>
        <div className={styles.contact}>
          <p>Monday - Friday : 10:00 - 20:00</p>
          <p>Saturday - Sunday : 11:00 - 18:00</p>
        </div>
      </div>
      <div className={styles.info}>
        <span>Address</span>
        <div className={styles.contact}>
          <p>25/15 Sector-42 Atawa, Chandigarh</p>
          <GoogleMaps />
        </div>
      </div>
      <div className={styles.info}>
        <span>Stay Connected</span>
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
