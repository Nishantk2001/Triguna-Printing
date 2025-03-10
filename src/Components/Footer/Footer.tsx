import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.leftFooterContent}>
          <div className={styles.img}>
            <img
              src="./Apurvaarts.png"
              alt="Placeholder Image"
              style={{ width: '150px', height: '75px' }}
            />
          </div>
          <div className={styles.footerText}>
            <p>
              At Apurva Arts, we bring your ideas to life with high-quality
              printing services tailored to meet your needs. Whether it's paper,
              clothing, flex, posters, cups, visiting cards, books, or any other
              type of printing
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
            <p>+91 94170 50564</p>
            <p>apurvaarts.chd@gmail.com</p>
            <p>25/15 sector-42 Atawa Chandigarh</p>
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
