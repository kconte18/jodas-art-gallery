import { useEffect, useRef } from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    let homeActive = useRef(true);
    let contactActive = useRef(false);
    let aboutActive = useRef(false);

    useEffect(() => {

    },)

    return (
        <ul className={styles["navbar-container"]}>
            <li className={styles["navbar-item"]}>
                <NavLink to="" className={({ isActive }) => isActive ? styles.active : ""}>
                    Art Gallery
                </NavLink>
            </li>
            <li className={styles["navbar-item"]}>|</li>
            <li className={styles["navbar-item"]}>
                <NavLink to="/contact-me" className={({ isActive }) => isActive ? styles.active : ""}>
                    Contact Me
                </NavLink>
            </li>
            <li className={styles["navbar-item"]}>|</li>
            <li className={styles["navbar-item"]}>
                <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>
                    About
                </NavLink>
            </li>
        </ul>
    )
}