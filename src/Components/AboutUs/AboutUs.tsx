import styles from './about.module.css';

export default function AboutUs() {
  return (
    <div className={styles.about}>
      <div className={styles.img}>
        {/* <img src="./Banner-1.jpg" alt="Placeholder Image" /> */}
      </div>
      <div className={styles.intro}>
        <h2>About Us - Triguna Printing Solutions</h2>
        <div className={styles.text}>
          <span>T</span>
          <div className={styles.para}>
            <p>
              Triguna, we believe that printing is more than just ink on
              paper—it's about bringing ideas to life with precision,
              creativity, and quality. As a leading printing solutions provider,
              we cater to a wide range of printing needs, including paper,
              clothing, flex, posters, cups, visiting cards, books, and more.
            </p>
            <div className={styles.text2}>
              <strong>Our goal </strong>
              is to provide high-quality, affordable, and customized printing
              solutions that help businesses and individuals showcase their
              brands, creativity, and messages effectively.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.designSol}>
        <h2>Design Solution</h2>
        <div className={styles.sections}>
          <div className={styles.section}>
            <div className={styles.sectionPart}>
              <span>01</span>
              <h3>Planning</h3>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionPart}>
              <span>02</span>
              <h3>Design</h3>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionPart}>
              <span>03</span>
              <h3>Solutions</h3>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>
        </div>
      </div>
      <div className={styles.choose}>
        <h2>Why Choose Triguna?</h2>
        <ul className={styles.chooselist}>
          <li className={styles.listElem}>
            <strong>Unmatched Print Quality</strong>– Crisp, clear, and vibrant
            prints every time.
          </li>
          <li className={styles.listElem}>
            <strong>Customization & Creativity</strong>– Tailor-made designs to
            meet your needs.
          </li>
          <li className={styles.listElem}>
            <strong>Fast & Reliable Service</strong>– Quick turnaround without
            compromising on quality.
          </li>
          <li className={styles.listElem}>
            <strong>Affordable Pricing</strong>– Premium printing solutions at
            competitive rates.
          </li>
        </ul>
      </div>
    </div>
  );
}
