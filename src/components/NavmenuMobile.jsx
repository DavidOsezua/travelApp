import React from "react";
import styles from "./NavmenuMobile.module.css";
import { NavLink } from "react-router-dom";
import { searchGroup } from "../data/data";

const NavmenuMobile = () => {
  return (
    <section className={styles.section}>
      <div className={styles.searchGroups}>
        {searchGroup.map((group) => (
          <div key={group.text} className={styles.group}>
            <img src={group.icon} />
            <p>{group.text}</p>
          </div>
        ))}
      </div>

      <ul className={styles.navMenu}>
        <li className={styles.navItems}>
          <NavLink to="/glamping" className={`${styles.link}`}>
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
    </section>
  );
};

export default NavmenuMobile;
