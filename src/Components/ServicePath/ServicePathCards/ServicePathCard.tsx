import React from 'react';
import styles from './servicepathcard.module.css';
import { ICards } from '../../Services/Services';

interface serviceProp {
  service: ICards;
}

const ServicePathCard: React.FC<serviceProp> = ({ service }) => {
  return (
    <div className={styles.servicecard}>
      <div className={styles.imgcover}>
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${service.cardImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
      <div className={styles.info}>
        <h3>{service.productName}</h3>
        <p>{service.price}</p>
        <h5>{service.description}</h5>
      </div>
    </div>
  );
};

export default ServicePathCard;
