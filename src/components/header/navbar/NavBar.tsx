import { useEffect, useRef } from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <ul className={styles["navbar-container"]}>
        <link href="https://fonts.googleapis.com/css2?family=Bacasime+Antique&display=swap" rel="stylesheet"></link>
            <li className={styles["navbar-item"]}>
                <NavLink to="" className={({ isActive }) => isActive ? styles.active : ""}>
                    Gallery
                </NavLink>
            </li>
            <li className={`${styles["navbar-item"]} ${styles["separator"]}`}>|</li>
            <li className={styles["navbar-item"]}>
                <NavLink to="/contact-me" className={({ isActive }) => isActive ? styles.active : ""}>
                    Contact Me
                </NavLink>
            </li>
            <li className={`${styles["navbar-item"]} ${styles["separator"]}`}>|</li>
            <li className={styles["navbar-item"]}>
                <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>
                    About
                </NavLink>
            </li>
        </ul>
    )
}