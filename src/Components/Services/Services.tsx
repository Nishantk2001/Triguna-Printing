import { useEffect, useState } from 'react';
import Card from './Card/Card';
import styles from './services.module.css';
export interface Service {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('./services.json')
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error('Error fetching services:', error));
  }, []);

  return (
    <div className={styles.services}>
      <div className={styles.firstsection}>
        <div className={styles.firstline}>
          <div className={styles.line}></div>
          <p>OUR SERVICES</p>
        </div>
        <p className={styles.line2}>Explore our Services</p>
        <p className={styles.line3}> Print Your Vision, Make It Reality!</p>
      </div>
      <div className={styles.cardbox}>
        {services.map((service: Service) => (
          <div key={service.id}>
            <Card service={service} />
          </div>
        ))}
      </div>
    </div>
  );
}
