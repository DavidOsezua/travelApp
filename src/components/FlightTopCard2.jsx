import React from "react";
import styles from "./FlightTopCard2.module.css";
import { calender, dataTransfer, location, person } from "../assets";

const FlightTopCard2 = () => {
  return (
    <section className={`${styles.section} py-[1rem] my-[1rem] px-[1rem]`}>
    

      <div className="flex justify-between items-center">
        <div className={`flex gap-4`}>
          <div className=" border-[#fff] border-[1px] pr-[7rem] py-[0.5rem] gap-1 rounded-lg flex pl-[0.5rem]">
            <img src={location} />
            <p>Leaving from</p>
          </div>

          

          <div className=" border-[#fff] border-[1px] pr-[7rem] py-[0.5rem] gap-1 rounded-lg flex pl-[0.5rem]">
            <img src={location} />
            <p>Going to</p>
          </div>
        </div>

        <div className=" border-[#fff] border-[1px] pr-[7rem] py-[0.5rem] gap-1 rounded-lg flex pl-[0.5rem]">
          <img src={calender} />
          <p>Date</p>
        </div>

        <div className=" border-[#fff] border-[1px] pr-[7rem] py-[0.5rem] gap-1 rounded-lg flex pl-[0.5rem]">
          <img src={person} />
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
