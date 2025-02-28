import React from 'react';
import styles from './servicepathcard.module.css';

interface serviceProp {
  service: {
    id: number;
    name: string;
    url: string;
    price: string;
  };
}

const ServicePathCard: React.FC<serviceProp> = ({ service }) => {
  return (
    <div className={styles.servicecard}>
      <div className={styles.img}></div>
      <div className={styles.info}>
        <h3>{service.name}</h3>
        <p>{service.price}</p>
      </div>
    </div>
  );
};

export default ServicePathCard;
