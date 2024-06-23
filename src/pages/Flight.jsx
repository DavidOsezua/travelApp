import React from "react";
import { Header, Hero, NavmenuMobile } from "../components";
import styles from "./Glamping.module.css";
import "../App.css";
import DestinationCard from "../components/DestinationCard";
import OfferCard from "../components/OfferCard";
import Category from "../components/Category";
import PackageCard from "../components/PackageCard";
import FlightTopCard from "../components/FlightTopCard";
import FlightTopCard2 from "../components/FlightTopCard2";

const Flight = () => {
  return (
    <section className={styles.glampingSection}>
      <div className="pageContainer">
        <FlightTopCard />
        <Hero />
        <NavmenuMobile />
        <DestinationCard />
        <OfferCard />
        <Category />
        <PackageCard title={`Popular Beach Destinations`} />
        <PackageCard title={`All Inclusive Packages!`} />
      </div>
    </section>
  );
};

export default Flight;
