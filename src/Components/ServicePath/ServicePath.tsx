import { Link, useParams } from "react-router-dom";
import styles from "./servicepath.module.css";
import services from "../../assets/Allservice.json";
import ServicePathCard from "./ServicePathCards/ServicePathCard";
import { Service } from "../Services/Services";
import { useEffect } from "react";

export default function ServicePath() {
  const { path } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const service: Service = services.filter(
    (service) => service.name === path
  )[0];
  return (
    <div className={styles.servicepath}>
      <div className={styles.path}>
        <Link to="/" className={styles.home}>
          Home{" "}
        </Link>
        / {path}
      </div>
      <div
        className={styles.header}
        style={{
          backgroundImage: `url(${service.path.bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className={styles.heading}>{path}</h1>
        <p>{service.path.tagline}</p>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
      <h2>Most Popular {path}</h2>
      <div className={styles.cards}>
        {service.path.cards.map((serv) => (
          <ServicePathCard service={serv} key={serv.cardId} />
        ))}
      </div>
    </div>
  );
}
