import { Link, useParams } from "react-router-dom";
import styles from "./servicepath.module.css";
import service from "../../assets/service.json";
import ServicePathCard from "./ServicePathCards/ServicePathCard";

export default function ServicePath() {
  const { path } = useParams();

  return (
    <div className={styles.servicepath}>
      <div className={styles.path}>
        <Link to="/" className={styles.home}>
          Home
        </Link>{" "}
        / {path}
      </div>
      <div className={styles.header}>
        <h1 className={styles.heading}>{path}</h1>
        <p>Stand Out with a Card That Speaks for You!</p>
        <button>Contact Us</button>
      </div>
      <h2>Most Popular {path}</h2>
      <div className={styles.cards}>
        {service.map((serv) => (
          <ServicePathCard service={serv} key={serv.id} />
        ))}
      </div>
    </div>
  );
}
