import React from 'react';
import styles from './card.module.css';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Service } from '../Services';
import { Link } from 'react-router-dom';

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
        <Link to={`/${service.name}`}>
          <button className={styles.btn}>
            <MdOutlineArrowOutward size={30} className={styles.UpIcon} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
