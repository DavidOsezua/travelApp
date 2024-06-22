import React from "react";
import styles from "./OfferCard.module.css";
import { destinationCards } from "../data/data";
import { destination1 } from "../assets";

const OfferCard = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Offers</h3>

      <div className={styles.cardContainer}>
        {destinationCards.map((card, i) => (
          <div key={i} className={styles.card}>
            <div>
              <img src={destination1} className={styles.image} />
            </div>

            <p>Los Angenles</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferCard;
