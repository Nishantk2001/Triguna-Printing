import styles from './contact.module.css';
import ContactCard from './ContactCard/ContactCard';
import Form from './Form/Form';
export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactForm}>
        <Form />
      </div>
      <div className={styles.card}>
        <ContactCard />
      </div>
    </div>
  );
}
