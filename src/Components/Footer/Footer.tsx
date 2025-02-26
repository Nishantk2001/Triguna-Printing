import styles from "./footer.module.css";
import { IoSend } from "react-icons/io5";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.leftFooterContent}>
          <div className={styles.img}>
            <img
              src="./Apurvaarts.png"
              alt="Placeholder Image"
              style={{ width: "150px", height: "75px" }}
            />
          </div>
          <div className={styles.footerText}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>
          <div className={styles.socialMedia}>
            <a href="#" className={styles.socialIcon}>
              <img src="whiteFacebookIcon.svg" alt="facebook" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src="WhiteTwitterIcon.svg" alt="Twitter" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src="WhiteLinkedinIcon.svg" alt="Linkedin" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src="WhiteYouTubeIcon.svg" alt="Youtube" />
            </a>
          </div>
        </div>
        <div className={styles.rightFooterContent}>
          <div className={styles.footerNav}>
            <h3>Company</h3>
            <p>Home</p>
            <p>Services</p>
            <p>Projects</p>
            <p>About Us</p>
            <p>Contact</p>
          </div>
          <div className={styles.footerContact}>
            <h3>Contact</h3>
            <p>+1 234 567 890</p>
            <p>support@example.com</p>
            <p>25/15 sector-42 Atawa Chandigarh</p>
          </div>
          <div className={styles.footerEmailInput}>
            <h3>Get the latest Information</h3>
            <div className={styles.emailInput}>
              <input type="email" placeholder="Enter your email address" />
              <button>
                <IoSend size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyRightsContent}>
        <div className={styles.bottomLine}></div>
        <div className={styles.copyRightsText}>
          <p>
            Copyright @ 2005 <span>Apurva Arts.</span> All Rights Reserved.
          </p>
          <p>Terms of Use | Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
