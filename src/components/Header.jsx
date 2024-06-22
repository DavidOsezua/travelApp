import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.navContainer}`}>
        <ul className={styles.navMenu}>
          <li className={styles.navItems}>
            <NavLink to="/" className={`${styles.link}`}>
              Glamping
            </NavLink>
          </li>
          <li className={styles.navItems}>
            <NavLink to="/hotels" className={`${styles.link}`}>
              Hotels
            </NavLink>
          </li>
          <li className={styles.navItems}>
            <NavLink to="/flight" className={`${styles.link}`}>
              Flight
            </NavLink>
          </li>
          <li className={styles.navItems}>
            <NavLink to="/cars" className={`${styles.link}`}>
              Cars
            </NavLink>
          </li>
          <li className={styles.navItems}>
            <NavLink to="/packages" className={`${styles.link}`}>
              Packages
            </NavLink>
          </li>
          <li className={styles.navItems}>
            <NavLink to="/adventures" className={`${styles.link}`}>
              Adventures
            </NavLink>
          </li>
        </ul>

        <img src={logo} className={styles.logo} />

        <div className={styles.searchGroup}>
          <div>Get App</div>

          <div>
            <p>Search</p>
          </div>

          <div>
            <p>List your Property</p>
          </div>

          <button>Sign-Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
