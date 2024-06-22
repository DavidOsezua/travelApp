import React from "react";
import styles from "./Category.module.css";
import { destinationCards } from "../data/data";

const Category = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Search by Category</h3>
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

export default Category;
