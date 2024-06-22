import React from "react";
import { destinationCards } from "../data/data";
import styles from "./DestinationCard.module.css";

const DestinationCard = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Top Vacation Destinations</h3>
      <div className={styles.cardContainer}>
        {destinationCards.map((card) => (
          <div className={styles.card}>
            <div className={styles.overLay}></div>
            <img src={card.image} className={styles.image} />

            <p className={styles.text}>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationCard;
