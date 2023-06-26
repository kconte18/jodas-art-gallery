import WebsiteTitle from "./WebsiteTitle/WebsiteTitle";
import NavBar from "./Navbar/NavBar";
import styles from "./Header.module.css";

export default function Header(){
    return (
        <div className={styles["header-container"]}>
            <WebsiteTitle />
            <hr className={`${styles.line} ${styles.top}`} />
            <NavBar />
            <hr className={`${styles.line} ${styles.bottom}`}/>
        </div>
    )
}