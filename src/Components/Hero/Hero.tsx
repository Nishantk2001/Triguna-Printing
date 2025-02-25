import styles from "./hero.module.css"
export default function Hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.sectionHero}>
            <div className={styles.firstline}>
                <div className={styles.line}></div>
                <p>SINCE 2005</p>
            </div>
            <p className={styles.exp}>Experience</p>
            <p className={styles.text}>Welcome to Triguna</p>
            <p className={styles.text1}>Your One-Stop</p>
            <p className={styles.text2}>Printing Solution</p>
            <p className={styles.paragraph}>At Triguna, we bring your ideas to life with high-quality printing services tailored to meet your needs. Whether it's paper, clothing, flex, posters, cups, visiting cards, books, or any other type of printing, 
            we ensure precision, durability, and vibrant designs that leave a lasting impression.</p>

            <button className={styles.customButton}>
                <span className={styles.icon}>&rarr;</span>
                <span className={styles.btntext}>Get Started</span>
            </button>
        </div>
    </div>
  )
}
