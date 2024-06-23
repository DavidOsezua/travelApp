import React from "react";
import styles from "./OfferCard.module.css";
import { offerCards } from "../data/data";

const OfferCard = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Offers</h3>

      <div className={styles.cardContainer}>
        {offerCards.map((card, i) => (
          <div key={i} className={styles.card}>
            <div>
              <img src={card.image} className={styles.image} />
            </div>

            <div className={`${styles.content}`}>
              <p>{card.text1}</p>
              <h1 className="font-bold text-[#fff] text-[1.3rem]">
                {card.title}
              </h1>
              <p>{card.text2}</p>

              <button className={styles.btn}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferCard;
