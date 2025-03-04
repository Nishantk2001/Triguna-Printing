import GoogleMap from "../../../Utils/GoogleMap/GoogleMap";
import styles from "./mobilecontactcard.module.css";
export default function MobileContactCard() {
  return (
    <div className={styles.mobilecontactcard}>
      <div className={styles.info}>
        <span>Address</span>
        <div className={styles.contact}>
          <p>25/15 Sector-42 Atawa Chandigarh</p>
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}
