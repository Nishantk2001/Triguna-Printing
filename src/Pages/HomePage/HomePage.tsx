import Contact from "../../Components/Contact/Contact";
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";
import { Element } from "react-scroll";
import AboutUsTwo from "../../Components/AboutUsTwo/AboutUsTwo";
import styles from "./homepage.module.css";
import Navbar from "../../Components/Navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className={styles.home}>
        <Element name="home">
          <Hero />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="about">
          <AboutUsTwo />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </>
  );
}
