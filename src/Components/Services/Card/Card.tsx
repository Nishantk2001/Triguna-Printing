import React from 'react';
import styles from './card.module.css';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Service } from '../Services';

interface CardProps {
  service: Service;
}

const Card: React.FC<CardProps> = ({ service }) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <span>{service.name}</span>
        <p>{service.description}</p>
      </div>
      <div className={styles.sectiontwo}>
        <div className={styles.img}>
          <img
            src={service.imageUrl}
            alt={service.name}
            className={styles.serviceCardImage}
          />
        </div>
        <button className={styles.btn}>
          <MdOutlineArrowOutward size={30} />
        </button>
      </div>
    </div>
  );
};

export default Card;
