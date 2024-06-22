import React from "react";
import styles from "./Footer.module.css";
import { logo } from "../assets";
import "../App.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`pageContainer ${styles.footerContainer}`}>
        <div>
          <img src={logo} className={styles.logo} />

          <p className={styles.logoText}>List Your Glamping Properties</p>
        </div>

        <div className={styles.textContainer}>
          <p>Strategic alliance</p>
          <p>Creators and Influencers</p>
          <p>B2B & B2C Alliances “Coming soon”</p>
          <p>© 1997-2021 Netflix, Inc.</p>
        </div>

        <div className={styles.textContainer}>
          <p>Help</p>
          <p>Support</p>
          <p>Disclosure</p>

          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
