import GoogleMaps from '../../../Utils/GoogleMap/GoogleMap';
import styles from './contactcard.module.css';
export default function ContactCard() {
  return (
    <div className={styles.contactcard}>
      <div className={styles.info}>
        <span>Contact</span>
        <div className={styles.contact}>
          <p>Phone : +91 98708 54362 </p>
          <p>Email : +91 example@gmail.com </p>
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
          <p>25/15 Sector-42 Atawa Chandigarh</p>
          <GoogleMaps />
        </div>
      </div>
      <div className={styles.info}>
        <span>Stay Connected</span>
        <div className={styles.contact1}>
          <img src="" alt="facebook" />
          <img src="" alt="twitter" />
          <img src="" alt="linkdin" />
          <img src="" alt="youtube" />
        </div>
      </div>
    </div>
  );
}
