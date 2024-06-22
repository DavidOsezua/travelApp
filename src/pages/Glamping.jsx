import React from "react";
import { Header, Hero, NavmenuMobile } from "../components";
import styles from "./Glamping.module.css";
import "../App.css";
import DestinationCard from "../components/DestinationCard";
import OfferCard from "../components/OfferCard";
import Category from "../components/Category";
import PackageCard from "../components/PackageCard";

const Glamping = () => {
  return (
    <section className={styles.glampingSection}>
      <div className="pageContainer">
        <Hero />
        <NavmenuMobile />
        <DestinationCard />
        <OfferCard />
        <Category />
        <PackageCard />
      </div>
    </section>
  );
};

export default Glamping;
