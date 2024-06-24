import React from "react";
import styles from "./FlightTopCard.module.css";
import { calender, dataTransfer, location, person } from "../assets";

const FlightTopCard = () => {
  return (
    <section className={`${styles.section} py-[1rem] my-[1rem] px-[3rem]`}>
      <div className="flex gap-5 items-center">
        <p>Roundtrip</p>
        <p>One-way</p>
        <p>Multi-city</p>

        <select className="bg-transparent text-[#fff]  px-[1rem] py-1 rounded-md outline outline-1 outline-[#fff]">
          <option>Economy</option>
        </select>
      </div>

      <div className="flex justify-between items-center">
        <div className={`flex`}>
          <div className=" border-[#fff] border-[1px] pr-[7rem] py-[0.5rem] gap-1 rounded-lg flex pl-[0.5rem]">
            <img src={location} />
            <p>Leaving from</p>
          </div>

          <img src={dataTransfer} className={`w-[30px]`} />

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
          <input type="checkbox" className="bg-transparent " />
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

export default FlightTopCard;
