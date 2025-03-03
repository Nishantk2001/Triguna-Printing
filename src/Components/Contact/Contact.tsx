import styles from "./contact.module.css";
import ContactCard from "./ContactCard/ContactCard";
// import ContactCard from "./ContactCard/ContactCard";
import Form from "./Form/Form";
import MobileContactCard from "./MobileContactCard/MobileContactCard";
export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactForm}>
        <Form />
      </div>
      <div className={styles.card}>
        <ContactCard />
      </div>
      <div className={styles.map}>
        <MobileContactCard />
      </div>
    </div>
  );
}
