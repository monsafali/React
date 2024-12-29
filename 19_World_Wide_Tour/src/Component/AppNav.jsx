import React from "react";
import styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to={"cities"}>Cities </NavLink>
            <NavLink to={"countries"}>Countries </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AppNav;
