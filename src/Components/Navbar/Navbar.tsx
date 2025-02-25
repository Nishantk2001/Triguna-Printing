import styles from "./navbar.module.css"
export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.img}>
         <img src="./Logo.png" alt="Placeholder Image" />
        </div>
        <div className={styles.section}>
        <nav className={styles.nav}>
          <p >Home</p>
          <p >Services</p>
          <p >Projects</p>
          <p >About Us</p>
          <p >Contact</p>
        </nav>
          <button className={styles.btn}>Get Started</button>
        </div>
    </div>
  )
}
