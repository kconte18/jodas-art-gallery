import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <ul className={styles["navbar-container"]}>
            <li className={styles["navbar-item"]}>
                <Link to="">Art Gallery</Link>
            </li>
            <li className={styles["navbar-item"]}>
                <Link to="/about">About</Link>
            </li>
            <li className={styles["navbar-item"]}>
                <Link to="/contact-me">Contact Me</Link>
            </li>
        </ul>
    )
}