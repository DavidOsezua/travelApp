import React from "react";
import styles from "./PackageCard.module.css";
import { destinationCards } from "../data/data";
import { car, hotel, plane, star, walking } from "../assets";

const PackageCard = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Popular Beach Destinations</h3>
      <div className={styles.cardContainer}>
        {destinationCards.map((card, i) => (
          <div className={styles.card} key={i}>
            <div>
              {" "}
              <img src={card.image} className={styles.image} />
            </div>

            <div className="pt-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2>Swiss Apls</h2>
                  <p>3Days 4 Nights</p>
                </div>

                <div className="flex gap-2">
                  <img src={star} />
                  <p>4.9</p>
                </div>
              </div>

              <div className="flex pt-4 justify-between items-center">
                <div className="flex flex-col justify-center items-center">
                  <img src={plane} />
                  <p>2 Flights</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <img src={hotel} />
                  <p>1 Hotel</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <img src={car} />
                  <p>2 Transfers</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <img src={walking} />
                  <p>4 Activities</p>
                </div>
              </div>

              <div className="pt-4">
                <li>Tour combo with return airport transfer</li>
                <li>City Tour</li>
                <li>Curioius Corner</li>
              </div>

              <div className="pt-4 flex gap-10">
                <p>₹88,952</p>

                <div className="flex gap-2 items-center">
                  <h1>₹88,952</h1>
                  <p>per person</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackageCard;
