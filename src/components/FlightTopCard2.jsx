import React from "react";
import styles from "./FlightTopCard2.module.css";

const FlightTopCard2 = () => {
  return (
    <section className={`${styles.section} py-[1rem] my-[1rem] px-[1rem]`}>

      <div className="flex justify-between">
        <div className={`flex`}>
          <div>
            <p>Leaving from</p>
          </div>

          <div>
            <p>Going to</p>
          </div>
        </div>

        <div>
          <p>Date</p>
        </div>
        <div>
          <p>Traveler</p>
        </div>
        <button>Search</button>
      </div>

      <div className="flex gap-2">
        <div>
          <input type="checkbox" />
          <label>Add a flight</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Add a flight</label>
        </div>
      </div>
    </section>
  );
};

export default FlightTopCard2;
