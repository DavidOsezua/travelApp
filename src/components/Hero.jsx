import React from "react";
import { hero, logo } from "../assets";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <img src={hero} className={styles.hero} />
      <div className={styles.content}>
        <h3>Make Your Once In a Lifetime Adventure Your Anytime Adventure</h3>

        <img src={logo} className={styles.logo} />
        <buttn className={styles.button}>Start Exploring</buttn>
      </div>
    </div>
  );
};

export default Hero;
